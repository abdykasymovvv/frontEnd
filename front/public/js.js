const header = document.querySelector('#header');

let scrollPos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (scrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100%";
    }
    scrollPos = currentScrollPos;
}