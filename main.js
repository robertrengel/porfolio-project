import "./style.css";
import "normalize.css"



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

    if (bannerStyle.paddingBottom > 480) {
        banner.style.paddingBottom = '480';
    } else {
        banner.style.paddingBottom = '50.5%';
    }
}

// Llama a la función al cargar la página
ajustarContenedor();

// var miImagen = document.getElementById('miImagen');

//         miImagen.addEventListener('load', function() {
//             var anchoImagen = this.width;
//             var altoImagen = this.height;

//             console.log('Ancho de la imagen:', anchoImagen, 'px');
//             console.log('Alto de la imagen:', altoImagen, 'px');
//         });



// console.log(logoTitle.width)