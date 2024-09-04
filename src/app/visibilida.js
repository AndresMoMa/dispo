
        
        export function  seleccion(nivel)
        {
            const N1M=document.getElementById("N1M")
            const N2M=document.getElementById("N2M")
            const N3M=document.getElementById("N3M")
            const N4M=document.getElementById("N1M")
            if (nivel==1)
            {
                N1M.carta[i].classList.remove("dot");

            }
        }

    export function visibilidad() {
        const carta=document.getElementsByClassName("N1")
        for (let i = 0; i < carta.length; i++) {
            carta[i].classList.remove("autok");
            carta[i].classList.add("column");
        }
   
        
        
    }
    export function visibilidadb1(nivel){
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
 
