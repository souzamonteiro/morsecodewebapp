// i18n.js
// Internationalization system that works with existing code

const I18N = {
    currentLang: 'en',
    translations: {},
    
    // Language files
    languages: {
        'en': {
            // App
            'Morse Code Learning App': 'Morse Code Learning App',
            'Learn, practice, and master Morse code': 'Learn, practice, and master Morse code',
            'Morse Code Reference': 'Morse Code Reference',
            'Morse code is a method of transmitting text information as a series of on-off tones, lights, or clicks.': 'Morse code is a method of transmitting text information as a series of on-off tones, lights, or clicks.',
            
            // Tabs
            'Learn': 'Learn',
            'Practice': 'Practice',
            'Audio': 'Audio',
            'CW Key': 'CW Key',
            'Flashcards': 'Flashcards',
            'Progress': 'Progress',
            'About': 'About',
            
            // Practice tab
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
            
            // Common phrases
            'Practice Phrases Management': 'Practice Phrases Management',
            'Add new practice phrase:': 'Add new practice phrase:',
            'Enter a new practice phrase': 'Enter a new practice phrase',
            'Add Phrase': 'Add Phrase',
            'Import Phrases': 'Import Phrases',
            'Export Phrases': 'Export Phrases',
            'Clear All': 'Clear All',
            'Saved Phrases': 'Saved Phrases',
            'No phrases saved yet. Add some phrases to practice!': 'No phrases saved yet. Add some phrases to practice!',
            
            // Audio tab
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
            
            // CW Key tab
            'CW Key Interface': 'CW Key Interface',
            'Connect your USB CW key or use touch/keyboard as a virtual key': 'Connect your USB CW key or use touch/keyboard as a virtual key',
            'CW Key not connected': 'CW Key not connected',
            'CW Speed (WPM):': 'CW Speed (WPM):',
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
            'Press Spacebar or click here to test': 'Press Spacebar or click here to test',
            '(Touch and hold for dash, quick tap for dot)': '(Touch and hold for dash, quick tap for dot)',
            'CW output will appear here...': 'CW output will appear here...',
            'Current Character:': 'Current Character:',
            'Current Word:': 'Current Word:',
            'None': 'None',

            // Flashcards
            'Flashcard Practice': 'Flashcard Practice',
            'Start Flashcard Practice': 'Start Flashcard Practice',
            'Show Answer': 'Show Answer',
            'Next Card': 'Next Card',
            'Flashcard progress will be tracked here.': 'Flashcard progress will be tracked here.',
            
            // Progress tab
            'Your Progress': 'Your Progress',
            'Practice Sessions Completed:': 'Practice Sessions Completed:',
            'Total Characters Practiced:': 'Total Characters Practiced:',
            'Accuracy:': 'Accuracy:',
            'Average WPM:': 'Average WPM:',
            'Reset Progress': 'Reset Progress',
            
            // About tab
            'About This App': 'About This App',
            'This Morse Code Learning App is designed to help users learn and practice Morse code effectively.': 'This Morse Code Learning App is designed to help users learn and practice Morse code effectively.',
            'Version:': 'Version:',
            'Developed by:': 'Developed by:',
            'License:': 'License:',
            
            // Alert messages (CRITICAL - estas são usadas no JavaScript)
            'Please enter a phrase': 'Please enter a phrase',
            'This phrase already exists': 'This phrase already exists',
            'No phrases available. Please add some phrases first.': 'No phrases available. Please add some phrases first.',
            'Please select a phrase set': 'Please select a phrase set',
            'No phrases to export': 'No phrases to export',
            'Are you sure you want to clear all practice phrases?': 'Are you sure you want to clear all practice phrases?',
            'Are you sure you want to reset all progress and settings?': 'Are you sure you want to reset all progress and settings?',
            'Delete phrase: "{0}"?': 'Delete phrase: "{0}"?',
            
            // Offline
            '⚠️ You are offline. Some features may be limited.': '⚠️ You are offline. Some features may be limited.',
            
            // Language selector
            'Language:': 'Language:'
        },
        
        'pt': {
            // App
            'Morse Code Learning App': 'Aplicativo de Aprendizado de Código Morse',
            'Learn, practice, and master Morse code': 'Aprenda, pratique e domine o código Morse',
            'Morse Code Reference': 'Referência de Código Morse',
            'Morse code is a method of transmitting text information as a series of on-off tones, lights, or clicks.': 'O código Morse é um método de transmitir informações de texto como uma série de tons, luzes ou cliques ligados e desligados.',

            // Tabs
            'Learn': 'Aprender',
            'Practice': 'Praticar',
            'Audio': 'Áudio',
            'CW Key': 'Telegrafo',
            'Flashcards': 'Flashcards',
            'Progress': 'Progresso',
            'About': 'Sobre',
            
            // Practice tab
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
            
            // Common phrases
            'Practice Phrases Management': 'Gerenciamento de Frases de Prática',
            'Add new practice phrase:': 'Adicionar nova frase de prática:',
            'Enter a new practice phrase': 'Digite uma nova frase para prática',
            'Add Phrase': 'Adicionar Frase',
            'Import Phrases': 'Importar Frases',
            'Export Phrases': 'Exportar Frases',
            'Clear All': 'Limpar Tudo',
            'Saved Phrases': 'Frases Salvas',
            'No phrases saved yet. Add some phrases to practice!': 'Nenhuma frase salva ainda. Adicione algumas frases para praticar!',
            
            // Audio tab
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
            
            // CW Key tab
            'CW Key Interface': 'Interface de Telegrafo',
            'Connect your USB CW key or use touch/keyboard as a virtual key': 'Conecte seu telegrafo USB ou use toque/teclado como telegrafo virtual',
            'CW Key not connected': 'Telegrafo não conectado',
            'CW Speed (WPM):': 'Velocidade CW (PPM):',
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
            'Press Spacebar or click here to test': 'Pressione Barra de Espaço ou clique aqui para testar',
            '(Touch and hold for dash, quick tap for dot)': '(Toque e segure para traço, toque rápido para ponto)',
            'CW output will appear here...': 'A saída CW aparecerá aqui...',
            'Current Character:': 'Caractere Atual:',
            'Current Word:': 'Palavra Atual:',
            'None': 'Nenhum',
            
            /// Flashcards
            'Flashcard Practice': 'Prática com Flashcards',
            'Start Flashcard Practice': 'Iniciar Prática com Flashcards',
            'Show Answer': 'Mostrar Resposta',
            'Next Card': 'Próxima Carta',
            'Flashcard progress will be tracked here.': 'O progresso dos flashcards será rastreado aqui.',
            
            // Progress tab
            'Your Progress': 'Seu Progresso',
            'Practice Sessions Completed:': 'Sessões de Prática Completadas:',
            'Total Characters Practiced:': 'Total de Caracteres Praticados:',
            'Accuracy:': 'Precisão:',
            'Average WPM:': 'PPM Médio:',
            'Reset Progress': 'Redefinir Progresso',
            
            // About tab
            'About This App': 'Sobre Este Aplicativo',
            'This Morse Code Learning App is designed to help users learn and practice Morse code effectively.': 'Este Aplicativo de Aprendizado de Código Morse é projetado para ajudar os usuários a aprender e praticar código Morse de forma eficaz.',
            'Version:': 'Versão:',
            'Developed by:': 'Desenvolvido por:',
            'License:': 'Licença:',

            // Alert messages (CRITICAL)
            'Please enter a phrase': 'Por favor, digite uma frase',
            'This phrase already exists': 'Esta frase já existe',
            'No phrases available. Please add some phrases first.': 'Nenhuma frase disponível. Por favor, adicione algumas frases primeiro.',
            'Please select a phrase set': 'Por favor, selecione um conjunto de frases',
            'No phrases to export': 'Nenhuma frase para exportar',
            'Are you sure you want to clear all practice phrases?': 'Tem certeza de que deseja limpar todas as frases de prática?',
            'Are you sure you want to reset all progress and settings?': 'Tem certeza de que deseja redefinir todo o progresso e configurações?',
            'Delete phrase: "{0}"?': 'Excluir frase: "{0}"?',
            
            // Offline
            '⚠️ You are offline. Some features may be limited.': '⚠️ Você está offline. Alguns recursos podem ser limitados.',
            
            // Language selector
            'Language:': 'Idioma:'
        }
    },
    
    // Initialize
    init() {
        // Get saved language or default to browser language
        const savedLang = localStorage.getItem('morseCodeLang');
        const browserLang = navigator.language.substring(0, 2);
        
        this.currentLang = savedLang || (this.languages[browserLang] ? browserLang : 'en');
        this.translations = this.languages[this.currentLang];
        
        // Create language selector
        this.createLanguageSelector();
        
        // Override alert and confirm IMMEDIATELY (BEFORE your app code runs)
        this.overrideDialogs();
        
        // Apply translations to static content
        this.translateStaticContent();
        
        console.log(`I18N initialized: ${this.currentLang}`);
    },
    
    // Create language selector UI
    createLanguageSelector() {
        const selectorHTML = `
            <div style="text-align: center; margin: 15px 0;">
                <label for="languageSelect" style="color: white; margin-right: 10px; font-weight: bold;">
                    ${this.t('Language:')}
                </label>
                <select id="languageSelect" style="padding: 8px 12px; border-radius: 6px; 
                       background: rgba(255,255,255,0.1); color: white; border: 1px solid #fdbb2d;
                       font-size: 1rem; cursor: pointer;">
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                </select>
            </div>
        `;
        
        // Insert after subtitle
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) {
            subtitle.insertAdjacentHTML('afterend', selectorHTML);
            
            // Set current language
            document.getElementById('languageSelect').value = this.currentLang;
            
            // Add change event
            document.getElementById('languageSelect').addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    },
    
    // Change language
    changeLanguage(lang) {
        if (!this.languages[lang]) {
            console.warn(`Language not supported: ${lang}`);
            return;
        }
        
        this.currentLang = lang;
        this.translations = this.languages[lang];
        localStorage.setItem('morseCodeLang', lang);
        
        // Update language selector
        document.getElementById('languageSelect').value = lang;
        
        // Update static content
        this.translateStaticContent();
        
        // Update language label
        const langLabel = document.querySelector('label[for="languageSelect"]');
        if (langLabel) {
            langLabel.textContent = this.t('Language:');
        }
        
        console.log(`Language changed to: ${lang}`);
    },
    
    // Translate static content (text nodes)
    translateStaticContent() {
        // Translate all text nodes in the body
        this.translateNode(document.body);
        
        // Update specific dynamic elements
        this.updateDynamicElements();
    },
    
    // Recursively translate a node and its children
    translateNode(node) {
        // Skip script and style tags
        if (node.nodeType === Node.ELEMENT_NODE && 
            (node.tagName === 'SCRIPT' || node.tagName === 'STYLE')) {
            return;
        }
        
        // If it's a text node, translate it
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            const originalText = node.textContent.trim();
            const translation = this.t(originalText);
            
            if (translation !== originalText) {
                node.textContent = node.textContent.replace(originalText, translation);
            }
        }
        // If it's an element, process its children
        else if (node.nodeType === Node.ELEMENT_NODE) {
            // Handle input placeholders
            if (node.hasAttribute('placeholder')) {
                const placeholder = node.getAttribute('placeholder');
                const translated = this.t(placeholder);
                if (translated !== placeholder) {
                    node.setAttribute('placeholder', translated);
                }
            }
            
            // Process all children
            Array.from(node.childNodes).forEach(child => {
                this.translateNode(child);
            });
        }
    },
    
    // Update dynamic elements that might have been created by JavaScript
    updateDynamicElements() {
        // Update offline notification
        const offlineNotification = document.getElementById('offlineNotification');
        if (offlineNotification) {
            offlineNotification.textContent = this.t('⚠️ You are offline. Some features may be limited.');
        }
    },
    
    // Get translation
    t(key, ...params) {
        let translation = this.translations[key] || key;
        
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
    
    // Override alert and confirm - THIS IS CRITICAL
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
        
        // Also override console.log for debugging
        const originalLog = console.log;
        console.log = function(...args) {
            originalLog.apply(console, ['[I18N]', ...args]);
        };
    }
};

// Make it globally available immediately
window.i18n = I18N;

// Initialize immediately (don't wait for DOMContentLoaded)
// This ensures dialogs are overridden BEFORE your app code runs
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        I18N.init();
    });
} else {
    I18N.init();
}