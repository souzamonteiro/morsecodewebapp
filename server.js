const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Configurações
const config = {
    //port: 3000,
    //sslPort: 3443,
    port: 4000,
    sslPort: 4443,
    folder: 'www',
    enableSSL: false,
    sslKey: 'localhost-key.pem',
    sslCert: 'localhost.pem',
    cors: true,
    spaMode: true, // Single Page Application mode (redirect all to index.html)
    gzip: true,
    cache: {
        static: 3600, // 1 hora para arquivos estáticos
        html: 300, // 5 minutos para HTML
    }
};

// MIME Types
const mimeTypes = {
    '.html': 'text/html; charset=UTF-8',
    '.htm': 'text/html; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain',
    '.pdf': 'application/pdf',
    '.zip': 'application/zip',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf',
    '.wasm': 'application/wasm',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.map': 'application/json'
};

// Log com timestamp
function log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const colors = {
        INFO: '\x1b[36m', // Cyan
        SUCCESS: '\x1b[32m', // Green
        WARN: '\x1b[33m', // Yellow
        ERROR: '\x1b[31m', // Red
        DEBUG: '\x1b[35m' // Magenta
    };
    const reset = '\x1b[0m';
    console.log(`${colors[type] || reset}[${timestamp}] ${type}:${reset} ${message}`);
}

// Verifica se pasta www existe
if (!fs.existsSync(config.folder)) {
    log(`Criando pasta '${config.folder}'...`, 'INFO');
    fs.mkdirSync(config.folder, { recursive: true });
    
    // Cria um index.html padrão se a pasta estiver vazia
    const defaultHtml = `<!DOCTYPE html>
<html>
<head>
    <title>Servidor Node.js</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 800px; 
            margin: 50px auto; 
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container { 
            background: rgba(255, 255, 255, 0.1); 
            padding: 30px; 
            border-radius: 10px; 
            backdrop-filter: blur(10px);
        }
        h1 { color: white; }
        code { 
            background: rgba(0,0,0,0.3); 
            padding: 2px 6px; 
            border-radius: 4px; 
            font-family: monospace;
        }
        a { color: #ffcc00; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Servidor Node.js Funcionando!</h1>
        <p>Servidor web rodando na porta <code>${config.port}</code></p>
        <p>Pasta servida: <code>${config.folder}</code></p>
        <p>Coloque seus arquivos HTML, CSS, JS na pasta <code>${config.folder}</code></p>
        <h3>Comandos úteis:</h3>
        <ul>
            <li><code>node server.js</code> - Inicia o servidor</li>
            <li><code>curl http://localhost:${config.port}</code> - Testa o servidor</li>
            <li>Acesse <a href="http://localhost:${config.port}">http://localhost:${config.port}</a> no navegador</li>
        </ul>
        <p><em>Servidor iniciado em ${new Date().toLocaleString()}</em></p>
    </div>
</body>
</html>`;
    
    fs.writeFileSync(path.join(config.folder, 'index.html'), defaultHtml);
    log(`Arquivo index.html padrão criado em '${config.folder}'`, 'SUCCESS');
}

// Função para servir arquivos
function serveFile(req, res, filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Arquivo não encontrado
                if (config.spaMode && ext === '') {
                    // No SPA mode, serve index.html para rotas não encontradas
                    const indexPath = path.join(config.folder, 'index.html');
                    if (fs.existsSync(indexPath)) {
                        serveFile(req, res, indexPath);
                        return;
                    }
                }
                serve404(req, res);
            } else {
                serve500(req, res, err);
            }
        } else {
            // Configura headers
            const headers = {
                'Content-Type': contentType,
                'X-Powered-By': 'Node.js Simple Server'
            };
            
            // Cache headers
            if (config.cache) {
                if (ext === '.html' || ext === '.htm') {
                    headers['Cache-Control'] = `public, max-age=${config.cache.html}`;
                } else if (mimeTypes[ext] && mimeTypes[ext].startsWith('image/') || 
                          mimeTypes[ext] && mimeTypes[ext].startsWith('font/') ||
                          ext === '.js' || ext === '.css') {
                    headers['Cache-Control'] = `public, max-age=${config.cache.static}`;
                }
            }
            
            // CORS headers
            if (config.cors) {
                headers['Access-Control-Allow-Origin'] = '*';
                headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
                headers['Access-Control-Allow-Headers'] = 'Content-Type';
            }
            
            // Gzip compression (simples)
            if (config.gzip && (ext === '.html' || ext === '.htm' || ext === '.js' || ext === '.css' || ext === '.json')) {
                const acceptEncoding = req.headers['accept-encoding'] || '';
                if (acceptEncoding.includes('gzip')) {
                    const zlib = require('zlib');
                    headers['Content-Encoding'] = 'gzip';
                    zlib.gzip(content, (err, result) => {
                        if (err) {
                            serve500(req, res, err);
                            return;
                        }
                        headers['Content-Length'] = result.length;
                        res.writeHead(200, headers);
                        res.end(result);
                    });
                    return;
                }
            }
            
            headers['Content-Length'] = content.length;
            res.writeHead(200, headers);
            res.end(content);
            
            // Log da requisição
            const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            log(`${ip} - "${req.method} ${req.url}" 200 ${content.length} bytes`, 'SUCCESS');
        }
    });
}

// Página 404
function serve404(req, res) {
    const html = `<!DOCTYPE html>
<html>
<head>
    <title>404 - Página Não Encontrada</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 50px;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h1 { font-size: 100px; margin: 0; }
        p { font-size: 20px; }
        a { color: white; text-decoration: underline; }
        .container { 
            background: rgba(255, 255, 255, 0.1); 
            padding: 40px; 
            border-radius: 15px;
            backdrop-filter: blur(10px);
            max-width: 600px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>404</h1>
        <h2>Página Não Encontrada</h2>
        <p>A página que você está procurando não existe.</p>
        <p><a href="/">Voltar para a página inicial</a></p>
    </div>
</body>
</html>`;
    
    res.writeHead(404, {
        'Content-Type': 'text/html; charset=UTF-8',
        'Content-Length': Buffer.byteLength(html)
    });
    res.end(html);
    
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    log(`${ip} - "${req.method} ${req.url}" 404`, 'WARN');
}

// Página 500
function serve500(req, res, error) {
    const html = `<!DOCTYPE html>
<html>
<head>
    <title>500 - Erro Interno do Servidor</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 50px;
            background: linear-gradient(135deg, #ff5858 0%, #f09819 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h1 { font-size: 100px; margin: 0; }
        p { font-size: 20px; }
        .error { 
            background: rgba(255, 255, 255, 0.2); 
            padding: 20px; 
            border-radius: 10px;
            margin: 20px 0;
            font-family: monospace;
            text-align: left;
            max-width: 800px;
            overflow: auto;
        }
        .container { 
            background: rgba(255, 255, 255, 0.1); 
            padding: 40px; 
            border-radius: 15px;
            backdrop-filter: blur(10px);
            max-width: 800px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>500</h1>
        <h2>Erro Interno do Servidor</h2>
        <p>Algo deu errado no servidor.</p>
        <div class="error">${error ? error.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;') : 'Erro desconhecido'}</div>
        <p><a href="/">Voltar para a página inicial</a></p>
    </div>
</body>
</html>`;
    
    res.writeHead(500, {
        'Content-Type': 'text/html; charset=UTF-8',
        'Content-Length': Buffer.byteLength(html)
    });
    res.end(html);
    
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    log(`${ip} - "${req.method} ${req.url}" 500 - ${error ? error.message : 'Unknown error'}`, 'ERROR');
}

// Manipulador de requisições
function requestHandler(req, res) {
    // Log da requisição
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    log(`${ip} - "${req.method} ${req.url}"`, 'INFO');
    
    // Parse URL
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // Remove trailing slash, exceto para a raiz
    if (pathname !== '/' && pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
    }
    
    // Decode URL
    try {
        pathname = decodeURIComponent(pathname);
    } catch (e) {
        log(`Erro ao decodificar URL: ${pathname}`, 'WARN');
        serve404(req, res);
        return;
    }
    
    // Prevenir directory traversal
    if (pathname.includes('../') || pathname.includes('..\\')) {
        log(`Tentativa de directory traversal: ${pathname}`, 'WARN');
        serve404(req, res);
        return;
    }
    
    // Mapear caminho para arquivo
    let filePath;
    if (pathname === '/') {
        filePath = path.join(config.folder, 'index.html');
    } else {
        filePath = path.join(config.folder, pathname);
    }
    
    // Verificar se é diretório
    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isDirectory()) {
            // Se for diretório, tenta servir index.html dentro dele
            const indexPath = path.join(filePath, 'index.html');
            fs.access(indexPath, fs.constants.F_OK, (err) => {
                if (!err) {
                    serveFile(req, res, indexPath);
                } else {
                    // Listar diretório (opcional - desabilitado por padrão)
                    if (req.method === 'GET' && config.listDirectories) {
                        listDirectory(req, res, filePath, pathname);
                    } else {
                        serve404(req, res);
                    }
                }
            });
        } else {
            serveFile(req, res, filePath);
        }
    });
}

// Servidor HTTP
const httpServer = http.createServer(requestHandler);

// Servidor HTTPS (opcional)
let httpsServer;
if (config.enableSSL) {
    try {
        const sslOptions = {
            key: fs.readFileSync(config.sslKey),
            cert: fs.readFileSync(config.sslCert)
        };
        httpsServer = https.createServer(sslOptions, requestHandler);
    } catch (err) {
        log(`Erro ao carregar certificados SSL: ${err.message}`, 'ERROR');
        log('Servindo apenas HTTP', 'WARN');
        config.enableSSL = false;
    }
}

// Iniciar servidores
httpServer.listen(config.port, () => {
    log(`✅ Servidor HTTP rodando em: http://localhost:${config.port}`, 'SUCCESS');
    log(`📁 Servindo arquivos da pasta: ${config.folder}`, 'INFO');
    log(`🌐 Acesse: http://localhost:${config.port}`, 'INFO');
    
    // Abrir navegador automaticamente (opcional)
    if (process.argv.includes('--open')) {
        const { exec } = require('child_process');
        const url = `http://localhost:${config.port}`;
        const platform = process.platform;
        let command;
        
        if (platform === 'darwin') command = `open ${url}`;
        else if (platform === 'win32') command = `start ${url}`;
        else command = `xdg-open ${url}`;
        
        exec(command, (err) => {
            if (err) log(`Não foi possível abrir o navegador: ${err.message}`, 'WARN');
        });
    }
});

if (config.enableSSL && httpsServer) {
    httpsServer.listen(config.sslPort, () => {
        log(`🔐 Servidor HTTPS rodando em: https://localhost:${config.sslPort}`, 'SUCCESS');
        log(`🌐 Acesse: https://localhost:${config.sslPort}`, 'INFO');
    });
}

// Tratamento de sinais para shutdown gracioso
process.on('SIGINT', () => {
    log('Desligando servidor...', 'INFO');
    httpServer.close(() => {
        log('Servidor HTTP desligado', 'INFO');
        if (httpsServer) {
            httpsServer.close(() => {
                log('Servidor HTTPS desligado', 'INFO');
                process.exit(0);
            });
        } else {
            process.exit(0);
        }
    });
});

// Tratamento de erros não capturados
process.on('uncaughtException', (err) => {
    log(`Erro não capturado: ${err.message}`, 'ERROR');
    log(err.stack, 'ERROR');
});

// Adicionar funcionalidade de live reload (opcional)
if (process.argv.includes('--live-reload')) {
    log('Live reload ativado', 'INFO');
    const chokidar = require('chokidar');
    
    // Observar mudanças na pasta www
    const watcher = chokidar.watch(config.folder, {
        ignored: /(^|[\/\\])\../, // ignore dotfiles
        persistent: true
    });
    
    watcher.on('change', (filePath) => {
        log(`Arquivo alterado: ${filePath}`, 'DEBUG');
        // Aqui você poderia implementar WebSocket para live reload
    });
}

// Exportar para testes
module.exports = {
    httpServer,
    httpsServer,
    config,
    serveFile,
    serve404,
    serve500
};