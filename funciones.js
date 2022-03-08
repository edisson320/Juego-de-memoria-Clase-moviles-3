


document.addEventListener("DOMContentLoaded", function(){

    //***Imagenes para la funcion***
    let imagenes = [
        {img:"imagens/ReyLeon.jpg", 
        name:"ReyLeon" },
        {img:"imagens/Pumba.jpg", 
        name:"Pumba" },
        {img:"imagens/RafikiChaman.png", 
        name:"Chaman" },
        {img:"imagens/leona.jpg", 
        name:"leona" },
        {img:"imagens/Timon.png", 
        name:"Timon" },
        {img:"imagens/TioMalo.jfif", 
        name:"TioMalo" },

        {img:"imagens/ReyLeon.jpg", 
        name:"ReyLeon" },
        {img:"imagens/Pumba.jpg", 
        name:"Pumba" },
        {img:"imagens/RafikiChaman.png", 
        name:"Chaman" },
        {img:"imagens/leona.jpg", 
        name:"leona" },
        {img:"imagens/Timon.png", 
        name:"Timon" },
        {img:"imagens/TioMalo.jfif", 
        name:"TioMalo" } 
    ]

   //***Seleccionar  tablero de HTML***
    let tablero = document.querySelector(".tablero");
    //Arreglos para guarda el nombre de las imagenes y el ID de las imagenes 
    let imgElegida = [];
    let imgElegidaID= [];

    const aciertos = document.querySelector(".conteo");
    const conteo = [];

    //***Funcion para colorear las imagenes en el HTML o llenar tablero***

    imagenes.sort(()=>0.5 - Math.random());
    function crearTablero(){

        for (let i = 0; i < imagenes.length; i++) {
            var img = document.createElement("img");
            img.setAttribute("data-id", i);
            img.setAttribute("src","imagens/pregunta.jpg");
            img.setAttribute("width","200px");
            //img.setAttribute("high","100px")
            tablero.appendChild(img);
            img.addEventListener("click", descubrirImagen)
        }
    }
    //Funtio para descubrir una imagen
    function descubrirImagen(){
        let imgClick = this.getAttribute("data-id");
        imgElegida.push(imagenes[imgClick].name);
        imgElegidaID.push(imgClick);
        this.setAttribute("src",imagenes[imgClick].img)

        if(imgElegida.length === 2){
            setTimeout(compararImagenes, 300);
        }
    }

    //Todas las imagenes
   
    //Funcion Para Comparar las Imagenes
    function compararImagenes(){
        let todasLasImg = document.querySelectorAll("img");
        let opcion1 = imgElegidaID[0];
        let opcion2 = imgElegidaID[1];
        
        if(opcion1==opcion2){           //alert("Acertste");
            todasLasImg[opcion1].setAttribute("src","imagens/pregunta.jpg");
            todasLasImg[opcion2].setAttribute("src","imagens/pregunta.jpg");
            alert('Hey! estas dandole click a la misma carta')

        }else if(imgElegida[0]===imgElegida[1]){
            alert('Encontraste un par, ¡Acertaste!')
            
            //Para el conteo de haciertos
            todasLasImg[opcion1].setAttribute("src","imagens/acierto.jfif");
            todasLasImg[opcion2].setAttribute("src","imagens/acierto.jfif");

            //Para Bloquera cuando se quiere repetir
            todasLasImg[opcion1].removeEventListener('click', descubrirImagen)
            todasLasImg[opcion2].removeEventListener('click', descubrirImagen)
            conteo.push(imgElegida)

        }else{
            todasLasImg[opcion1].setAttribute("src","imagens/pregunta.jpg");
            todasLasImg[opcion2].setAttribute("src","imagens/pregunta.jpg");
            alert('intenta de nuevo')
        }
        //Volver a Llenar el arreglo 
        imgElegida = [];
        imgElegidaID = [];
        aciertos.textContent = conteo.length;
        if(conteo.length === imagenes.length/2){
            aciertos.textContent = "Ganaste";
        }
    }

    //Ejecutar funcion del tablero
    crearTablero();

})