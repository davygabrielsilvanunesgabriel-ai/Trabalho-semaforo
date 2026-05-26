const lights = document.querySelectorAll('.luzes-circulo');

let currentLight = 0;

function trafficLight() {

    // desliga todas
    lights.forEach((light) => {
        light.style.opacity = "0.3";
    });

    // liga a luz atual
    lights[currentLight].style.opacity = "1";

    // próxima luz
    currentLight++;

    // reinicia ciclo
    if (currentLight > 2) {
        currentLight = 0;
    }
}

// inicia
trafficLight();

// velocidade
setInterval(trafficLight, 2500);
