document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menu = document.querySelector('.header-nav')
const menuOpen = document.querySelector('.button-menu-open')
const menuClose = document.querySelector('.button-menu-close')

menuOpen.addEventListener('click', ()=>{
    menu.classList.add('active-menu')
})
menuClose.addEventListener('click', ()=>{
    menu.classList.remove('active-menu')
})

var splide = new Splide('.splide', {
    type: 'fade',
    rewind: true,
    autoplay: 'playing'
});

splide.mount();