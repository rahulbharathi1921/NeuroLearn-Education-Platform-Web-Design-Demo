/**
 * Campus Module
 * Handles 3D virtual campus canvas and interactions
 */

export function initCampus() {
    initCampusCanvas();
    initCampusControls();
    initHotspots();
}

function initCampusCanvas() {
    const canvas = document.getElementById('campusCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        drawCampus();
    }

    function drawCampus() {
        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.fillStyle = '#050510';
        ctx.fillRect(0, 0, width, height);

        // Draw grid
        drawGrid(ctx, width, height);

        // Draw buildings
        drawBuildings(ctx, width, height);
    }

    function drawGrid(ctx, width, height) {
        ctx.strokeStyle = 'rgba(0, 243, 255, 0.1)';
        ctx.lineWidth = 1;

        for (let x = 0; x < width; x += 50) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        for (let y = 0; y < height; y += 50) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    }

    function drawBuildings(ctx, width, height) {
        const centerX = width / 2;
        const centerY = height / 2;

        // Main hub
        drawBuilding(ctx, centerX - 100, centerY - 80, 200, 160, '#9d00ff', 'MAIN HUB');
        
        // AI Lab
        drawBuilding(ctx, centerX - 300, centerY - 60, 150, 120, '#00f3ff', 'AI LAB');
        
        // Library
        drawBuilding(ctx, centerX + 150, centerY - 40, 120, 100, '#ff00ff', 'LIBRARY');
        
        // Arena
        drawBuilding(ctx, centerX - 60, centerY - 200, 120, 80, '#ff6b00', 'ARENA');
        
        // Studio
        drawBuilding(ctx, centerX - 80, centerY + 100, 160, 100, '#00ff88', 'STUDIO');
    }

    function drawBuilding(ctx, x, y, width, height, color, label) {
        ctx.fillStyle = color + '40';
        ctx.fillRect(x, y, width, height);

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);

        // Windows
        ctx.fillStyle = color + '80';
        for (let wx = x + 20; wx < x + width - 20; wx += 25) {
            for (let wy = y + 20; wy < y + height - 20; wy += 25) {
                ctx.fillRect(wx, wy, 15, 15);
            }
        }

        // Label
        ctx.fillStyle = 'white';
        ctx.font = 'bold 12px Orbitron';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + width / 2, y + height + 20);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
}

function initCampusControls() {
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');
    const resetView = document.getElementById('resetView');

    zoomIn?.addEventListener('click', () => {
        console.log('Zoom in');
    });

    zoomOut?.addEventListener('click', () => {
        console.log('Zoom out');
    });

    resetView?.addEventListener('click', () => {
        console.log('Reset view');
    });
}

function initHotspots() {
    const hotspots = document.querySelectorAll('.hotspot-item');
    
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            const name = hotspot.querySelector('.hotspot-name')?.textContent;
            alert(`Welcome to ${name}!`);
        });
    });
}