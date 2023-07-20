function scrollToUp() {
    window.addEventListener("scroll", () => {
        let mobileMenuTop = document.querySelector(".mobile-menu__top");
        let mainSelector = document.querySelector("main")
        if (mainSelector.scrollTop < 196) {
          mobileMenuTop.style.background = "#ffffff"
        } else {
            mobileMenuTop.style.background = "#F43636";
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    scrollToUp();
})

