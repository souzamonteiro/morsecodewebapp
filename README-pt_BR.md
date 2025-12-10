# Morse Code Learning App

Um aplicativo web completo para aprendizado de código Morse, com suporte a áudio, teclado, toque e dispositivos CW (Continuous Wave) via USB.

![Morse Code App](https://img.shields.io/badge/Morse-Code%20Learning-blue)
![Web Technologies](https://img.shields.io/badge/HTML-CSS--JS-orange)
![Single Page](https://img.shields.io/badge/Single--Page-Application-green)

## 🌟 Características

### 🎯 Funcionalidades Principais
- **Referência Completa**: Tabela interativa com todos os caracteres do código Morse
- **Área de Prática**: Converta texto para Morse e vice-versa
- **Sistema de Áudio**: Ouça os sinais Morse com controle de frequência, velocidade e volume
- **Flashcards**: Sistema de cartões para memorização
- **Acompanhamento de Progresso**: Estatísticas e progresso geral do aprendizado

### ⌨️ Múltiplos Métodos de Entrada
- **Teclado**: Use a barra de espaço como chave virtual
- **Toque/Clique**: Interface otimizada para dispositivos móveis
- **Dispositivos CW USB**: Suporte a chaves Morse via porta serial e emulação de mouse

### 🔊 Sistema de Áudio Avançado
- Geração de tons em tempo real usando Web Audio API
- Controles ajustáveis de frequência (300-1000 Hz)
- Velocidade configurável (5-30 WPM - Palavras Por Minuto)
- Controle de volume
- Reprodução de texto pré-definido

## 🚀 Como Usar

### Acesso Rápido
1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Não requer instalação ou dependências externas

### Abas do Aplicativo

#### 📚 Learn (Aprender)
- Tabela de referência completa do código Morse
- Clique em qualquer caractere para marcá-lo como aprendido
- Clique novamente para reproduzir o som do caractere

#### 💪 Practice (Praticar)
- **Texto para Morse**: Digite texto e converta para código Morse
- **Morse para Texto**: Digite código Morse (. para ponto, - para traço) e decodifique
- Botões para reproduzir áudio de ambas as conversões

#### 🔊 Audio (Áudio)
- Digite texto para reproduzir como código Morse
- Controles deslizantes para ajustar:
  - Frequência do tom (300-1000 Hz)
  - Velocidade (5-30 WPM)
  - Volume (0-100%)
- Botão "Random Text" para gerar texto aleatório para prática

#### ⌨️ CW Key (Chave CW)
**Modo Teclado:**
- Pressione a barra de espaço ou clique na área de teste
- Toque rápido para ponto, mantenha pressionado para traço

**Modo Toque:**
- Ideal para dispositivos móveis
- Toque rápido para ponto, toque longo para traço

**Modo Serial:**
- Conecte dispositivos CW USB compatíveis
- Requer navegador com suporte a Web Serial API

#### 🃏 Flashcards (Cartões)
- Sistema de cartões para memorização
- Escolha entre letras, números ou ambos
- Clique no cartão para revelar o código Morse
- Botão para reproduzir o som do caractere

#### 📊 Progress (Progresso)
- Acompanhe letras aprendidas
- Contador de sessões de prática
- Estatísticas de cartões visualizados
- Barra de progresso geral
- Opção para reiniciar progresso

## 🔧 Configuração Técnica

### Requisitos do Sistema
- Navegador moderno com suporte a:
  - Web Audio API
  - CSS Grid e Flexbox
  - ES6+ JavaScript
- Para uso móvel: navegador com suporte a eventos de toque
- Para dispositivos CW: navegador com suporte a Web Serial API (Chrome/Edge 89+)

### Estrutura do Código
```
morse-code-app/
├── index.html          # Aplicativo completo (HTML, CSS, JS)
└── README.md          # Este arquivo
```

### Armazenamento Local
- O progresso é salvo automaticamente no localStorage do navegador
- Dados incluem: letras aprendidas, sessões de prática, cartões visualizados

## 🎮 Guia de Uso

### Prática com Teclado/Toque
1. Vá para a aba "CW Key"
2. Selecione "Keyboard" ou "Touch" no menu de modo
3. Use a barra de espaço (teclado) ou toque na área de teste (mobile)
4. Toques rápidos geram pontos (.), toques longos geram traços (-)
5. O sistema automaticamente detecta quando um caractere está completo

### Ajuste de Velocidade
- Na aba "CW Key", use o controle deslizante "CW Speed"
- Velocidade medida em WPM (Palavras Por Minuto)
- Padrão: 15 WPM (Dot: 80ms, Dash: 240ms)

### Prática com Áudio
1. Vá para a aba "Audio"
2. Digite o texto desejado
3. Ajuste frequência, velocidade e volume conforme preferência
4. Clique em "Play Morse Code" para ouvir

## 🔌 Suporte a Dispositivos CW USB

### Configuração
1. Conecte seu dispositivo CW USB
2. Na aba "CW Key", selecione "USB Serial Key"
3. Clique em "Connect Key" e selecione a porta serial
4. Use seu dispositivo físico para gerar código Morse

### Compatibilidade
- Dispositivos que emulam porta serial
- Protocolo esperado: bytes 0x01 (key down) e 0x00 (key up)

## 🎵 Especificações de Áudio

### Timing (Baseado em WPM)
- **Dot**: 1 unidade de tempo
- **Dash**: 3 unidades de tempo  
- **Espaço intra-caractere**: 1 unidade
- **Espaço entre caracteres**: 3 unidades
- **Espaço entre palavras**: 7 unidades

### Cálculo de WPM
Baseado no padrão PARIS (50 unidades de tempo por palavra):
```
Tempo por unidade = 1200 / WPM (ms)
```

## 📱 Compatibilidade

### Navegadores Testados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Dispositivos
- ✅ Desktop (Windows, macOS, Linux)
- ✅ Mobile (iOS, Android)
- ✅ Tablets

## 🐛 Solução de Problemas

### Áudio Não Funciona
- Verifique se o navegador suporta Web Audio API
- Certifique-se de que o volume não está mudo
- Tente clicar em qualquer lugar da página primeiro (política de autoplay)

### Toque Não Responde
- Use navegador com suporte a eventos de toque
- Toque diretamente na área de teste (evite bordas)

### Dispositivo CW Não Conecta
- Verifique suporte a Web Serial API
- Conceda permissão de porta serial quando solicitado
- Reinicie o aplicativo se necessário

## 📄 Licença

Este projeto é open source e disponível sob licença Apache 2.0.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar problemas
- Sugerir novas funcionalidades
- Enviar melhorias de código

## 📞 Suporte

Para questões ou sugestões, abra uma issue no repositório do projeto.

---

**Happy Morse Coding!** 🎯🔊