function scrollToUp() {
    let mobileMenuTop = document.querySelector(".mobile-menu__top");
    let eScroll = 196;
    let path = window.location.href.toString().split(window.location.host)[1];

    window.addEventListener("scroll", (evt) => {
        if (path === "/") {
            mobileMenuTop.classList.add("red-mobile-menu")
        }
        if (scrollY >= eScroll || path !== "/") {
            mobileMenuTop.classList.add("white-mobile-menu")
        } else {
            mobileMenuTop.classList.remove("white-mobile-menu");
            mobileMenuTop.classList.add("red-mobile-menu")
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    scrollToUp();
});

