// Main Application JavaScript
class PWAApp {
    constructor() {
        this.deferredPrompt = null;
        this.init();
    }

    async init() {
        this.registerServiceWorker();
        this.setupEventListeners();
        this.checkConnectivity();
        this.loadSavedData();
        this.updateStorageStatus();
        
        // Check PWA installation criteria
        this.checkInstallability();
        
        // Update online/offline status
        window.addEventListener('online', () => this.updateNetworkStatus(true));
        window.addEventListener('offline', () => this.updateNetworkStatus(false));
    }

    // Register Service Worker
    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/service-worker.js');
                console.log('Service Worker registered:', registration);
                
                this.updateSWStatus('registered');
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('Service Worker update found:', newWorker);
                });
                
            } catch (error) {
                console.error('Service Worker registration failed:', error);
                this.updateSWStatus('failed');
            }
        } else {
            console.log('Service Workers not supported');
            this.updateSWStatus('unsupported');
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Install button
        const installBtn = document.getElementById('installBtn');
        if (installBtn) {
            installBtn.addEventListener('click', () => this.installApp());
        }

        // Test notification button
        const notifyBtn = document.getElementById('notifyBtn');
        if (notifyBtn) {
            notifyBtn.addEventListener('click', () => this.testNotification());
        }

        // Storage demo buttons
        const saveBtn = document.getElementById('saveBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveData());
        }

        const clearBtn = document.getElementById('clearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearData());
        }

        // Handle beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallButton();
        });

        // Handle app installed event
        window.addEventListener('appinstalled', () => {
            console.log('PWA installed successfully');
            this.hideInstallButton();
            this.showNotification('App installed successfully!', 'success');
        });
    }

    // Check connectivity
    checkConnectivity() {
        this.updateNetworkStatus(navigator.onLine);
    }

    updateNetworkStatus(isOnline) {
        const networkStatus = document.getElementById('networkStatus');
        if (networkStatus) {
            networkStatus.textContent = isOnline ? 'Online' : 'Offline';
            networkStatus.className = `status-value ${isOnline ? 'online' : 'offline'}`;
            
            if (!isOnline) {
                this.showNotification('You are now offline. Using cached content.', 'warning');
            }
        }
    }

    updateSWStatus(status) {
        const swStatus = document.getElementById('swStatus');
        if (swStatus) {
            swStatus.textContent = status;
            swStatus.className = `status-value ${status}`;
        }
    }

    // Install PWA
    async installApp() {
        if (!this.deferredPrompt) return;

        this.deferredPrompt.prompt();
        const { outcome } = await this.deferredPrompt.userChoice;
        
        console.log(`User response to install prompt: ${outcome}`);
        this.deferredPrompt = null;
        
        if (outcome === 'accepted') {
            this.hideInstallButton();
        }
    }

    showInstallButton() {
        const installBtn = document.getElementById('installBtn');
        const installStatus = document.getElementById('installStatus');
        
        if (installBtn) installBtn.style.display = 'block';
        if (installStatus) {
            installStatus.textContent = 'Ready';
            installStatus.className = 'status-value ready';
        }
    }

    hideInstallButton() {
        const installBtn = document.getElementById('installBtn');
        const installStatus = document.getElementById('installStatus');
        
        if (installBtn) installBtn.style.display = 'none';
        if (installStatus) {
            installStatus.textContent = 'Installed';
            installStatus.className = 'status-value installed';
        }
    }

    // Check PWA installability
    checkInstallability() {
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        const isInstalled = window.navigator.standalone || isStandalone;
        
        if (isInstalled) {
            this.hideInstallButton();
        }
    }

    // Test notifications
    async testNotification() {
        if (!('Notification' in window)) {
            this.showNotification('Notifications not supported', 'error');
            return;
        }

        if (Notification.permission === 'granted') {
            this.showLocalNotification('Test Notification', 'This is a test notification from your PWA!');
        } else if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                this.showLocalNotification('Test Notification', 'Notifications enabled!');
            }
        }
    }

    showLocalNotification(title, body) {
        if ('serviceWorker' in navigator && 'showNotification' in ServiceWorkerRegistration.prototype) {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification(title, {
                    body: body,
                    icon: '/assets/icons/icon-192x192.png',
                    vibrate: [200, 100, 200]
                });
            });
        } else {
            // Fallback for browsers without Service Worker notifications
            new Notification(title, { body: body });
        }
    }

    // Storage demo functions
    saveData() {
        const input = document.getElementById('storageInput');
        if (!input || !input.value.trim()) return;

        const data = input.value;
        localStorage.setItem('pwaDemoData', data);
        
        this.showNotification('Data saved locally!', 'success');
        this.loadSavedData();
        input.value = '';
        
        this.updateStorageStatus();
    }

    loadSavedData() {
        const savedDataDiv = document.getElementById('savedData');
        if (!savedDataDiv) return;

        const data = localStorage.getItem('pwaDemoData');
        if (data) {
            savedDataDiv.innerHTML = `
                <strong>Saved Data:</strong> ${data}
                <small>(Stored in localStorage)</small>
            `;
        } else {
            savedDataDiv.innerHTML = '<em>No data saved yet</em>';
        }
    }

    clearData() {
        localStorage.removeItem('pwaDemoData');
        this.showNotification('Data cleared!', 'info');
        this.loadSavedData();
        this.updateStorageStatus();
    }

    // Update storage status
    async updateStorageStatus() {
        if ('storage' in navigator && 'estimate' in navigator.storage) {
            try {
                const estimate = await navigator.storage.estimate();
                const used = (estimate.usage / (1024 * 1024)).toFixed(2);
                const quota = (estimate.quota / (1024 * 1024)).toFixed(2);
                const percentage = ((estimate.usage / estimate.quota) * 100).toFixed(1);
                
                const storageStatus = document.getElementById('storageStatus');
                const cacheStatus = document.getElementById('cacheStatus');
                
                if (storageStatus) {
                    storageStatus.textContent = `${used} MB / ${quota} MB (${percentage}%)`;
                }
                
                if (cacheStatus) {
                    cacheStatus.textContent = `Storage: ${used} MB used`;
                }
                
            } catch (error) {
                console.error('Storage estimate failed:', error);
            }
        }
    }

    // UI notification system
    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        if (!notification) return;

        notification.textContent = message;
        notification.className = `notification show ${type}`;

        setTimeout(() => {
            notification.className = 'notification';
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PWAApp();
});

// Add to home screen detection for iOS
if (window.navigator.standalone === undefined) {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isIOS && isSafari) {
        // Show iOS installation instructions
        setTimeout(() => {
            const notification = document.getElementById('notification');
            if (notification) {
                notification.innerHTML = `
                    <strong>Install this PWA:</strong>
                    Tap <span style="font-size: 1.2em">↗</span> then "Add to Home Screen"
                `;
                notification.className = 'notification show info';
                
                setTimeout(() => {
                    notification.className = 'notification';
                }, 5000);
            }
        }, 3000);
    }
}