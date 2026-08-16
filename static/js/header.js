(function () {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const hideAfter = 120;
    let lastY = window.scrollY;

    const update = () => {
        const y = window.scrollY;
        if (y < hideAfter) {
            header.classList.remove("is-hidden");
        } else if (y > lastY) {
            header.classList.add("is-hidden");
        } else if (y < lastY) {
            header.classList.remove("is-hidden");
        }
        lastY = y;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
})();