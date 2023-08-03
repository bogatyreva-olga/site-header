function scrollToUp() {
    let mobileMenuTop = document.querySelector(".mobile-menu__top");
    let eScroll = 196;
    let path = window.location.href.toString().split(window.location.host)[1];

    window.addEventListener("scroll", (evt) => {
            if (path === "/") {
                mobileMenuTop.classList.add("red-mobile-menu")
                if (scrollY >= eScroll) {
                    mobileMenuTop.classList.remove("red-mobile-menu")
                    mobileMenuTop.classList.add("white-mobile-menu")
                } else {
                    mobileMenuTop.classList.add("red-mobile-menu")
                    mobileMenuTop.classList.remove("white-mobile-menu")
                }
            } else {
                mobileMenuTop.classList.add("white-mobile-menu")
            }
        }
    )
}

let removeRedClass = () => {
    let mobileMenuTop = document.querySelector(".mobile-menu__top");
    let path = window.location.href.toString().split(window.location.host)[1];
    let main = document.querySelector("main");
    if (path !== "/") {
        mobileMenuTop.classList.add("white-mobile-menu");
        main.classList.add("color-red")
    }
}

document.addEventListener('DOMContentLoaded', () => {
    scrollToUp();
    removeRedClass()
});


