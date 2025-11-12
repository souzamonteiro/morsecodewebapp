# Morse Code Learning App

A comprehensive web application for learning Morse code, with support for audio, keyboard, touch, and CW (Continuous Wave) devices via USB.

![Morse Code App](https://img.shields.io/badge/Morse-Code%20Learning-blue)
![Web Technologies](https://img.shields.io/badge/HTML-CSS--JS-orange)
![Single Page](https://img.shields.io/badge/Single--Page-Application-green)

## 🌟 Features

### 🎯 Core Functionality
- **Complete Reference**: Interactive table with all Morse code characters
- **Practice Area**: Convert text to Morse and vice versa
- **Audio System**: Listen to Morse signals with frequency, speed, and volume control
- **Flashcards**: Card system for memorization
- **Progress Tracking**: Statistics and overall learning progress

### ⌨️ Multiple Input Methods
- **Keyboard**: Use spacebar as virtual key
- **Touch/Click**: Mobile-optimized interface
- **CW USB Devices**: Support for Morse keys via serial port

### 🔊 Advanced Audio System
- Real-time tone generation using Web Audio API
- Adjustable frequency controls (300-1000 Hz)
- Configurable speed (5-30 WPM - Words Per Minute)
- Volume control
- Predefined text playback

## 🚀 How to Use

### Quick Start
1. Open the `index.html` file in any modern browser
2. No installation or external dependencies required

### Application Tabs

#### 📚 Learn
- Complete Morse code reference table
- Click any character to mark it as learned
- Click again to play the character sound

#### 💪 Practice
- **Text to Morse**: Type text and convert to Morse code
- **Morse to Text**: Type Morse code (. for dot, - for dash) and decode
- Buttons to play audio for both conversions

#### 🔊 Audio
- Type text to play as Morse code
- Slider controls to adjust:
  - Tone frequency (300-1000 Hz)
  - Speed (5-30 WPM)
  - Volume (0-100%)
- "Random Text" button to generate random text for practice

#### ⌨️ CW Key
**Keyboard Mode:**
- Press spacebar or click the test area
- Quick taps for dots, hold for dashes

**Touch Mode:**
- Ideal for mobile devices
- Quick taps for dots, long press for dashes

**Serial Mode:**
- Connect compatible CW USB devices
- Requires browser with Web Serial API support

#### 🃏 Flashcards
- Card system for memorization
- Choose between letters, numbers, or both
- Click card to reveal Morse code
- Button to play character sound

#### 📊 Progress
- Track learned letters
- Practice session counter
- Flashcards viewed statistics
- Overall progress bar
- Option to reset progress

## 🔧 Technical Setup

### System Requirements
- Modern browser with support for:
  - Web Audio API
  - CSS Grid and Flexbox
  - ES6+ JavaScript
- For mobile use: browser with touch event support
- For CW devices: browser with Web Serial API support (Chrome/Edge 89+)

### Code Structure
```
morse-code-app/
├── index.html          # Complete application (HTML, CSS, JS)
└── README.md          # This file
```

### Local Storage
- Progress is automatically saved in browser's localStorage
- Data includes: learned letters, practice sessions, flashcards viewed

## 🎮 Usage Guide

### Keyboard/Touch Practice
1. Go to the "CW Key" tab
2. Select "Keyboard" or "Touch" in the mode menu
3. Use spacebar (keyboard) or touch the test area (mobile)
4. Quick taps generate dots (.), long presses generate dashes (-)
5. System automatically detects when a character is complete

### Speed Adjustment
- In the "CW Key" tab, use the "CW Speed" slider
- Speed measured in WPM (Words Per Minute)
- Default: 15 WPM (Dot: 80ms, Dash: 240ms)

### Audio Practice
1. Go to the "Audio" tab
2. Type desired text
3. Adjust frequency, speed, and volume as preferred
4. Click "Play Morse Code" to listen

## 🔌 CW USB Device Support

### Setup
1. Connect your CW USB device
2. In the "CW Key" tab, select "USB Serial Key"
3. Click "Connect Key" and select the serial port
4. Use your physical device to generate Morse code

### Compatibility
- Devices that emulate serial ports
- Expected protocol: bytes 0x01 (key down) and 0x00 (key up)

## 🎵 Audio Specifications

### Timing (Based on WPM)
- **Dot**: 1 time unit
- **Dash**: 3 time units  
- **Intra-character space**: 1 unit
- **Inter-character space**: 3 units
- **Word space**: 7 units

### WPM Calculation
Based on PARIS standard (50 time units per word):
```
Time per unit = 1200 / WPM (ms)
```

## 📱 Compatibility

### Tested Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Devices
- ✅ Desktop (Windows, macOS, Linux)
- ✅ Mobile (iOS, Android)
- ✅ Tablets

## 🐛 Troubleshooting

### Audio Not Working
- Check if browser supports Web Audio API
- Ensure volume is not muted
- Try clicking anywhere on the page first (autoplay policy)

### Touch Not Responding
- Use browser with touch event support
- Touch directly on the test area (avoid edges)

### CW Device Not Connecting
- Check Web Serial API support
- Grant serial port permission when prompted
- Restart application if needed

## 📄 License

This project is open source and available under the Apache 2.0 license.

## 🤝 Contributions

Contributions are welcome! Feel free to:
- Report issues
- Suggest new features
- Submit code improvements

## 📞 Support

For questions or suggestions, open an issue in the project repository.

---

**Happy Morse Coding!** 🎯🔊