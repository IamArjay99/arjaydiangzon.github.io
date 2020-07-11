document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const sections = document.querySelectorAll("section");
    const home = document.querySelector("section#home");

    const headerObserverOptions = {
        root: null, // This is the viewport
        threshold: 0, // 1 - exact view, 0 - somewhere intersecting
        rootMargin: "-280px 0px 0px 0px", // margin
    };

    const headerObserver = new IntersectionObserver(
        (entries, headerObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    nav.classList.add("nav-scrolled");
                } else {
                    nav.classList.remove("nav-scrolled");
                }
            });
        },
        headerObserverOptions
    );

    const sectionObserverOptions = {
        root: null, // This is the viewport
        threshold: 0, // 1 - exact view, 0 - somewhere intersecting
        rootMargin: "-226px 0px -400px 0px", // margin
    };

    const sectionObserver = new IntersectionObserver(
        (entries, sectionObserver) => {
            entries.forEach((entry) => {
                const sectionClass = entry.target.classList[0];
                const navLink = document.querySelector(
                    "a[href='#" + sectionClass + "']"
                );
                if (navLink) {
                    if (entry.isIntersecting) {
                        navLink.classList.add("active");
                    } else {
                        navLink.classList.remove("active");
                    }
                }
            });
        },
        sectionObserverOptions
    );

    // This is for home section
    headerObserver.observe(home);
    // For links
    sections.forEach((section) => {
        sectionObserver.observe(section);
    });
});
