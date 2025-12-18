// i18n.js
// Internationalization system for Morse Code Learning App

const I18N = {
    currentLang: 'en',
    
    // Language files
    languages: {
        'en': {
            // === MAIN TITLES ===
            'Morse Code Learning App': 'Morse Code Learning App',
            'Learn, practice, and master Morse code': 'Learn, practice, and master Morse code',
            
            // === TAB NAMES ===
            'Learn': 'Learn',
            'Practice': 'Practice',
            'Audio': 'Audio',
            'CW Key': 'CW Key',
            'Flashcards': 'Flashcards',
            'Progress': 'Progress',
            'About': 'About',
            
            // === LEARN TAB ===
            'Morse Code Reference': 'Morse Code Reference',
            'Morse code is a method of transmitting text information as a series of on-off tones, lights, or clicks.': 'Morse code is a method of transmitting text information as a series of on-off tones, lights, or clicks.',
            
            // === PRACTICE TAB ===
            'Practice Morse Code': 'Practice Morse Code',
            'Text to convert to Morse:': 'Text to convert to Morse:',
            'Enter text to convert to Morse code': 'Enter text to convert to Morse code',
            'Convert to Morse': 'Convert to Morse',
            'Play as Audio': 'Play as Audio',
            'Random Phrase': 'Random Phrase',
            'Morse code to decode:': 'Morse code to decode:',
            'Enter Morse code (use . for dots and - for dashes, separate letters with spaces)': 'Enter Morse code (use . for dots and - for dashes, separate letters with spaces)',
            'Convert to Text': 'Convert to Text',
            'Result will appear here': 'Result will appear here',
            
            // === PHRASES MANAGEMENT ===
            'Practice Phrases Management': 'Practice Phrases Management',
            'Add new practice phrase:': 'Add new practice phrase:',
            'Enter a new practice phrase': 'Enter a new practice phrase',
            'Add Phrase': 'Add Phrase',
            'Import Phrases': 'Import Phrases',
            'Export Phrases': 'Export Phrases',
            'Clear All': 'Clear All',
            'Saved Phrases': 'Saved Phrases',
            'No phrases saved yet. Add some phrases to practice!': 'No phrases saved yet. Add some phrases to practice!',
            'Load default phrases:': 'Load default phrases:',
            'Select a phrase set': 'Select a phrase set',
            'Basic Words': 'Basic Words',
            'Common Phrases': 'Common Phrases',
            'Radio Communication': 'Radio Communication',
            'Q Codes': 'Q Codes',
            'Proverbs': 'Proverbs',
            'Load Selected': 'Load Selected',
            
            // === AUDIO TAB ===
            'Morse Code Audio': 'Morse Code Audio',
            'Listen to Morse code sounds and practice decoding by ear': 'Listen to Morse code sounds and practice decoding by ear',
            'Text to play as Morse code:': 'Text to play as Morse code:',
            'Enter text to play as Morse code audio': 'Enter text to play as Morse code audio',
            'Play Morse Code': 'Play Morse Code',
            'Tone Frequency (Hz):': 'Tone Frequency (Hz):',
            'Playback Speed (WPM):': 'Playback Speed (WPM):',
            'Volume:': 'Volume:',
            'Stop Audio': 'Stop Audio',
            'Random Text': 'Random Text',
            'Audio status: Ready': 'Audio status: Ready',
            
            // === CW KEY TAB ===
            'CW Key Interface': 'CW Key Interface',
            'Connect your USB CW key or use touch/keyboard as a virtual key': 'Connect your USB CW key or use touch/keyboard as a virtual key',
            'CW Key not connected': 'CW Key not connected',
            'CW Speed (WPM):': 'CW Speed (WPM):',
            'Web Serial API not supported - use keyboard/touch/mouse mode': 'Web Serial API not supported - use keyboard/touch/mouse mode',
            'Key Mode:': 'Key Mode:',
            'Keyboard (Spacebar)': 'Keyboard (Spacebar)',
            'Touch/Click': 'Touch/Click',
            'USB Serial Key': 'USB Serial Key',
            'Mouse Key (L=dot, R=dash)': 'Mouse Key (L=dot, R=dash)',
            'Serial Port (if applicable):': 'Serial Port (if applicable):',
            'No ports available': 'No ports available',
            'Connect Key': 'Connect Key',
            'Clear Output': 'Clear Output',
            'Practice Mode': 'Practice Mode',
            'Enable Sound': 'Enable Sound',
            'Disable Sound': 'Disable Sound',
            'Press Spacebar or click here to test': 'Press Spacebar or click here to test',
            'Touch and hold here to test': 'Touch and hold here to test',
            'Left click for dot, Right click for dash (click here to focus)': 'Left click for dot, Right click for dash (click here to focus)',
            'Press your CW key to test': 'Press your CW key to test',
            '(Touch and hold for dash, quick tap for dot)': '(Touch and hold for dash, quick tap for dot)',
            'CW output will appear here...': 'CW output will appear here...',
            'Current Character:': 'Current Character:',
            'Current Word:': 'Current Word:',
            'None': 'None',
            
            // === FLASHCARDS TAB ===
            'Morse Code Flashcards': 'Morse Code Flashcards',
            'Click on the card to reveal the Morse code': 'Click on the card to reveal the Morse code',
            'Previous': 'Previous',
            'Next': 'Next',
            'Reveal Code': 'Reveal Code',
            'Play Sound': 'Play Sound',
            'Practice This Character': 'Practice This Character',
            'Use your CW key (keyboard, touch, or mouse) to practice sending the displayed character': 'Use your CW key (keyboard, touch, or mouse) to practice sending the displayed character',
            'Press Spacebar, click, or touch here to practice': 'Press Spacebar, click, or touch here to practice',
            'Touch and hold here to practice': 'Touch and hold here to practice',
            'Left click for dot, Right click for dash': 'Left click for dot, Right click for dash',
            'Press your CW key to practice': 'Press your CW key to practice',
            'Clear Input': 'Clear Input',
            'Check My Code': 'Check My Code',
            'Show Target Code': 'Show Target Code',
            'Your CW input will appear here...': 'Your CW input will appear here...',
            'Your Input:': 'Your Input:',
            'Target Code:': 'Target Code:',
            'Card Type:': 'Card Type:',
            'Letters Only': 'Letters Only',
            'Numbers Only': 'Numbers Only',
            'Letters & Numbers': 'Letters & Numbers',
            
            // === PROGRESS TAB ===
            'Your Learning Progress': 'Your Learning Progress',
            'Track your Morse code learning journey': 'Track your Morse code learning journey',
            'Letters Learned': 'Letters Learned',
            'Practice Sessions': 'Practice Sessions',
            'Flashcards Viewed': 'Flashcards Viewed',
            'Overall Progress': 'Overall Progress',
            'Reset Progress': 'Reset Progress',
            
            // === ABOUT TAB ===
            'About Morse Code Learning App': 'About Morse Code Learning App',
            'Welcome to the Morse Code Learning App - a comprehensive, progressive web application designed to help you learn, practice, and master Morse code efficiently and enjoyably.': 'Welcome to the Morse Code Learning App - a comprehensive, progressive web application designed to help you learn, practice, and master Morse code efficiently and enjoyably.',
            'Features': 'Features',
            'Learn: Complete Morse code reference table with interactive character learning': 'Learn: Complete Morse code reference table with interactive character learning',
            'Practice: Convert text to Morse and vice versa with audio playback': 'Practice: Convert text to Morse and vice versa with audio playback',
            'Audio Training: Customizable Morse code audio with adjustable speed, frequency, and volume': 'Audio Training: Customizable Morse code audio with adjustable speed, frequency, and volume',
            'CW Key Interface: Virtual CW key with keyboard, touch, mouse, and Web Serial API support': 'CW Key Interface: Virtual CW key with keyboard, touch, mouse, and Web Serial API support',
            'Flashcards: Interactive flashcard system for memorization': 'Flashcards: Interactive flashcard system for memorization',
            'Progress Tracking: Track your learning progress with statistics': 'Progress Tracking: Track your learning progress with statistics',
            'Phrase Management: Save, import, export, and organize practice phrases': 'Phrase Management: Save, import, export, and organize practice phrases',
            'Offline Capable: Works without internet connection (PWA)': 'Offline Capable: Works without internet connection (PWA)',
            'Responsive Design: Works on desktop, tablet, and mobile devices': 'Responsive Design: Works on desktop, tablet, and mobile devices',
            'Technical Details': 'Technical Details',
            'This application is built using modern web technologies:': 'This application is built using modern web technologies:',
            'HTML5, CSS3, and Vanilla JavaScript': 'HTML5, CSS3, and Vanilla JavaScript',
            'Web Audio API for Morse code sound generation': 'Web Audio API for Morse code sound generation',
            'Web Serial API for hardware CW key support (experimental)': 'Web Serial API for hardware CW key support (experimental)',
            'Progressive Web App (PWA) with service worker': 'Progressive Web App (PWA) with service worker',
            'LocalStorage for data persistence': 'LocalStorage for data persistence',
            'Responsive CSS Grid and Flexbox layouts': 'Responsive CSS Grid and Flexbox layouts',
            'Morse Code Timing': 'Morse Code Timing',
            'The app uses standard PARIS timing calculation:': 'The app uses standard PARIS timing calculation:',
            'Dot duration = 1 time unit': 'Dot duration = 1 time unit',
            'Dash duration = 3 time units': 'Dash duration = 3 time units',
            'Intra-character space = 1 time unit': 'Intra-character space = 1 time unit',
            'Character space = 3 time units': 'Character space = 3 time units',
            'Word space = 7 time units': 'Word space = 7 time units',
            'PARIS word = 50 time units (standard for WPM calculation)': 'PARIS word = 50 time units (standard for WPM calculation)',
            'Words Per Minute (WPM) calculation: Time unit = 1200 / WPM (in milliseconds)': 'Words Per Minute (WPM) calculation: Time unit = 1200 / WPM (in milliseconds)',
            'Project Information': 'Project Information',
            'GitHub Repository:': 'GitHub Repository:',
            'Author:': 'Author:',
            'License:': 'License:',
            'Version:': 'Version:',
            'License': 'License',
            'Acknowledgments': 'Acknowledgments',
            'Getting Help': 'Getting Help',
            'Made with ❤️ for the amateur radio and Morse code community': 'Made with ❤️ for the amateur radio and Morse code community',
            '"CQ CQ CQ DE PU6RLS K"': '"CQ CQ CQ DE PU6RLS K"',
            
            // === ALERT MESSAGES ===
            'Please enter a phrase': 'Please enter a phrase',
            'This phrase already exists': 'This phrase already exists',
            'No phrases available. Please add some phrases first.': 'No phrases available. Please add some phrases first.',
            'Please select a phrase set': 'Please select a phrase set',
            'No phrases to export': 'No phrases to export',
            'Are you sure you want to clear all practice phrases?': 'Are you sure you want to clear all practice phrases?',
            'Are you sure you want to reset all progress and settings?': 'Are you sure you want to reset all progress and settings?',
            'Delete phrase: "{0}"?': 'Delete phrase: "{0}"?',
            'Export as JSON (Cancel) or Text file (OK)?\n\nCancel = JSON format (recommended)\nOK = Text file (one phrase per line)': 'Export as JSON (Cancel) or Text file (OK)?\n\nCancel = JSON format (recommended)\nOK = Text file (one phrase per line)',
            'Successfully imported {0} new phrases.': 'Successfully imported {0} new phrases.',
            'Loaded {0} phrases from the {1} set.': 'Loaded {0} phrases from the {1} set.',
            'Audio not initialized': 'Audio not initialized',
            'Audio already playing': 'Audio already playing',
            'Audio stopped': 'Audio stopped',
            '✓ Correct! "{0}" = {1}': '✓ Correct! "{0}" = {1}',
            '✗ Try again. Your input: {0}, Target: {1}': '✗ Try again. Your input: {0}, Target: {1}',
            'Random phrase selected: "{0}"': 'Random phrase selected: "{0}"',
            'Error': 'Error',
            'Warning': 'Warning',
            
            // === OFFLINE ===
            '⚠️ You are offline. Some features may be limited.': '⚠️ You are offline. Some features may be limited.',
            
            // === LANGUAGE ===
            'Language:': 'Language:',
            
            // === BUTTON TEXTS (for dynamically created buttons) ===
            'Use': 'Use',
            'Play': 'Play',
            'Delete': 'Delete',
            'Load this phrase into the text area': 'Load this phrase into the text area',
            'Play this phrase as Morse code': 'Play this phrase as Morse code',
            'Delete this phrase': 'Delete this phrase'
        },
        
        'pt': {
            // === MAIN TITLES ===
            'Morse Code Learning App': 'Aplicativo de Aprendizado de Código Morse',
            'Learn, practice, and master Morse code': 'Aprenda, pratique e domine o código Morse',
            
            // === TAB NAMES ===
            'Learn': 'Aprender',
            'Practice': 'Praticar',
            'Audio': 'Áudio',
            'CW Key': 'Telegrafo',
            'Flashcards': 'Flashcards',
            'Progress': 'Progresso',
            'About': 'Sobre',
            
            // === LEARN TAB ===
            'Morse Code Reference': 'Referência de Código Morse',
            'Morse code is a method of transmitting text information as a series of on-off tones, lights, or clicks.': 'O código Morse é um método de transmitir informações de texto como uma série de tons, luzes ou cliques liga/desliga.',
            
            // === PRACTICE TAB ===
            'Practice Morse Code': 'Pratique Código Morse',
            'Text to convert to Morse:': 'Texto para converter para Morse:',
            'Enter text to convert to Morse code': 'Digite texto para converter para código Morse',
            'Convert to Morse': 'Converter para Morse',
            'Play as Audio': 'Reproduzir como Áudio',
            'Random Phrase': 'Frase Aleatória',
            'Morse code to decode:': 'Código Morse para decodificar:',
            'Enter Morse code (use . for dots and - for dashes, separate letters with spaces)': 'Digite código Morse (use . para pontos e - para traços, separe letras com espaços)',
            'Convert to Text': 'Converter para Texto',
            'Result will appear here': 'O resultado aparecerá aqui',
            
            // === PHRASES MANAGEMENT ===
            'Practice Phrases Management': 'Gerenciamento de Frases de Prática',
            'Add new practice phrase:': 'Adicionar nova frase de prática:',
            'Enter a new practice phrase': 'Digite uma nova frase para prática',
            'Add Phrase': 'Adicionar Frase',
            'Import Phrases': 'Importar Frases',
            'Export Phrases': 'Exportar Frases',
            'Clear All': 'Limpar Tudo',
            'Saved Phrases': 'Frases Salvas',
            'No phrases saved yet. Add some phrases to practice!': 'Nenhuma frase salva ainda. Adicione algumas frases para praticar!',
            'Load default phrases:': 'Carregar frases padrão:',
            'Select a phrase set': 'Selecione um conjunto de frases',
            'Basic Words': 'Palavras Básicas',
            'Common Phrases': 'Frases Comuns',
            'Radio Communication': 'Comunicação por Rádio',
            'Q Codes': 'Códigos Q',
            'Proverbs': 'Provérbios',
            'Load Selected': 'Carregar Selecionado',
            
            // === AUDIO TAB ===
            'Morse Code Audio': 'Áudio de Código Morse',
            'Listen to Morse code sounds and practice decoding by ear': 'Ouça sons de código Morse e pratique decodificação por ouvido',
            'Text to play as Morse code:': 'Texto para reproduzir como código Morse:',
            'Enter text to play as Morse code audio': 'Digite texto para reproduzir como áudio Morse',
            'Play Morse Code': 'Reproduzir Código Morse',
            'Tone Frequency (Hz):': 'Frequência do Tom (Hz):',
            'Playback Speed (WPM):': 'Velocidade de Reprodução (PPM):',
            'Volume:': 'Volume:',
            'Stop Audio': 'Parar Áudio',
            'Random Text': 'Texto Aleatório',
            'Audio status: Ready': 'Status do áudio: Pronto',
            
            // === CW KEY TAB ===
            'CW Key Interface': 'Interface de Telegrafo',
            'Connect your USB CW key or use touch/keyboard as a virtual key': 'Conecte seu telegrafo USB ou use toque/teclado como telegrafo virtual',
            'CW Key not connected': 'Telegrafo não conectado',
            'CW Speed (WPM):': 'Velocidade CW (PPM):',
            'Web Serial API not supported - use keyboard/touch/mouse mode': 'A API Web Serial não é suportada - use o modo teclado/toque/mouse',
            'Key Mode:': 'Modo da Chave:',
            'Keyboard (Spacebar)': 'Teclado (Barra de Espaço)',
            'Touch/Click': 'Toque/Clique',
            'USB Serial Key': 'Telegrafo USB Serial',
            'Mouse Key (L=dot, R=dash)': 'Mouse (E=ponto, D=traço)',
            'Serial Port (if applicable):': 'Porta Serial (se aplicável):',
            'No ports available': 'Nenhuma porta disponível',
            'Connect Key': 'Conectar Telegrafo',
            'Clear Output': 'Limpar Saída',
            'Practice Mode': 'Modo Prática',
            'Enable Sound': 'Ativar Som',
            'Disable Sound': 'Desativar Som',
            'Press Spacebar or click here to test': 'Pressione Barra de Espaço ou clique aqui para testar',
            'Touch and hold here to test': 'Toque e segure aqui para testar',
            'Left click for dot, Right click for dash (click here to focus)': 'Clique esquerdo para ponto, direito para traço (clique aqui para focar)',
            'Press your CW key to test': 'Pressione seu telegrafo para testar',
            '(Touch and hold for dash, quick tap for dot)': '(Toque e segure para traço, toque rápido para ponto)',
            'CW output will appear here...': 'A saída CW aparecerá aqui...',
            'Current Character:': 'Caractere Atual:',
            'Current Word:': 'Palavra Atual:',
            'None': 'Nenhum',
            
            // === FLASHCARDS TAB ===
            'Morse Code Flashcards': 'Flashcards de Código Morse',
            'Click on the card to reveal the Morse code': 'Clique no cartão para revelar o código Morse',
            'Previous': 'Anterior',
            'Next': 'Próximo',
            'Reveal Code': 'Revelar Código',
            'Play Sound': 'Reproduzir Som',
            'Practice This Character': 'Pratique Este Caractere',
            'Use your CW key (keyboard, touch, or mouse) to practice sending the displayed character': 'Use seu telegrafo (teclado, toque ou mouse) para praticar enviando o caractere exibido',
            'Press Spacebar, click, or touch here to practice': 'Pressione Barra de Espaço, clique ou toque aqui para praticar',
            'Touch and hold here to practice': 'Toque e segure aqui para praticar',
            'Left click for dot, Right click for dash': 'Clique esquerdo para ponto, direito para traço',
            'Press your CW key to practice': 'Pressione seu telegrafo para praticar',
            'Clear Input': 'Limpar Entrada',
            'Check My Code': 'Verificar Meu Código',
            'Show Target Code': 'Mostrar Código Alvo',
            'Your CW input will appear here...': 'Sua entrada CW aparecerá aqui...',
            'Your Input:': 'Sua Entrada:',
            'Target Code:': 'Código Alvo:',
            'Card Type:': 'Tipo de Cartão:',
            'Letters Only': 'Somente Letras',
            'Numbers Only': 'Somente Números',
            'Letters & Numbers': 'Letras e Números',
            
            // === PROGRESS TAB ===
            'Your Learning Progress': 'Seu Progresso de Aprendizado',
            'Track your Morse code learning journey': 'Acompanhe sua jornada de aprendizado de código Morse',
            'Letters Learned': 'Letras Aprendidas',
            'Practice Sessions': 'Sessões de Prática',
            'Flashcards Viewed': 'Flashcards Visualizados',
            'Overall Progress': 'Progresso Geral',
            'Reset Progress': 'Redefinir Progresso',
            
            // === ABOUT TAB ===
            'About Morse Code Learning App': 'Sobre o Aplicativo de Aprendizado de Código Morse',
            'Welcome to the Morse Code Learning App - a comprehensive, progressive web application designed to help you learn, practice, and master Morse code efficiently and enjoyably.': 'Bem-vindo ao Aplicativo de Aprendizado de Código Morse - um aplicativo web progressivo e abrangente projetado para ajudá-lo a aprender, praticar e dominar o código Morse de forma eficiente e agradável.',
            'Features': 'Funcionalidades',
            'Learn: Complete Morse code reference table with interactive character learning': 'Aprender: Tabela de referência completa de código Morse com aprendizado interativo de caracteres',
            'Practice: Convert text to Morse and vice versa with audio playback': 'Praticar: Converta texto para Morse e vice-versa com reprodução de áudio',
            'Audio Training: Customizable Morse code audio with adjustable speed, frequency, and volume': 'Treinamento Auditivo: Áudio de código Morse personalizável com velocidade, frequência e volume ajustáveis',
            'CW Key Interface: Virtual CW key with keyboard, touch, mouse, and Web Serial API support': 'Interface de Telegrafo: Telegrafo virtual com suporte a teclado, toque, mouse e API Web Serial',
            'Flashcards: Interactive flashcard system for memorization': 'Flashcards: Sistema interativo de flashcards para memorização',
            'Progress Tracking: Track your learning progress with statistics': 'Acompanhamento de Progresso: Acompanhe seu progresso de aprendizado com estatísticas',
            'Phrase Management: Save, import, export, and organize practice phrases': 'Gerenciamento de Frases: Salve, importe, exporte e organize frases para prática',
            'Offline Capable: Works without internet connection (PWA)': 'Funciona Offline: Opera sem conexão com a internet (PWA)',
            'Responsive Design: Works on desktop, tablet, and mobile devices': 'Design Responsivo: Funciona em desktop, tablet e dispositivos móveis',
            'Technical Details': 'Detalhes Técnicos',
            'This application is built using modern web technologies:': 'Este aplicativo é construído usando tecnologias web modernas:',
            'HTML5, CSS3, and Vanilla JavaScript': 'HTML5, CSS3 e JavaScript Vanilla',
            'Web Audio API for Morse code sound generation': 'Web Audio API para geração de som de código Morse',
            'Web Serial API for hardware CW key support (experimental)': 'Web Serial API para suporte a telegrafo de hardware (experimental)',
            'Progressive Web App (PWA) with service worker': 'Aplicativo Web Progressivo (PWA) com service worker',
            'LocalStorage for data persistence': 'LocalStorage para persistência de dados',
            'Responsive CSS Grid and Flexbox layouts': 'Layouts responsivos com CSS Grid e Flexbox',
            'Morse Code Timing': 'Temporização do Código Morse',
            'The app uses standard PARIS timing calculation:': 'O aplicativo usa o cálculo de temporização PARIS padrão:',
            'Dot duration = 1 time unit': 'Duração do ponto = 1 unidade de tempo',
            'Dash duration = 3 time units': 'Duração do traço = 3 unidades de tempo',
            'Intra-character space = 1 time unit': 'Espaço intra-caractere = 1 unidade de tempo',
            'Character space = 3 time units': 'Espaço entre caracteres = 3 unidades de tempo',
            'Word space = 7 time units': 'Espaço entre palavras = 7 unidades de tempo',
            'PARIS word = 50 time units (standard for WPM calculation)': 'Palavra PARIS = 50 unidades de tempo (padrão para cálculo de PPM)',
            'Words Per Minute (WPM) calculation: Time unit = 1200 / WPM (in milliseconds)': 'Cálculo de Palavras Por Minuto (PPM): Unidade de tempo = 1200 / PPM (em milissegundos)',
            'Project Information': 'Informações do Projeto',
            'GitHub Repository:': 'Repositório GitHub:',
            'Author:': 'Autor:',
            'License:': 'Licença:',
            'Version:': 'Versão:',
            'License': 'Licença',
            'Acknowledgments': 'Agradecimentos',
            'Getting Help': 'Obtendo Ajuda',
            'Made with ❤️ for the amateur radio and Morse code community': 'Feito com ❤️ para a comunidade de rádio amador e código Morse',
            '"CQ CQ CQ DE PU6RLS K"': '"CQ CQ CQ DE PU6RLS K"',
            
            // === ALERT MESSAGES ===
            'Please enter a phrase': 'Por favor, digite uma frase',
            'This phrase already exists': 'Esta frase já existe',
            'No phrases available. Please add some phrases first.': 'Nenhuma frase disponível. Por favor, adicione algumas frases primeiro.',
            'Please select a phrase set': 'Por favor, selecione um conjunto de frases',
            'No phrases to export': 'Nenhuma frase para exportar',
            'Are you sure you want to clear all practice phrases?': 'Tem certeza de que deseja limpar todas as frases de prática?',
            'Are you sure you want to reset all progress and settings?': 'Tem certeza de que deseja redefinir todo o progresso e configurações?',
            'Delete phrase: "{0}"?': 'Excluir frase: "{0}"?',
            'Export as JSON (Cancel) or Text file (OK)?\n\nCancel = JSON format (recommended)\nOK = Text file (one phrase per line)': 'Exportar como JSON (Cancelar) ou Arquivo de Texto (OK)?\n\nCancelar = Formato JSON (recomendado)\nOK = Arquivo de texto (uma frase por linha)',
            'Successfully imported {0} new phrases.': 'Importadas com sucesso {0} novas frases.',
            'Loaded {0} phrases from the {1} set.': 'Carregadas {0} frases do conjunto {1}.',
            'Audio not initialized': 'Áudio não inicializado',
            'Audio already playing': 'Áudio já está sendo reproduzido',
            'Audio stopped': 'Áudio parado',
            '✓ Correct! "{0}" = {1}': '✓ Correto! "{0}" = {1}',
            '✗ Try again. Your input: {0}, Target: {1}': '✗ Tente novamente. Sua entrada: {0}, Alvo: {1}',
            'Random phrase selected: "{0}"': 'Frase aleatória selecionada: "{0}"',
            'Error': 'Erro',
            'Warning': 'Aviso',
            
            // === OFFLINE ===
            '⚠️ You are offline. Some features may be limited.': '⚠️ Você está offline. Alguns recursos podem ser limitados.',
            
            // === LANGUAGE ===
            'Language:': 'Idioma:',
            
            // === BUTTON TEXTS (for dynamically created buttons) ===
            'Use': 'Usar',
            'Play': 'Reproduzir',
            'Delete': 'Excluir',
            'Load this phrase into the text area': 'Carregar esta frase na área de texto',
            'Play this phrase as Morse code': 'Reproduzir esta frase como código Morse',
            'Delete this phrase': 'Excluir esta frase'
        },
        'es': {
            // === MAIN TITLES ===
            'Morse Code Learning App': 'Aplicación de Aprendizaje de Código Morse',
            'Learn, practice, and master Morse code': 'Aprende, practica y domina el código Morse',
            
            // === TAB NAMES ===
            'Learn': 'Aprender',
            'Practice': 'Practicar',
            'Audio': 'Audio',
            'CW Key': 'Llave CW',
            'Flashcards': 'Tarjetas',
            'Progress': 'Progreso',
            'About': 'Acerca de',
            
            // === LEARN TAB ===
            'Morse Code Reference': 'Referencia de Código Morse',
            'Morse code is a method of transmitting text information as a series of on-off tones, lights, or clicks.': 'El código Morse es un método de transmitir información de texto como una serie de tonos, luces o clics encendido/apagado.',
            
            // === PRACTICE TAB ===
            'Practice Morse Code': 'Practica Código Morse',
            'Text to convert to Morse:': 'Texto para convertir a Morse:',
            'Enter text to convert to Morse code': 'Introduce texto para convertir a código Morse',
            'Convert to Morse': 'Convertir a Morse',
            'Play as Audio': 'Reproducir como Audio',
            'Random Phrase': 'Frase Aleatoria',
            'Morse code to decode:': 'Código Morse para decodificar:',
            'Enter Morse code (use . for dots and - for dashes, separate letters with spaces)': 'Introduce código Morse (usa . para puntos y - para rayas, separa letras con espacios)',
            'Convert to Text': 'Convertir a Texto',
            'Result will appear here': 'El resultado aparecerá aquí',
            
            // === PHRASES MANAGEMENT ===
            'Practice Phrases Management': 'Gestión de Frases de Práctica',
            'Add new practice phrase:': 'Añadir nueva frase de práctica:',
            'Enter a new practice phrase': 'Introduce una nueva frase para practicar',
            'Add Phrase': 'Añadir Frase',
            'Import Phrases': 'Importar Frases',
            'Export Phrases': 'Exportar Frases',
            'Clear All': 'Limpiar Todo',
            'Saved Phrases': 'Frases Guardadas',
            'No phrases saved yet. Add some phrases to practice!': 'No hay frases guardadas todavía. ¡Añade algunas frases para practicar!',
            'Load default phrases:': 'Cargar frases predeterminadas:',
            'Select a phrase set': 'Selecciona un conjunto de frases',
            'Basic Words': 'Palabras Básicas',
            'Common Phrases': 'Frases Comunes',
            'Radio Communication': 'Comunicación por Radio',
            'Q Codes': 'Códigos Q',
            'Proverbs': 'Proverbios',
            'Load Selected': 'Cargar Seleccionado',
            
            // === AUDIO TAB ===
            'Morse Code Audio': 'Audio de Código Morse',
            'Listen to Morse code sounds and practice decoding by ear': 'Escucha sonidos de código Morse y practica decodificación auditiva',
            'Text to play as Morse code:': 'Texto para reproducir como código Morse:',
            'Enter text to play as Morse code audio': 'Introduce texto para reproducir como audio Morse',
            'Play Morse Code': 'Reproducir Código Morse',
            'Tone Frequency (Hz):': 'Frecuencia de Tono (Hz):',
            'Playback Speed (WPM):': 'Velocidad de Reproducción (PPM):',
            'Volume:': 'Volumen:',
            'Stop Audio': 'Detener Audio',
            'Random Text': 'Texto Aleatorio',
            'Audio status: Ready': 'Estado del audio: Listo',
            
            // === CW KEY TAB ===
            'CW Key Interface': 'Interfaz de Llave CW',
            'Connect your USB CW key or use touch/keyboard as a virtual key': 'Conecta tu llave CW USB o usa tacto/teclado como llave virtual',
            'CW Key not connected': 'Llave CW no conectada',
            'CW Speed (WPM):': 'Velocidad CW (PPM):',
            'Web Serial API not supported - use keyboard/touch/mouse mode': 'API de serie web no compatible: utilice el modo teclado/táctil/ratón',
            'Key Mode:': 'Modo de Llave:',
            'Keyboard (Spacebar)': 'Teclado (Barra Espaciadora)',
            'Touch/Click': 'Tacto/Clic',
            'USB Serial Key': 'Llave USB Serial',
            'Mouse Key (L=dot, R=dash)': 'Llave de Ratón (Izq=punto, Der=raya)',
            'Serial Port (if applicable):': 'Puerto Serial (si aplica):',
            'No ports available': 'No hay puertos disponibles',
            'Connect Key': 'Conectar Llave',
            'Clear Output': 'Limpiar Salida',
            'Practice Mode': 'Modo Práctica',
            'Enable Sound': 'Activar Sonido',
            'Disable Sound': 'Desactivar Sonido',
            'Press Spacebar or click here to test': 'Presiona Barra Espaciadora o haz clic aquí para probar',
            'Touch and hold here to test': 'Toca y mantén aquí para probar',
            'Left click for dot, Right click for dash (click here to focus)': 'Clic izquierdo para punto, clic derecho para raya (haz clic aquí para enfocar)',
            'Press your CW key to test': 'Presiona tu llave CW para probar',
            '(Touch and hold for dash, quick tap for dot)': '(Toca y mantén para raya, toque rápido para punto)',
            'CW output will appear here...': 'La salida CW aparecerá aquí...',
            'Current Character:': 'Carácter Actual:',
            'Current Word:': 'Palabra Actual:',
            'None': 'Ninguno',
            
            // === FLASHCARDS TAB ===
            'Morse Code Flashcards': 'Tarjetas de Código Morse',
            'Click on the card to reveal the Morse code': 'Haz clic en la tarjeta para revelar el código Morse',
            'Previous': 'Anterior',
            'Next': 'Siguiente',
            'Reveal Code': 'Revelar Código',
            'Play Sound': 'Reproducir Sonido',
            'Practice This Character': 'Practica Este Carácter',
            'Use your CW key (keyboard, touch, or mouse) to practice sending the displayed character': 'Usa tu llave CW (teclado, tacto o ratón) para practicar enviando el carácter mostrado',
            'Press Spacebar, click, or touch here to practice': 'Presiona Barra Espaciadora, haz clic o toca aquí para practicar',
            'Touch and hold here to practice': 'Toca y mantén aquí para practicar',
            'Left click for dot, Right click for dash': 'Clic izquierdo para punto, clic derecho para raya',
            'Press your CW key to practice': 'Presiona tu llave CW para practicar',
            'Clear Input': 'Limpiar Entrada',
            'Check My Code': 'Verificar Mi Código',
            'Show Target Code': 'Mostrar Código Objetivo',
            'Your CW input will appear here...': 'Tu entrada CW aparecerá aquí...',
            'Your Input:': 'Tu Entrada:',
            'Target Code:': 'Código Objetivo:',
            'Card Type:': 'Tipo de Tarjeta:',
            'Letters Only': 'Solo Letras',
            'Numbers Only': 'Solo Números',
            'Letters & Numbers': 'Letras y Números',
            
            // === PROGRESS TAB ===
            'Your Learning Progress': 'Tu Progreso de Aprendizaje',
            'Track your Morse code learning journey': 'Sigue tu viaje de aprendizaje de código Morse',
            'Letters Learned': 'Letras Aprendidas',
            'Practice Sessions': 'Sesiones de Práctica',
            'Flashcards Viewed': 'Tarjetas Visualizadas',
            'Overall Progress': 'Progreso General',
            'Reset Progress': 'Reiniciar Progreso',
            
            // === ABOUT TAB ===
            'About Morse Code Learning App': 'Acerca de la Aplicación de Aprendizaje de Código Morse',
            'Welcome to the Morse Code Learning App - a comprehensive, progressive web application designed to help you learn, practice, and master Morse code efficiently and enjoyably.': 'Bienvenido a la Aplicación de Aprendizaje de Código Morse - una aplicación web progresiva y comprensiva diseñada para ayudarte a aprender, practicar y dominar el código Morse de manera eficiente y disfrutable.',
            'Features': 'Características',
            'Learn: Complete Morse code reference table with interactive character learning': 'Aprender: Tabla de referencia completa de código Morse con aprendizaje interactivo de caracteres',
            'Practice: Convert text to Morse and vice versa with audio playback': 'Practicar: Convierte texto a Morse y viceversa con reproducción de audio',
            'Audio Training: Customizable Morse code audio with adjustable speed, frequency, and volume': 'Entrenamiento Auditivo: Audio de código Morse personalizable con velocidad, frecuencia y volumen ajustables',
            'CW Key Interface: Virtual CW key with keyboard, touch, mouse, and Web Serial API support': 'Interfaz de Llave CW: Llave CW virtual con soporte para teclado, tacto, ratón y API Web Serial',
            'Flashcards: Interactive flashcard system for memorization': 'Tarjetas: Sistema interactivo de tarjetas para memorización',
            'Progress Tracking: Track your learning progress with statistics': 'Seguimiento de Progreso: Sigue tu progreso de aprendizaje con estadísticas',
            'Phrase Management: Save, import, export, and organize practice phrases': 'Gestión de Frases: Guarda, importa, exporta y organiza frases de práctica',
            'Offline Capable: Works without internet connection (PWA)': 'Funciona Sin Conexión: Opera sin conexión a internet (PWA)',
            'Responsive Design: Works on desktop, tablet, and mobile devices': 'Diseño Responsivo: Funciona en escritorio, tablet y dispositivos móviles',
            'Technical Details': 'Detalles Técnicos',
            'This application is built using modern web technologies:': 'Esta aplicación está construida usando tecnologías web modernas:',
            'HTML5, CSS3, and Vanilla JavaScript': 'HTML5, CSS3 y JavaScript Vanilla',
            'Web Audio API for Morse code sound generation': 'API Web Audio para generación de sonido de código Morse',
            'Web Serial API for hardware CW key support (experimental)': 'API Web Serial para soporte de llave CW de hardware (experimental)',
            'Progressive Web App (PWA) with service worker': 'Aplicación Web Progresiva (PWA) con service worker',
            'LocalStorage for data persistence': 'LocalStorage para persistencia de datos',
            'Responsive CSS Grid and Flexbox layouts': 'Diseños responsivos con CSS Grid y Flexbox',
            'Morse Code Timing': 'Temporización del Código Morse',
            'The app uses standard PARIS timing calculation:': 'La aplicación usa el cálculo de temporización PARIS estándar:',
            'Dot duration = 1 time unit': 'Duración del punto = 1 unidad de tiempo',
            'Dash duration = 3 time units': 'Duración de la raya = 3 unidades de tiempo',
            'Intra-character space = 1 time unit': 'Espacio intra-carácter = 1 unidad de tiempo',
            'Character space = 3 time units': 'Espacio entre caracteres = 3 unidades de tiempo',
            'Word space = 7 time units': 'Espacio entre palabras = 7 unidades de tiempo',
            'PARIS word = 50 time units (standard for WPM calculation)': 'Palabra PARIS = 50 unidades de tiempo (estándar para cálculo de PPM)',
            'Words Per Minute (WPM) calculation: Time unit = 1200 / WPM (in milliseconds)': 'Cálculo de Palabras Por Minuto (PPM): Unidad de tiempo = 1200 / PPM (en milisegundos)',
            'Project Information': 'Información del Proyecto',
            'GitHub Repository:': 'Repositorio GitHub:',
            'Author:': 'Autor:',
            'License:': 'Licencia:',
            'Version:': 'Versión:',
            'License': 'Licencia',
            'Acknowledgments': 'Agradecimientos',
            'Getting Help': 'Obteniendo Ayuda',
            'Made with ❤️ for the amateur radio and Morse code community': 'Hecho con ❤️ para la comunidad de radioaficionados y código Morse',
            '"CQ CQ CQ DE PU6RLS K"': '"CQ CQ CQ DE PU6RLS K"',
            
            // === ALERT MESSAGES ===
            'Please enter a phrase': 'Por favor, introduce una frase',
            'This phrase already exists': 'Esta frase ya existe',
            'No phrases available. Please add some phrases first.': 'No hay frases disponibles. Por favor, añade algunas frases primero.',
            'Please select a phrase set': 'Por favor, selecciona un conjunto de frases',
            'No phrases to export': 'No hay frases para exportar',
            'Are you sure you want to clear all practice phrases?': '¿Estás seguro de que quieres borrar todas las frases de práctica?',
            'Are you sure you want to reset all progress and settings?': '¿Estás seguro de que quieres reiniciar todo el progreso y configuraciones?',
            'Delete phrase: "{0}"?': '¿Eliminar frase: "{0}"?',
            'Export as JSON (Cancel) or Text file (OK)?\n\nCancel = JSON format (recommended)\nOK = Text file (one phrase per line)': '¿Exportar como JSON (Cancelar) o Archivo de Texto (OK)?\n\nCancelar = Formato JSON (recomendado)\nOK = Archivo de texto (una frase por línea)',
            'Successfully imported {0} new phrases.': 'Importadas exitosamente {0} nuevas frases.',
            'Loaded {0} phrases from the {1} set.': 'Cargadas {0} frases del conjunto {1}.',
            'Audio not initialized': 'Audio no inicializado',
            'Audio already playing': 'Audio ya se está reproduciendo',
            'Audio stopped': 'Audio detenido',
            '✓ Correct! "{0}" = {1}': '✓ ¡Correcto! "{0}" = {1}',
            '✗ Try again. Your input: {0}, Target: {1}': '✗ Intenta de nuevo. Tu entrada: {0}, Objetivo: {1}',
            'Random phrase selected: "{0}"': 'Frase aleatoria seleccionada: "{0}"',
            'Error': 'Error',
            'Warning': 'Advertencia',
            
            // === OFFLINE ===
            '⚠️ You are offline. Some features may be limited.': '⚠️ Estás sin conexión. Algunas funciones pueden ser limitadas.',
            
            // === LANGUAGE ===
            'Language:': 'Idioma:',
            
            // === BUTTON TEXTS (for dynamically created buttons) ===
            'Use': 'Usar',
            'Play': 'Reproducir',
            'Delete': 'Eliminar',
            'Load this phrase into the text area': 'Cargar esta frase en el área de texto',
            'Play this phrase as Morse code': 'Reproducir esta frase como código Morse',
            'Delete this phrase': 'Eliminar esta frase'
        }
    },
    
    // Initialize
    init() {
        // Get saved language
        const savedLang = localStorage.getItem('morseCodeLang');
        
        // Get browser language (e.g., "pt-BR", "en-US")
        const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        const browserLangCode = browserLang.substring(0, 2);
        
        // Supported languages in our app
        const supportedLangs = {
            'en': 'English',
            'pt': 'Português',
            'es': 'Español',
            'fr': 'Français',
            'it': 'Italiano',
            'de': 'Deutsch'
        };
        
        // Language detection with fallbacks
        let detectedLang;
        
        // 1. Check saved preference
        if (savedLang && supportedLangs[savedLang]) {
            detectedLang = savedLang;
        } 
        // 2. Check browser language directly
        else if (supportedLangs[browserLangCode]) {
            detectedLang = browserLangCode;
        }
        // 3. Check for regional variants
        else {
            // Map regional variants to supported languages
            const regionalMap = {
                // Portuguese variants
                'pt-br': 'pt', 'pt-pt': 'pt', 'pt': 'pt',
                // Spanish variants
                'es-es': 'es', 'es-mx': 'es', 'es-ar': 'es', 'es': 'es',
                // French variants
                'fr-fr': 'fr', 'fr-ca': 'fr', 'fr': 'fr',
                // Italian
                'it-it': 'it', 'it': 'it',
                // German variants
                'de-de': 'de', 'de-at': 'de', 'de-ch': 'de', 'de': 'de',
                // English variants (default fallback)
                'en-us': 'en', 'en-gb': 'en', 'en-au': 'en', 'en': 'en'
            };
            
            detectedLang = regionalMap[browserLang] || 'en';
        }
        
        this.currentLang = detectedLang;
        
        // Save if not English and not already saved
        if (this.currentLang !== 'en' && !savedLang) {
            localStorage.setItem('morseCodeLang', this.currentLang);
        }
        
        // Apply translations if not English
        if (this.currentLang !== 'en') {
            this.applyTranslations();
        }
        
        // Create language selector
        this.createLanguageSelector();
        
        // Override alert and confirm
        this.overrideDialogs();
        
        console.log(`I18N: Language set to ${this.currentLang} (${supportedLangs[this.currentLang]})`);
        console.log(`I18N: Browser reported ${browserLang}, saved: ${savedLang || 'none'}`);
    },
    
    // Create language selector UI
    createLanguageSelector() {
        // Don't create if already exists
        if (document.getElementById('languageSelect')) return;
        
        // Get current translation for "Language:"
        const currentLabel = this.t('Language:');
        
        // Language names in their own language
        const languageNames = {
            'en': 'English',
            'pt': 'Português',
            'es': 'Español',
            //'fr': 'Français',
            //'it': 'Italiano',
            //'de': 'Deutsch'
        };
        
        let optionsHTML = '';
        for (const [code, name] of Object.entries(languageNames)) {
            const selected = code === this.currentLang ? ' selected' : '';
            optionsHTML += `<option value="${code}"${selected}>${name}</option>`;
        }
        
        const selectorHTML = `
            <div style="text-align: center; margin: 15px 0;">
                <label for="languageSelect" style="color: white; margin-right: 10px; font-weight: bold;">
                    ${currentLabel}
                </label>
                <select id="languageSelect" style="padding: 8px 12px; border-radius: 6px; 
                    background: rgba(255,255,255,0.1); color: white; border: 1px solid #fdbb2d;
                    font-size: 1rem; cursor: pointer;">
                    ${optionsHTML}
                </select>
            </div>
        `;
        
        // Insert after subtitle
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) {
            subtitle.insertAdjacentHTML('afterend', selectorHTML);
            
            // Add change event
            document.getElementById('languageSelect').addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    },
    
    // Change language - reloads the page
    changeLanguage(lang) {
        if (!this.languages[lang]) {
            console.warn(`Language not supported: ${lang}`);
            return;
        }
        
        // Save preference
        localStorage.setItem('morseCodeLang', lang);
        
        // Reload the page to apply all changes
        window.location.reload();
    },
    
    // Apply translations to static content
    applyTranslations() {
        const translations = this.languages[this.currentLang];
        if (!translations) return;
        
        // Function to walk through DOM and translate text nodes
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let node;
        const nodesToTranslate = [];
        
        // First pass: collect text nodes
        while (node = walker.nextNode()) {
            if (node.textContent.trim()) {
                nodesToTranslate.push(node);
            }
        }
        
        // Second pass: translate collected nodes
        nodesToTranslate.forEach(node => {
            const originalText = node.textContent.trim();
            const translation = translations[originalText];
            
            if (translation) {
                node.textContent = node.textContent.replace(originalText, translation);
            }
        });
        
        // Translate placeholders
        document.querySelectorAll('[placeholder]').forEach(element => {
            const placeholder = element.getAttribute('placeholder');
            const translation = translations[placeholder];
            
            if (translation) {
                element.setAttribute('placeholder', translation);
            }
        });
        
        // Translate button values
        document.querySelectorAll('input[type="button"], input[type="submit"], button').forEach(element => {
            const text = element.value || element.textContent;
            const translation = translations[text];
            
            if (translation) {
                if (element.value) {
                    element.value = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update offline notification if exists
        const offlineNotification = document.getElementById('offlineNotification');
        if (offlineNotification) {
            const text = offlineNotification.textContent.trim();
            const translation = translations[text];
            if (translation) {
                offlineNotification.textContent = translation;
            }
        }
    },
    
    // Get translation (for JavaScript use)
    t(key, ...params) {
        const translations = this.languages[this.currentLang] || this.languages.en;
        let translation = translations[key] || key;
        
        // Replace parameters {0}, {1}, etc.
        if (params && params.length > 0) {
            params.forEach((param, index) => {
                const placeholder = `{${index}}`;
                while (translation.includes(placeholder)) {
                    translation = translation.replace(placeholder, param);
                }
            });
        }
        
        return translation;
    },
    
    // Override alert and confirm
    overrideDialogs() {
        const originalAlert = window.alert;
        const originalConfirm = window.confirm;
        
        window.alert = (message) => {
            return originalAlert(this.t(message));
        };
        
        window.confirm = (message) => {
            // Handle parameterized messages
            if (message.includes('Delete phrase: "') && message.includes('"?')) {
                const phrase = message.match(/Delete phrase: "(.*)"\?/)[1];
                return originalConfirm(this.t('Delete phrase: "{0}"?', phrase));
            }
            return originalConfirm(this.t(message));
        };
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        I18N.init();
    });
} else {
    I18N.init();
}

// Make it globally available
window.i18n = I18N;