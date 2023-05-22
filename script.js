const container = document.querySelector('#container');


for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.className="cuadrado";
    container.append(div);

    //Agrega evento hover

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
}