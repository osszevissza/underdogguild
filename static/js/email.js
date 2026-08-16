function decode(base64) {
    return new TextDecoder().decode(
        Uint8Array.from(atob(base64), c => c.charCodeAt(0))
    );
}

(function () {
    const user = decode("aGVsbG8=");
    const domain = decode("YmFyc2ltYXJpbmEuaHU=");

    const email = `${user}@${domain}`;

    document.querySelectorAll("[data-js-email]").forEach((el) => {
        if (el.tagName === "A") {
            el.href = `mailto:${email}`;
        }
        el.textContent = email;
    });
})();