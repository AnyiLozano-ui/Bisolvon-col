// Lógica de control de vidas y bloqueo para index04-Col.html
(() => {
    // --- Lógica para index04-Col.html ---
    if (window.location.pathname.endsWith('index04-Col.html')) {
        const LIVES_KEY = 'lives';
        const lives = localStorage.getItem(LIVES_KEY);
        if (lives == null || +lives === 0 || +lives === 1 || +lives === 2 || +lives === 3) {
            localStorage.setItem(LIVES_KEY, 3);
        }
        return;
    }

    // --- Lógica para index05-Col.html, index06-Col.html, index07-Col.html ---
    const validPages = ['index05-Col.html', 'index06-Col.html', 'index07-Col.html'];
    if (validPages.some(page => window.location.pathname.endsWith(page))) {
        const LIVES_KEY = 'lives';
        const lives = +localStorage.getItem(LIVES_KEY);
        if (lives === 0) {
            window.location.replace('index04-Col.html');
            return;
        }

        // Mostrar vidas detrás de modal/modal1
        function showVidasBehindModal() {
            const vidas = [
                document.querySelector('.vida1'),
                document.querySelector('.vida2'),
                document.querySelector('.vida3')
            ];
            const modal = document.querySelector('.modal');
            const modal1 = document.querySelector('.modal1');
            const isModalVisible = modal && getComputedStyle(modal).display === 'block';
            const isModal1Visible = modal1 && getComputedStyle(modal1).display === 'block';
            if (isModalVisible || isModal1Visible) {
                vidas.forEach(vida => {
                    if (vida) vida.style.visibility = 'visible';
                });
            } else {
                vidas.forEach(vida => {
                    if (vida) vida.style.visibility = '';
                });
            }
        }

        // Observar cambios en display de modal/modal1
        function observeModalDisplay() {
            const modals = [document.querySelector('.modal'), document.querySelector('.modal1')];
            modals.forEach(modal => {
                if (!modal) return;
                const observer = new MutationObserver(showVidasBehindModal);
                observer.observe(modal, { attributes: true, attributeFilter: ['style'] });
            });
        }
        observeModalDisplay();
        showVidasBehindModal();

        // Sonidos y lógica de clicks
        const sonidoCorrecta = new Audio('./images/correcta.mp3');
        const sonidoIncorrecta = new Audio('./images/incorrecta.mp3');

        // Click en .buena
        const buena = document.querySelector('.buena');
        const modal1 = document.querySelector('.modal1');
        if (buena) {
            buena.addEventListener('click', () => {
                sonidoCorrecta.currentTime = 0;
                sonidoCorrecta.play();
                buena.style.opacity = '1';
                setTimeout(() => {
                    if (modal1) modal1.style.display = 'block';
                    
                }, 2000);
            });
        }

        // Función para restar vida y ocultar la vida correspondiente
        function restarVidaYActualizar() {
            let lives = +localStorage.getItem(LIVES_KEY);
            if (lives > 0) {
                lives -= 1;
                localStorage.setItem(LIVES_KEY, lives);
                // Ocultar la vida correspondiente
                const vida = document.querySelector('.vida' + (lives + 1));
                if (vida) vida.style.opacity = '0';
            }
        }

        // Mostrar .modal y restar vida al hacer click en mal
        const malClases = Array.from(document.querySelectorAll('[class*="mal"]'));
        const modal = document.querySelector('.modal');
        malClases.forEach(mal => {
            mal.addEventListener('click', () => {
                sonidoIncorrecta.currentTime = 0;
                sonidoIncorrecta.play();
                mal.style.opacity = '1';
                setTimeout(() => {
                    if (modal) {
                        modal.style.display = 'block';
                        restarVidaYActualizar();

                        // Redirección al cerrar modal
                        const closeModal = document.querySelector('.closeModal');
                        if (closeModal) {
                            closeModal.addEventListener('click', () => {
                                const path = window.location.pathname;
                                let nextPage = '';
                                let lives = +localStorage.getItem(LIVES_KEY);
                                if (path.endsWith('index05-Col.html')) {
                                    nextPage = 'index06-Col.html';
                                } else if (path.endsWith('index06-Col.html')) {
                                    nextPage = 'index07-Col.html';
                                } else if (path.endsWith('index07-Col.html')) {
                                    if (lives < 2) {
                                        nextPage = 'index11-Col.html';
                                    } else {
                                        nextPage = 'index13-Col.html';
                                    }
                                }
                                if (nextPage) window.location.replace(nextPage);
                            });
                        }
                    }
                }, 2000);
            });
        });

        // // Cronómetro para #tiempo
        const tiempoElem = document.getElementById('tiempo');
        if (tiempoElem) {
            let tiempo = +tiempoElem.textContent;
            const interval = setInterval(() => {
                if (tiempo > 0) {
                    tiempo--;
                    tiempoElem.textContent = tiempo;
                } else {
                    if (modal) {
                        modal.style.display = 'block';
                        restarVidaYActualizar();

                        // Redirección al cerrar modal
                        const closeModal = document.querySelector('.closeModal');
                        if (closeModal) {
                            closeModal.addEventListener('click', () => {
                                const path = window.location.pathname;
                                let nextPage = '';
                                let lives = +localStorage.getItem(LIVES_KEY);
                                if (path.endsWith('index05-Col.html')) {
                                    nextPage = 'index06-Col.html';
                                } else if (path.endsWith('index06-Col.html')) {
                                    nextPage = 'index07-Col.html';
                                } else if (path.endsWith('index07-Col.html')) {
                                    if (lives < 2) {
                                        nextPage = 'index11-Col.html';
                                    } else {
                                        nextPage = 'index13-Col.html';
                                    }
                                }
                                if (nextPage) window.location.replace(nextPage);
                            });
                        }
                    }
                    clearInterval(interval);
                }
            }, 1000);
        }
        const path = window.location.pathname;
        if (path.endsWith('index07-Col.html')) {
            document.querySelector('.next').addEventListener('click', () => {
                let nextPage = '';
                let lives = +localStorage.getItem(LIVES_KEY);

                if (lives < 2) {
                    nextPage = 'index11-Col.html';
                } else {
                    nextPage = 'index13-Col.html';
                }

                if (nextPage) window.location.replace(nextPage);
            })
        }

        // Mostrar vidas según el valor de lives al cargar la vista
        function mostrarVidasPorLives() {
            const vidas = [
                document.querySelector('.vida1'),
                document.querySelector('.vida2'),
                document.querySelector('.vida3')
            ];
            const livesActual = +localStorage.getItem(LIVES_KEY);
            vidas.forEach((vida, i) => {
                if (vida) vida.style.opacity = (livesActual > i) ? '1' : '0';
            });
        }
        mostrarVidasPorLives();

        return;
    }
})();
