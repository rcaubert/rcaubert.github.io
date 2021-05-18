const makeContent = () => {
    const container = document.querySelector(".make-content");
    const id = document.querySelector(".make-content").id;
    let project;
    data.forEach(d => {
        if (d.id === id) {
            project = d;
        }
    });
    if (project.title.length > 0) {
        container.innerHTML +=
        `<div class="row d-flex justify-content-center">
            <h1 class="title">${project.title}</h1>
        </div>`;
    }
    if (project.video.length > 0) {
        container.innerHTML +=
        `<div class="ratio ratio-16x9">
            <video class="video" muted playsinline loop autoplay>
                <source src="../../static/vid/${project.video}" type="video/mp4">
                <p>Sorry, your browser does not support videos.</p>
            </video>
        </div>`;
    } else if (project.image.length > 0) {
        container.innerHTML +=
        `<img class="mx-auto d-block illustration" src="../../static/img/${project.image}"/>`;
    }
    if (project.content.length > 0) {
        container.innerHTML +=
        `<div class="row content d-flex justify-content-center">
            <div class="col-11 col-md-6">${project.content}</div>
        </div>`;
    }
    if (project.article_link.length > 0) {
        container.innerHTML +=
        `<div class="row content d-flex justify-content-center">
            <div class="col-11 col-md-6">
                <p>You can check out the full project by <a href="${project.article_link}" target="blank" class="link">clicking here</a>.</p>
            </div>
        </div>`;
    }
    container.innerHTML +=
    `<div class="row content d-flex justify-content-center">
        <div class="col-11 col-md-6">
            <a href="../../index.html"><button type="button" class="btn btn-dark my-btn">Back</button></a>
        </div>
    </div>`;
}

window.addEventListener('load', makeContent);
