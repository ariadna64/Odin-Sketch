
for (let i = 0; i < 16; i++) {
            
    let container = document.createElement("container");
    document.body.appendChild(container);

    for (let i = 0; i < 16; i++) {

            let div = document.createElement("div");
            container.appendChild(div);
        }

}
    

let div2 = document.querySelectorAll("div");

    for (let i = 0; i < div2.length; i++) {
        evento(div2[i], i);
    };
    
function evento(a,b) {

    div2.addEventListener("mouseenter", () => {
        div2.style.backgroundColor = "red";
    });

    div2.addEventListener("mouseleave", () => {
        div2.style.backgroundColor = "";
    });

}