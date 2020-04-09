window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("togglenav", window.scrollY > 0);
})