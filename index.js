ScrollReveal().reveal('#imgBox',{
    duration: 1500,
    distance: '150%',
    origin: 'right',
    opacity: null
});
//menu toggle

function toggleMenu() {
    var menuToggle = document.querySelector('.menuToggle');
    var nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}
