const sketches = document.querySelectorAll(".sketch");
const page = document.querySelector(".page");

sketches.forEach(sketch => {

    sketch.addEventListener("click", () => {

        const rect = sketch.getBoundingClientRect();
        const pageRect = page.getBoundingClientRect();

        const fragmentClasses = ["f1", "f2", "f3", "f4"];

        fragmentClasses.forEach(fragmentClass => {

            const frag = document.createElement("div");

            frag.classList.add("fragment");
            frag.classList.add(fragmentClass);

            frag.style.width = rect.width + "px";
            frag.style.height = rect.height + "px";

            frag.style.left = (rect.left - pageRect.left) + "px";
            frag.style.top = (rect.top - pageRect.top) + "px";

            frag.style.backgroundImage = `url(${sketch.src})`;
            frag.style.backgroundSize = `${rect.width}px ${rect.height}px`;
            frag.style.backgroundPosition = "center";

            page.appendChild(frag);

            // random landing position
            setTimeout(() => {

                const randomX =
                    Math.random() * (page.offsetWidth - rect.width);

                const randomY =
                    Math.random() * (page.offsetHeight - rect.height);

                const rotate =
                    Math.random() * 50 - 25;

                frag.style.transform =
                    `translate(
                        ${randomX - (rect.left - pageRect.left)}px,
                        ${randomY - (rect.top - pageRect.top)}px
                    )
                    rotate(${rotate}deg)`;

            }, 20);

        });

        // hide original image
        sketch.style.display = "none";

    });

});