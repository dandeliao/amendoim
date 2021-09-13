let listaFades = document.body.getElementsByClassName("fade");

function transicao(fades) {
    let pageBottom = window.pageYOffset + window.innerHeight;    
    for (let elemento of fades) {
        let ybottom = elemento.getBoundingClientRect().bottom + window.pageYOffset;
        console.log("bolinha", elemento);
        console.log("pageBottom", pageBottom);
        console.log("ybottom", ybottom);
        if (pageBottom > ybottom + 0) {
            elemento.classList.add("visible");
            console.log("add");
        } else {
            elemento.classList.remove("visible");
            console.log("remove");
        }
    }
}

window.addEventListener("load", () => {
    transicao(listaFades);
});

window.addEventListener("scroll", () => {
    transicao(listaFades);
});