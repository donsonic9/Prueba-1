
// En este js vamos a poner todo el JS del image slider;

// primero ponemos las imagenes en un array:
let images = [
    "http://www.sololearn.com/uploads/slider/1.jpg",
    "http://www.sololearn.com/uploads/slider/2.jpg",
    "http://www.sololearn.com/uploads/slider/3.jpg"
];

// Ahora armamos las funciones:
let num = 0;

function next() {
    let slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
} 

function prev() {
    let slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

// la variable "num" retiene la imagen actual. Los clicks en los botons "next" y "prev" son manejados por sus correspondientes funciones, las cuales cambian el origen de la imagen al siguiente/ anterior en el arreglo.

