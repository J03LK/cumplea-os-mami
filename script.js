document.addEventListener("DOMContentLoaded", () => {
    // Crear efecto de estrellas brillantes
    const sparklesContainer = document.getElementById('sparkles');
    const numberOfSparkles = 50;

    for (let i = 0; i < numberOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.width = Math.random() * 4 + 'px';
        sparkle.style.height = sparkle.style.width;
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparklesContainer.appendChild(sparkle);
    }

    // Función para añadir efecto de parallax al fondo
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.body.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });

    // Reproducir audio automáticamente
    const audio = document.getElementById("audio");
    
    // Intentar reproducir el audio tan pronto como sea posible
    const playAudio = async () => {
        try {
            await audio.play();
            audio.volume = 0.5; // Volumen al 50%
        } catch (error) {
            console.log('Error al reproducir el audio:', error);
        }
    };

    playAudio();

    // Intentar reproducir el audio cuando el usuario interactúe con la página
    document.addEventListener('click', () => {
        playAudio();
    }, { once: true });

    // Efecto de confeti al cargar la página
    const duration = 15 * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Generar confeti en posiciones aleatorias
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            })
        );
    }, 250);
});
