document.addEventListener('scroll', mostrarNavBar);

let boton1 = document.getElementById("boton-1-sobremi");
let boton2 = document.getElementById("boton-2-sobremi");
boton1.addEventListener("click", mostrarContenido);
boton2.addEventListener("click", mostrarContenido);
let contenido = document.getElementById("contenido");
let contenido2 = document.getElementById("contenido2");

function mostrarNavBar() {
    let navbar = document.getElementById('navbar');

    if (window.scrollY > 100) {
        navbar.classList.remove('hidden');
        navbar.classList.add('mostrar');
    } else {
        navbar.classList.remove('mostrar');
        navbar.classList.add('hidden');
    }
}


function mostrarContenido(e) {

    if (e.target.id == "boton-1-sobremi") {
        let content = "<p> Estoy a punto de completar mi formación como Técnico Superior en Desarrollo Web (DAW), y mi pasión por la programación y la resolución de problemas es lo que me impulsa cada día.Conmi juventud y energía, estoy listo para aportar perspectivas frescas y una ética de trabajosólda a tu equipo.</p > "
        contenido.innerHTML = content;
        let content2 = "<p> Me emociona la idea de contribuir con entusiasmo, adaptabilidad y uncompromiso firme con la excelencia.Estoy ansioso por ser parte de un entorno que fomente la innovación y el crecimiento, y estoy seguro de que puedo aportar mucho valor con mishabilidades y dedicación.</p >"
        contenido2.innerHTML = content2;
    } else if (e.target.id == "boton-2-sobremi") {
        contenido.innerHTML = "<p>I'm about to complete my training as a Higher Technician in Web Development (DAW), and my passion for programming and problem-solving is what drives me every day. With my youth and energy, I'm ready to bring fresh perspectives and a strong work ethic to your team. </p>";

        contenido2.innerHTML = "<p>I'm excited about the idea of contributing with enthusiasm, adaptability, and a firm commitment to excellence. I'm eager to be part of an environment that fosters innovation and growth, and I'm confident that I can bring a lot of value with my skills and dedication.</p>"


    }


}

document.addEventListener("DOMContentLoaded", function () {
    var wrap = document.querySelector('.wrap');
    var text = wrap.textContent;
    var letters = text.split('');
    var wrappedText = '';

    for (var i = 0; i < letters.length; i++) {
        wrappedText += '<span style="display: inline-block; opacity: 0; transform: translateX(100%); transition: opacity 0.3s, transform 0.3s;">' + letters[i] + '</span>';
    }

    wrap.innerHTML = wrappedText;

    var spans = document.querySelectorAll('.wrap span');
    var index = 0;

    function showLetter() {
        if (index < spans.length) {
            spans[index].style.opacity = 1;
            spans[index].style.transform = 'translateX(0)';
            index++;
            setTimeout(showLetter, 100);
        } else {

            index = 0;
            setTimeout(hideLetter, 1000);
        }
    }

    function hideLetter() {
        if (index < spans.length) {
            spans[index].style.opacity = 0;
            spans[index].style.transform = 'translateX(-100%)';
            index++;
            setTimeout(hideLetter, 100);
        } else {
            index = 0;
            setTimeout(showLetter, 1000);
        }
    }

    showLetter();
});




