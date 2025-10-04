// Real-time clock update
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
    document.getElementById('current-time').textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Simulate live data updates
function simulateLiveData() {
    const cards = document.querySelectorAll('.sensor-card');
    
    setInterval(() => {
        // Randomly update one card for demo purposes
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        randomCard.classList.add('live-update');
        
        setTimeout(() => {
            randomCard.classList.remove('live-update');
        }, 500);
    }, 5000);
}

// Mode toggle functionality
document.querySelectorAll('.btn-mode').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.btn-mode').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show alert for demo
        if (this.textContent === 'MANUAL') {
            alert('Mode Manual: Sekarang kamu bisa kontrol perangkat secara manual!');
        } else {
            alert('Mode Auto: Sistem AI akan mengontrol perangkat otomatis!');
        }
    });
});

// Mark all as read functionality
document.querySelector('.btn-mark-read').addEventListener('click', function() {
    const notifications = document.querySelectorAll('.notification-item');
    notifications.forEach(notification => {
        notification.style.opacity = '0.6';
    });
    this.textContent = 'Semua Sudah Dibaca ✓';
    this.style.background = '#4CAF50';
});

// Slider value display (optional enhancement)
document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('input', function() {
        // You can add value display logic here
        console.log(`Slider value: ${this.value}%`);
    });
});

// Initialize live data simulation
simulateLiveData();

// Demo mode for exhibition
function startDemoMode() {
    alert('🎮 Demo Mode Dimulai!\n\nSistem akan menunjukkan simulasi perubahan data sensor dan respons AI otomatis.');
    
    // Simulate some data changes
    setTimeout(() => {
        document.querySelector('.ph .card-value').textContent = '6.2';
        document.querySelector('.ph .card-status').innerHTML = '<i class="fas fa-check-circle"></i> Normal';
        document.querySelector('.ph .card-status').className = 'card-status status-normal';
        alert('✅ pH meningkat menjadi 6.2 - Kini normal!');
    }, 2000);
    
    setTimeout(() => {
        document.querySelector('.oxygen .card-value').textContent = '6.8 mg/L';
        document.querySelector('.oxygen .card-status').innerHTML = '<i class="fas fa-check-circle"></i> Optimal';
        document.querySelector('.oxygen .card-status').className = 'card-status status-normal';
        alert('💧 Oksigen meningkat menjadi 6.8 mg/L - Aerator otomatis mati!');
    }, 4000);
}

// Add demo button to header
const demoButton = document.createElement('button');
demoButton.textContent = '🎮 DEMO';
demoButton.className = 'btn-icon';
demoButton.style.background = '#FF9800';
demoButton.style.marginLeft = '10px';
demoButton.onclick = startDemoMode;
document.querySelector('.header-right').appendChild(demoButton);

console.log('🐠 Smart Aquaculture AIoT Dashboard Loaded!');
console.log('🚀 Fitur Demo: Klik tombol DEMO untuk simulasi pameran');