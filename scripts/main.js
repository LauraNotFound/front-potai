document.addEventListener('DOMContentLoaded', function () {
    var iniciar = document.querySelector('.iniciar-sesion');
    if (iniciar) {
        iniciar.addEventListener('click', function () {
            window.location.href = '/html/dashboard.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var iniciar = document.querySelector('.crear-cuenta');
    if (iniciar) {
        iniciar.addEventListener('click', function () {
            window.location.href = '/html/registro.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var iniciar = document.querySelector('.ya-tienes-cuenta');
    if (iniciar) {
        iniciar.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var iniciar = document.querySelector('.registrarse');
    if (iniciar) {
        iniciar.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var iniciar = document.querySelector('.agregar-maceta-btn');
    if (iniciar) {
        iniciar.addEventListener('click', function () {
            window.location.href = 'registrar-macetas.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var iniciar = document.querySelector('.guardar-potai');
    if (iniciar) {
        iniciar.addEventListener('click', function () {
            window.location.href = 'dashboard.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var iniciar = document.querySelector('.card-maceta');
    if (iniciar) {
        iniciar.addEventListener('click', function () {
            window.location.href = 'historico.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var iniciar = document.querySelector('.edit-button');
    if (iniciar) {
        iniciar.addEventListener('click', function () {
            window.location.href = 'modificar-macetas.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var iniciar = document.querySelector('.back-button');
    if (iniciar) {
        iniciar.addEventListener('click', function () {
            window.location.href = 'dashboard.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var userIcon = document.querySelector('.icon-person-dashboard');
    var modal = document.getElementById('userModal');
    var modalCloseBtn = document.getElementById('modalClose');
    var btnClose = document.getElementById('btnClose');
    var btnLogout = document.getElementById('btnLogout');

    function openModal() {
        if (modal) modal.classList.add('open');
        if (modal) modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        if (modal) modal.classList.remove('open');
        if (modal) modal.setAttribute('aria-hidden', 'true');
    }

    if (userIcon) {
        userIcon.addEventListener('click', function () {
            openModal();
        });
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (btnClose) btnClose.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeModal();
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    }
});