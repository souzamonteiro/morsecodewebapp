#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

const sizes = [192, 512, 144, 96, 72, 48, 36];
const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a2a6c;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fdbb2d;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <circle cx="256" cy="256" r="220" fill="url(#simpleGradient)"/>
  
  <!-- Morse code symbol for "A" (.-) - the first letter -->
  <!-- Dot -->
  <circle cx="210" cy="220" r="25" fill="#ffffff"/>
  
  <!-- Dash -->
  <rect x="260" y="205" width="90" height="30" rx="15" fill="#ffffff"/>
  
  <!-- Signal waves -->
  <g stroke="#ffffff" stroke-width="6" fill="none" opacity="0.7">
    <circle cx="256" cy="256" r="80" stroke-dasharray="6,12"/>
    <circle cx="256" cy="256" r="120" stroke-dasharray="8,16"/>
  </g>
  
  <!-- Small dots representing Morse code -->
  <g fill="#ffffff">
    <circle cx="150" cy="370" r="8"/>
    <circle cx="190" cy="370" r="8"/>
    <circle cx="320" cy="370" r="8"/>
    <circle cx="360" cy="370" r="8"/>
  </g>
</svg>`; // Coloque o conteúdo SVG aqui

// Salvar SVG original
//fs.writeFileSync('src/icon.svg', svgContent);

console.log('🎨 Gerando ícones...');

// Nota: Você precisaria do ImageMagick ou outra ferramenta
// Para converter SVG para PNG no Termux

sizes.forEach(size => {
  const filename = `src/icon-${size}.png`;
  console.log(`Criando: ${filename}`);
  
  // No Termux, você pode usar:
  // pkg install imagemagick
  execSync(`convert -background none -resize ${size}x${size} src/icon.svg ${filename}`);
});