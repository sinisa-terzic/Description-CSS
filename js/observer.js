///////////////////////////////////////////////////////////
// add scrill activa class in navbar
const options = {
    root: null,
    rootMargin: '-35% 0px',
    threshold: 0
};

const callback = (entries) => {
    entries.forEach((entry) => {
        const name = entry.target.dataset.section;
        const links = document.querySelectorAll(`.link[name="${name}"]`);

        if (entry.isIntersecting) {
            links.forEach(link => {
                link.classList.add('active-brd');
            });
        } else {
            links.forEach(link => {
                link.classList.remove('active-brd');
            });
        }
    });
};

const observer = new IntersectionObserver(callback, options);

document.querySelectorAll('section.rules').forEach((elem) => {
    observer.observe(elem);
});