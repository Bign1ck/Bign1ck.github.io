/*------------------Toggle Menu--------------------------------*/
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick  = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*------------------scroll active--------------------------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <offset + height) {
            navLinks.foreach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').
                classList.add('active')
            });
        };
    });

    /*-------------Sticky Navbar-------------------*/

    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);


    /*-------------remove toggle icon and navbar-------------------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*------------scroll react-------------------*/
ScrollReveal ({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.homeContent, .heading', { origin: 'top' });
ScrollReveal().reveal('.myImage, .worksContainer, .portBox, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.homeContent h1, .myImage', { origin: 'left' });
ScrollReveal().reveal('.homeContent p , .aboutContent', { origin: 'right' });

/*------------typing animation-------------------*/

const typed = new Typed('.multiple-text',{
    strings: ['Nicholas Tee','Nicholas Tee'],
    typeSpeed: 110,
    backSpeed: 75,
    backDelay: 1000,
    loop: true
});

var tablinks = document.getElementsByClassName("tab-links")
        var tabcontents = document.getElementsByClassName("tab-contents")
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link")
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        };
