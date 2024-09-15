document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los elementos necesarios para los modales
    const services = document.querySelectorAll('.service');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Función para abrir un modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
        }
    }

    // Función para cerrar un modal
    function closeModal(modal) {
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Manejar el clic en los servicios para abrir el modal correspondiente
    services.forEach(service => {
        service.addEventListener('click', function () {
            const modalId = service.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Manejar el clic en los botones de cerrar
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            closeModal(button.closest('.modal'));
        });
    });

    // Manejar el clic fuera del contenido del modal para cerrarlo
    window.addEventListener('click', function (event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Manejar el scroll para el efecto del header
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scroll hacia abajo
            document.body.classList.add('scrolled-down');
            document.body.classList.remove('scrolled-up');
        } else {
            // Scroll hacia arriba
            document.body.classList.add('scrolled-up');
            document.body.classList.remove('scrolled-down');
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para evitar que el valor sea negativo
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var productCards = document.querySelectorAll('.product-card');

    productCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Elimina la clase active de todas las tarjetas
            productCards.forEach(function(c) {
                if (c !== card) {
                    c.classList.remove('active');
                }
            });
            // Alterna la clase active en la tarjeta clickeada
            card.classList.toggle('active');
        });
    });
});
