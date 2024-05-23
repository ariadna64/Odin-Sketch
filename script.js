//NEW GRID

let button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Squares";
button.addEventListener("click", () => {
    newGrid = window.prompt("Squares per side?: ");
    
    if (newGrid < 100) {
        const contenedores = document.querySelectorAll("container");
    
     for (const contenedor of contenedores) {
         contenedor.remove();
        }

        for (let i = 0; i < newGrid; i++) {
            
         let container = document.createElement("container");
         document.body.appendChild(container);
    
            for (let i = 0; i < newGrid; i++) {
    
                let div = document.createElement("div");
                container.appendChild(div);
             }
    
        }

        let div2 = document.querySelectorAll("div");

         for (const div of div2) {
    
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "grey";
            });
    
        };

    }
    
    

});



// FIRST GRID

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



