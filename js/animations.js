// Flower Animation Controller
class FlowerAnimation {
    constructor() {
        this.flowerTypes = ['spring', 'summer', 'autumn', 'winter'];
        this.currentSeason = 'spring';
    }

    createFlower() {
        const flower = document.createElement('div');
        flower.className = `flower flower-rain flower-${this.currentSeason}`;
        flower.style.left = `${Math.random() * window.innerWidth}px`;
        
        // Create petals
        for(let i = 0; i < 5; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.transform = `rotate(${i * 72}deg)`;
            flower.appendChild(petal);
        }

        const center = document.createElement('div');
        center.className = 'flower-center';
        flower.appendChild(center);

        document.body.appendChild(flower);

        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }

    changeSeason(season) {
        if (this.flowerTypes.includes(season)) {
            this.currentSeason = season;
        }
    }

    createFlowerBurst(x, y) {
        for(let i = 0; i < 8; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower flower-burst';
            flower.style.left = `${x}px`;
            flower.style.top = `${y}px`;
            flower.style.transform = `rotate(${i * 45}deg)`;
            document.body.appendChild(flower);

            flower.addEventListener('animationend', () => {
                flower.remove();
            });
        }
    }
}

// Character Animation Controller
class CharacterAnimation {
    constructor() {
        this.character = document.querySelector('.character');
        this.isWaving = false;
        this.setupEventListeners();
    }

    setupEventListeners() {
        if (this.character) {
            this.character.addEventListener('mouseenter', () => this.startHover());
            this.character.addEventListener('mouseleave', () => this.stopHover());
            this.character.addEventListener('click', () => this.onClick());
        }
    }

    startHover() {
        this.character.classList.add('character-hover');
    }

    stopHover() {
        this.character.classList.remove('character-hover');
    }

    onClick() {
        if (!this.isWaving) {
            this.wave();
        }
    }

    wave() {
        this.isWaving = true;
        this.character.classList.add('character-wave');
        setTimeout(() => {
            this.character.classList.remove('character-wave');
            this.isWaving = false;
        }, 2000);
    }

    setEmotion(emotion) {
        const emotions = ['happy', 'surprised'];
        emotions.forEach(e => this.character.classList.remove(`character-${e}`));
        if (emotions.includes(emotion)) {
            this.character.classList.add(`character-${emotion}`);
            setTimeout(() => {
                this.character.classList.remove(`character-${emotion}`);
            }, 500);
        }
    }

    startIdle() {
        this.character.classList.add('character-idle');
    }

    stopIdle() {
        this.character.classList.remove('character-idle');
    }
}

// Initialize animations
const flowerAnimation = new FlowerAnimation();
const characterAnimation = new CharacterAnimation();

// Create flowers periodically
setInterval(() => {
    flowerAnimation.createFlower();
}, 2000);

// Export for use in other files
export { flowerAnimation, characterAnimation };
