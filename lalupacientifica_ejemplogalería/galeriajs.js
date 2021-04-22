console.log("galería en construcción");
let indiceImagen = 0;
function sumarIndice (n){
    indiceImagen = indiceImagen + n;
    mostrarImagenes();
   }
function mostrarImagenes (){
    //Traer a JS los contenedores de imágenes
    let imagenes = document.getElementsByClassName ("imagen");
    let puntos = document.getElementsByClassName ("punto");
    //Poner display = none en todos los contenedores de imágenes
    for (let i = 0; i < imagenes.length; i ++){
        imagenes [i] .style.display = "none";
    }
    for (let i = 0; i < puntos.length; i ++){
        puntos [i] .style.backgroundColor = "#bbb";
    }
    //sí indiceImagen es mayor que el número de imagenes mostramos la última
    if (indiceImagen>=imagenes.length){
       indiceImagen=imagenes.length-1;
       //indiceImagen=0;
    }
    if (indiceImagen<0){
        indiceImagen=0;
        //indiceImagen=imagenes.length-1;
    }
    console.log(indiceImagen);
    //Poner display = block en el contenedor de imagen seleccionado
    imagenes [indiceImagen] .style.display = "block";
    puntos [indiceImagen] .style.backgroundColor = "#717171";
}
function seleccionarIndice (n){
    indiceImagen=n-1;
    mostrarImagenes();
}
mostrarImagenes ();
