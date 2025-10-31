//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");
const serviceMenu = document.querySelector("#navigation .dropdown");
const about = document.querySelector('#About\\ Us');
const contact = document.querySelector('#Contact');
const faqs = document.querySelector('#FAQs');
const partners = document.querySelector('#Partners\\ \\&\\ Vendors');
const careers = document.querySelector('#Careers');

const screenWidth = window.screen.width;

// Helper to show/hide all relevant plain nav items for mobile
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
        if (screenWidth < 770) {
            // Reveal all nav links when closing the menu
            setNavItemsDisplay('block');
        }
    }
});

serviceMenu.addEventListener('click', function (e) {
    // For accessibility, only toggle dropdown and nav links on mobile
    if (screenWidth < 770) {
        e.preventDefault(); // prevent link default behavior on mobile
    }
    const isServiceOpen = serviceMenu.classList.contains("open");
    if (!isServiceOpen) {
        serviceMenu.setAttribute("aria-expanded", true);
        serviceMenu.classList.add("open");
        if (screenWidth < 770) {
            // Hide all other nav links when dropdown is open
            setNavItemsDisplay('none');
        }
    } else {
        serviceMenu.setAttribute("aria-expanded", false);
        serviceMenu.classList.remove("open");
        if (screenWidth < 770) {
            // Reveal all links when dropdown closes
            setNavItemsDisplay('block');
        }
    }
});