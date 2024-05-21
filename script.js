
for (let i = 0; i < 16; i++) {
            
    let container = document.createElement("container");
    document.body.appendChild(container);

    for (let i = 0; i < 16; i++) {

            let div = document.createElement("div");
            container.appendChild(div);
        }

}
    

let div2 = document.querySelector("div");
div2.addEventListener("mouseenter", () => {
    div2.style.backgroundColor = "red";
});


div2.removeEventListener("mouseenter", () => {
    div2.style.backgroundColor = "red";
});