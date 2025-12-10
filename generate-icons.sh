#!/bin/bash

# Script para gerar todos os ícones do PWA Morse Code

echo "Gerando ícones para o Morse Code PWA..."

rm -rf www/icons
mkdir -p www/icons

# Verifica se o arquivo SVG existe
if [ ! -f "icons/icon.svg" ]; then
    echo "Erro: arquivo icons/icon.svg não encontrado!"
    exit 1
fi

# Instala dependências se necessário
# echo "Verificando dependências..."
# if ! command -v convert &> /dev/null; then
#     echo "Instalando ImageMagick..."
#     sudo apt update && sudo apt install -y imagemagick
# fi

# if ! command -v rsvg-convert &> /dev/null; then
#     echo "Instalando librsvg..."
#     sudo apt update && sudo apt install -y librsvg2-bin
# fi

# Tamanhos necessários para PWA
sizes=(16 32 72 96 128 144 152 180 192 384 512)

echo "Gerando ícones PNG..."
for size in "${sizes[@]}"; do
    echo "  Criando icon-${size}x${size}.png"
    rsvg-convert -w $size -h $size icons/icon.svg -o icons/icon-${size}x${size}.png
done

# Ícones específicos
echo "Gerando ícones especiais..."
rsvg-convert -w 32 -h 32 icons/icon.svg -o icons/favicon-32.png
rsvg-convert -w 16 -h 16 icons/icon.svg -o icons/favicon-16.png
rsvg-convert -w 180 -h 180 icons/icon.svg -o icons/apple-touch-icon.png

# Favicon ICO (com múltiplos tamanhos)
echo "Criando favicon.ico..."
convert icons/favicon-16.png icons/favicon-32.png icons/favicon.ico

echo "Gerando manifest.json atualizado..."
cat > www/manifest.json << EOF
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
      "src": "icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
EOF

echo "✅ Ícones gerados com sucesso na pasta 'icons/'!"
echo "📁 Conteúdo da pasta icons:"
ls -la icons/

cp icons/* www/icons/
echo "📁 Ícones copiados para www/icons/"
echo "Script concluído."
