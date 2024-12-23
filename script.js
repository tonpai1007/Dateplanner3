import { flowerAnimation, characterAnimation } from './animations.js';
// Create falling flowers animation
function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.animation = `fall ${Math.random() * 10 + 5}s linear`;
    document.body.appendChild(flower);

    flower.addEventListener('animationend', () => {
        flower.remove();
    });
}

// Use the animation controllers in your existing code 
****function addEvent() {
    // ... your existing addEvent code ...
    need to fix
    // Add visual effects using the controllers
    flowerAnimation.createFlowerBurst(event.clientX, event.clientY);
    characterAnimation.setEmotion('happy');
}
// Create sparkle effect
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);

    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// Toggle Kurumi's speech bubble
function toggleSpeechBubble() {
    const bubble = document.getElementById('speechBubble');
    bubble.style.display = bubble.style.display === 'none' ? 'block' : 'none';
    createSparkle(event.clientX, event.clientY);
}

// Rest of your JavaScript functions...
// I've truncated this for brevity, but you should include all the functions from the previous version
