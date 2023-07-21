function scrollToUp() {
    let mobileMenuTop = document.querySelector(".mobile-menu__top");
    let eScroll = 196;

    window.addEventListener("scroll", (evt) => {
        if (scrollY >= eScroll ) {
            mobileMenuTop.classList.add("white-mobile-menu")
        } else {
            mobileMenuTop.classList.remove("white-mobile-menu")
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    scrollToUp();
});

