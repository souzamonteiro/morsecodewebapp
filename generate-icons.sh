#!/bin/bash

# Script para gerar todos os ícones do PWA Morse Code

echo "Gerando ícones para o Morse Code PWA..."

# Verifica se o arquivo SVG existe
if [ ! -f "icons/icon.svg" ]; then
    echo "Erro: arquivo icons/icon.svg não encontrado!"
    exit 1
fi

# Instala dependências se necessário
echo "Verificando dependências..."
if ! command -v convert &> /dev/null; then
    echo "Instalando ImageMagick..."
    sudo apt update && sudo apt install -y imagemagick
fi

if ! command -v rsvg-convert &> /dev/null; then
    echo "Instalando librsvg..."
    sudo apt update && sudo apt install -y librsvg2-bin
fi

# Cria diretório para ícones
mkdir -p icons

# Tamanhos necessários para PWA
sizes=(16 32 72 96 128 144 152 180 192 384 512)

echo "Gerando ícones PNG..."
for size in "${sizes[@]}"; do
    echo "  Criando icon-${size}x${size}.png"
    rsvg-convert -w $size -h $size icons/icon.svg -o icons/icon-${size}x${size}.png
done

# Ícones específicos
echo "Gerando ícones especiais..."
rsvg-convert -w 32 -h 32 icons/icon.svg -o favicon-32.png
rsvg-convert -w 16 -h 16 icons/icon.svg -o favicon-16.png
rsvg-convert -w 180 -h 180 icons/icon.svg -o apple-touch-icon.png

# Favicon ICO (com múltiplos tamanhos)
echo "Criando favicon.ico..."
convert favicon-16.png favicon-32.png favicon.ico

# Mover tudo para a pasta icons
mv favicon-16.png favicon-32.png favicon.ico apple-touch-icon.png icons/

echo "Gerando manifest.json atualizado..."
cat > manifest.json << EOF
{
  "name": "Morse Code Learning App",
  "short_name": "MorseCode",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#1a2a6c",
  "background_color": "#1a2a6c",
  "description": "Learn, practice, and master Morse code",
  "icons": [
    {
      "src": "icons/icon-72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "icons/icon-96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "icons/icon-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "icons/icon-144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icons/icon-152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
EOF

echo "✅ Ícones gerados com sucesso na pasta 'icons/'!"
echo "📁 Conteúdo da pasta icons:"
ls -la icons/