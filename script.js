
// SQUARES CREATION

for (let i = 0; i < 16; i++) {
            
    let container = document.createElement("container");
    document.body.appendChild(container);

    for (let i = 0; i < 16; i++) {

            let div = document.createElement("div");
            container.appendChild(div);
        }

}

// DIV LIST AND HOVER

let div2 = document.querySelectorAll("div");

for (const div of div2) {
    
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "grey";
        });
    
};

