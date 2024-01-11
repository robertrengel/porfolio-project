import "./style.css";
import "normalize.css"


window.addEventListener("load", function() {
    ajustarContenedor()
})

window.addEventListener('resize', function() {
    ajustarContenedor();
});



function ajustarContenedor() {
    // var contenedor = document.getElementById('miContenedor');
    var logoTitle = document.getElementById("logotitle")
    var banner = document.querySelector(".banner")
    var bannerStyle = window.getComputedStyle(banner)
    console.log(logoTitle.width + 4)
    console.log(bannerStyle.paddingBottom)
    // var anchoPantalla = window.innerWidth;

    if (logoTitle.width == 480) {
        console.log("padding mayor ")
        banner.style.paddingBottom = '500px';
    } else {
        banner.style.paddingBottom = '52.2%';
        console.log("padding menor de 480")
    }
}

// Llama a la función al cargar la página
// ajustarContenedor();

// var miImagen = document.getElementById('miImagen');

//         miImagen.addEventListener('load', function() {
//             var anchoImagen = this.width;
//             var altoImagen = this.height;

//             console.log('Ancho de la imagen:', anchoImagen, 'px');
//             console.log('Alto de la imagen:', altoImagen, 'px');
//         });



// console.log(logoTitle.width)