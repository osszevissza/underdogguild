/* ---------------------------------------------------------
   POST GALLERY LIGHTBOX

   Progressive enhancement, not a dependency: every thumbnail is
   a real <a> pointing at the image file, so with JS unavailable
   (or broken) the thumbnail still opens the picture on its own.
   With JS we take over the click and show it in a native
   <dialog> instead — the browser then handles the top layer,
   the inert background, focus trapping, Esc-to-close and
   returning focus to the thumbnail we came from.

   Images are grouped by the gallery they sit in, so the arrows
   walk that gallery's own set. A lone image (e.g. an inset in
   the running text) is a set of one, and its arrows stay hidden
   rather than dragging the reader into an unrelated gallery.

   Stepping is announced twice over, on purpose:
     - the visible bar shows the short figcaption label, which is
       a visual caption and nothing more, so it is aria-hidden;
     - a visually hidden role="status" announces the image's full
       alt text plus the position, because "3 / 4" on its own
       never says what the picture is.
   Without the second one a screen reader user pressing Next
   would hear the position change and nothing about the image.

   The thumbnail and the enlarged view use the same file, so
   stepping through a set costs no extra requests.
   --------------------------------------------------------- */

(function () {
    "use strict";

    var dialog = document.querySelector("[data-lightbox]");

    /* no dialog markup, or no <dialog> support: leave the links alone */
    if (!dialog || typeof dialog.showModal !== "function") {
        return;
    }

    var dialogImg = dialog.querySelector("[data-lightbox-img]");
    var dialogCaption = dialog.querySelector("[data-lightbox-caption]");
    var dialogStatus = dialog.querySelector("[data-lightbox-status]");
    var closeButton = dialog.querySelector("[data-lightbox-close]");
    var prevButton = dialog.querySelector("[data-lightbox-prev]");
    var nextButton = dialog.querySelector("[data-lightbox-next]");

    /* set membership: keyed on the <ul>, or on the link itself when
       the image is not part of a gallery */
    var sets = new Map();

    function setFor(link) {
        var key = link.closest("ul.post-gallery") || link;
        if (!sets.has(key)) {
            sets.set(key, []);
        }
        var members = sets.get(key);
        if (members.indexOf(link) === -1) {
            members.push(link);
        }
        return members;
    }

    /* the short visible label, when the figure carries one */
    function captionOf(link) {
        var figure = link.closest("figure");
        var caption = figure ? figure.querySelector("figcaption") : null;
        return caption ? caption.textContent.trim() : "";
    }

    var members = [];
    var index = 0;

    function show(i) {
        if (!members.length) {
            return;
        }

        /* wrap around, so the arrows never dead-end */
        index = ((i % members.length) + members.length) % members.length;

        var link = members[index];
        var thumb = link.querySelector("img");
        var alt = thumb ? thumb.alt : "";

        if (thumb && dialogImg) {
            dialogImg.src = thumb.currentSrc || thumb.src;
            dialogImg.alt = alt;
        }

        /* a lone image needs no "1 / 1" */
        var position = members.length > 1
            ? (index + 1) + " / " + members.length
            : "";

        /* visible caption — a label, hidden from assistive tech so the
           fuller announcement below is not read out twice */
        if (dialogCaption) {
            dialogCaption.textContent = [captionOf(link) || alt, position]
                .filter(Boolean)
                .join(" · ");
        }

        /* announced caption — the actual description of the picture */
        if (dialogStatus) {
            dialogStatus.textContent = [alt, position]
                .filter(Boolean)
                .join(" · ");
        }

        var many = members.length > 1;
        if (prevButton) {
            prevButton.hidden = !many;
        }
        if (nextButton) {
            nextButton.hidden = !many;
        }
    }

    Array.prototype.forEach.call(
        document.querySelectorAll("a.js-lightbox"),
        function (link) {
            link.setAttribute("aria-haspopup", "dialog");
            setFor(link);

            link.addEventListener("click", function (event) {
                /* let modified and middle clicks open the file as usual */
                if (
                    event.button !== 0 ||
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey
                ) {
                    return;
                }

                if (!link.querySelector("img") || !dialogImg) {
                    return;
                }

                event.preventDefault();

                members = setFor(link);
                show(members.indexOf(link));

                dialog.showModal();
                /* land on the dialog itself, so a screen reader announces
                   the dialog and its contents rather than the first button */
                dialog.focus();
            });
        }
    );

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            show(index - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            show(index + 1);
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            dialog.close();
        });
    }

    dialog.addEventListener("keydown", function (event) {
        if (members.length < 2) {
            return;
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            show(index - 1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            show(index + 1);
        }
    });

    /* a click that lands on the dialog itself is a backdrop click */
    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    /* drop the image once closed so a hidden dialog holds nothing */
    dialog.addEventListener("close", function () {
        members = [];

        if (!dialogImg) {
            return;
        }
        dialogImg.removeAttribute("src");
        dialogImg.alt = "";
    });
})();
