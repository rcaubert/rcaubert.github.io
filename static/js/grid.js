const mobile = isMobile();
const getProjects = (data, tag) => {
    let ret;
    ret = data.map(d => {
        let rObj;
        if ((tag === d.tag1 || tag === d.tag2 || tag === d.tag3 || tag === d.tag4 || tag === d.tag5) === true) {
            rObj = d;
        } else {
            rObj = false;
        }
        return rObj;
    });
    return (ret);
}

const getTags = (obj) => {
    let tags;
    if (obj.tag1.length > 0) {
        tags = `${obj.tag1} `;
    }
    if (obj.tag2.length > 0) {
        tags += `${obj.tag2} `;
    }
    if (obj.tag3.length > 0) {
        tags += `${obj.tag3} `;
    }
    if (obj.tag4.length > 0) {
        tags += `${obj.tag4} `;
    }
    if (obj.tag5.length > 0) {
        tags += `${obj.tag5}`;
    }
    return (tags);
}

const makeGrid = (projects) => {
    const grid = document.querySelector('.projects-list');
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    projects.forEach(d => {
        if (d !== false) {
            const tags = getTags(d);
            if (mobile === true) {
                grid.innerHTML += `<div class="project" id="${d.id}" class="hide">
                                            <article class="project-preview">
                                                <img src="static/img/${d.image}"/>
                                                <div class="cache"></div>
                                                <div class="info">
                                                    <h2 class="project-title">${d.title}</h2>
                                                        <h3 class="project-publisher">${d.publisher}</h3>
                                                        <p class="project-meta">
                                                            ${tags}
                                                        </p>
                                                        <a href="projects/${d.href}" class="link">
                                                            <button class="btn btn-dark project-btn">More</button>
                                                        </a>
                                                </div>
                                            </article>
                                    </div>`;
            } else {
                grid.innerHTML += `<div class="project" id="${d.id}" class="hide">
                                        <a href="projects/${d.href}">
                                            <article class="project-preview">
                                                <img src="static/img/${d.image}"/>
                                                <div class="cache"></div>
                                                <div class="info">
                                                    <h2 class="project-title">${d.title}</h2>
                                                        <h3 class="project-publisher">${d.publisher}</h3>
                                                        <span class="project-meta">
                                                            ${tags}
                                                        </span>
                                                </div>
                                            </article>
                                        </a>
                                    </div>`;
            }
        }
    });
}
makeGrid(data);

document.getElementById("All").onclick = () => {
    makeGrid(data);
}

document.getElementById("JavaScript").onclick = () => {
    const projects = getProjects(data, document.getElementById("JavaScript").id);
    makeGrid(projects);
}

document.getElementById("D3").onclick = () => {
    const projects = getProjects(data, document.getElementById("D3").id);
    makeGrid(projects);
}

document.getElementById("Python").onclick = () => {
    const projects = getProjects(data, document.getElementById("Python").id);
    makeGrid(projects);
}

document.getElementById("Spreadsheets").onclick = () => {
    const projects = getProjects(data, document.getElementById("Spreadsheets").id);
    makeGrid(projects);
}

document.getElementById("Reporting").onclick = () => {
    const projects = getProjects(data, document.getElementById("Reporting").id);
    makeGrid(projects);
}

document.getElementById("Django").onclick = () => {
    const projects = getProjects(data, document.getElementById("Django").id);
    makeGrid(projects);
}
