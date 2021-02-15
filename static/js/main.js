const showExperiences = () => {
    document.querySelectorAll('.experience').forEach(e => {
        if (window.scrollY + window.innerHeight / 2 > e.getBoundingClientRect().top)
            e.classList.add('visible');
    });
}

window.addEventListener('load', showExperiences);
window.addEventListener('scroll', showExperiences);

async function getPuppy() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    document.querySelector(".pupper").setAttribute("src", data.message);
}

const isMobile = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
const mobile = isMobile();
