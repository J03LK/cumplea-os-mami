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

    // Mostrar elementos con animación mejorada
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // Solo desconectamos el observer si el elemento no necesita volver a animarse
                if (!entry.target.classList.contains("floating") &&
                    !entry.target.classList.contains("sparkling")) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px"
    });

    fadeInElements.forEach(el => observer.observe(el));

    // Control de audio mejorado
    const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("playPause");
    const stopButton = document.getElementById("stopAudio");

    // Función para actualizar el estado visual de los botones
    const updateButtonStates = () => {
        playPauseButton.innerHTML = audio.paused ?
            "▶️ Reproducir" :
            "⏸️ Pausar";

        playPauseButton.classList.toggle("from-pink-600", !audio.paused);
        playPauseButton.classList.toggle("to-rose-600", !audio.paused);
    };

    playPauseButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updateButtonStates();
    });

    stopButton.addEventListener("click", () => {
        audio.pause();
        audio.currentTime = 0;
        updateButtonStates();
    });

    // Actualizar estado inicial de los botones
    updateButtonStates();

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
