window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("togglenav", window.scrollY > 0);
})


const navSlide = () => {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('.ul-links');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        menuIcon.classList.toggle('toggle');
    });
}
navSlide();