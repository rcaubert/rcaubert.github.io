const showExperiences = () => {
    document.querySelectorAll('.experience').forEach(e => {
        if (window.scrollY + window.innerHeight / 2 > e.getBoundingClientRect().top)
            e.classList.add('visible');
        // else
        // 	e.classList.remove('visible');
    });
}

window.addEventListener('load', showExperiences);
window.addEventListener('scroll', showExperiences);

/*async function getPuppy() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    document.querySelector("img").setAttribute("src", data.message);
}
getPuppy();*/
