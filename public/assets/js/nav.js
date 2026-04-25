//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");
const serviceMenu = document.querySelector("#navigation .dropdown");
const serviceToggle = document.querySelector("#navigation .dropdown .dropdown-toggle");
const about = document.querySelector('#About\\ Us');
const contact = document.querySelector('#Contact');
const faqs = document.querySelector('#FAQs');
const partners = document.querySelector('#Partners\\ \\&\\ Vendors');
const careers = document.querySelector('#Careers');

const mobileMQ = window.matchMedia('(max-width: 1023px)');
const isMobile = () => mobileMQ.matches;

function setNavItemsDisplay(display) {
    about.style.display = display;
    contact.style.display = display;
    faqs.style.display = display;
    partners.style.display = display;
    careers.style.display = display;
}

hamburgerMenu.addEventListener('click', function () {
    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
        hamburgerMenu.setAttribute("aria-expanded", true);
        hamburgerMenu.classList.add("clicked");
        navbarMenu.classList.add("open");
    } else {
        hamburgerMenu.setAttribute("aria-expanded", false);
        hamburgerMenu.classList.remove("clicked");
        navbarMenu.classList.remove("open");
        serviceMenu.setAttribute("aria-expanded", false);
        serviceMenu.classList.remove("open");
        if (isMobile()) {
            setNavItemsDisplay('block');
        }
    }
});

serviceToggle.addEventListener('click', function (e) {
    if (!isMobile()) return;
    e.preventDefault();
    const isServiceOpen = serviceMenu.classList.contains("open");
    if (!isServiceOpen) {
        serviceMenu.setAttribute("aria-expanded", true);
        serviceMenu.classList.add("open");
        setNavItemsDisplay('none');
    } else {
        serviceMenu.setAttribute("aria-expanded", false);
        serviceMenu.classList.remove("open");
        setNavItemsDisplay('block');
    }
});