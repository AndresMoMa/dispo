
export function seleccion(nivel) {
    console.log("2sad")
    const nivelMapping = {
        1: "N1M",
        2: "N2M",
        3: "N3M",
        4: "N4M"
    };

    // Get the element based on the selected level
    const allElements = ["N1M", "N2M", "N3M", "N4M"];

    // Loop through all elements
    allElements.forEach((elementId, index) => {
        const element = document.getElementById(elementId);
        if (element) {
            const dotElement = element.querySelector(".dot, .dots");

            // If it's the selected level, remove 'dot' and add 'dots'
            if (index + 1 === nivel) {
                if (dotElement) {
                    dotElement.classList.remove("dot");
                    dotElement.classList.add("dots");
                }
            } else {
                // For all other levels, remove 'dots' and add 'dot'
                if (dotElement) {
                    dotElement.classList.remove("dots");
                    dotElement.classList.add("dot");
                }
            }
        }
    });

    // Handle visibility toggling based on level
    const allLevels = ["N1", "N2", "N3", "N4"];
    allLevels.forEach((level, index) => {
        const elements = document.getElementsByClassName(level);
        for (let i = 0; i < elements.length; i++) {
            if (index + 1 === nivel) {
                elements[i].classList.add("column");
                elements[i].classList.remove("autok");
            } else {
                elements[i].classList.add("autok");
                elements[i].classList.remove("column");
            }
        }
    });
}
export function visibilidad() {
    const carta = document.getElementsByClassName("N1")
    for (let i = 0; i < carta.length; i++) {
        carta[i].classList.remove("autok");
        carta[i].classList.add("column");
    }



}
export function visibilidadb1(nivel) {
    if (nivel == "N1") {
        console.log("funciono");
        const n1Elements = document.getElementsByClassName("N1");
        const n2Elements = document.getElementsByClassName("N2");

        for (let i = 0; i < n1Elements.length; i++) {
            n1Elements[i].classList.remove("column");
            n1Elements[i].classList.add("autok");
        }

        for (let i = 0; i < n2Elements.length; i++) {
            n2Elements[i].classList.remove("autok");
            n2Elements[i].classList.add("column");
        }
    } else if (nivel == "N2") {
        const n2Elements = document.getElementsByClassName("N2");
        const n3Elements = document.getElementsByClassName("N3");

        for (let i = 0; i < n2Elements.length; i++) {
            n2Elements[i].classList.remove("column");
            n2Elements[i].classList.add("autok");
        }

        for (let i = 0; i < n3Elements.length; i++) {
            n3Elements[i].classList.remove("autok");
            n3Elements[i].classList.add("column");
        }
    } else if (nivel == "N3") {
        const n3Elements = document.getElementsByClassName("N3");
        const liderElements = document.getElementsByClassName("Lider de Servicio");

        for (let i = 0; i < n3Elements.length; i++) {
            n3Elements[i].classList.remove("column");
            n3Elements[i].classList.add("autok");
        }

        for (let i = 0; i < liderElements.length; i++) {
            liderElements[i].classList.remove("autok");
            liderElements[i].classList.add("column");
        }
    } else if (nivel == "Lider de Servicio") {
        const liderElements = document.getElementsByClassName("Lider de Servicio");
        const gerenteElements = document.getElementsByClassName("Gerente");

        for (let i = 0; i < liderElements.length; i++) {
            liderElements[i].classList.remove("column");
            liderElements[i].classList.add("autok");
        }

        for (let i = 0; i < gerenteElements.length; i++) {
            gerenteElements[i].classList.remove("autok");
            gerenteElements[i].classList.add("column");
        }
    }
}

