const botonPersonaje = document.querySelector('#person');
const botonPlaneta = document.querySelector('#planet');
const oculto = document.querySelector('#containerLabel');
const ocultarImg = document.querySelector('#containerImg');
const mostrarContainer = document.querySelector('#mainContainer');
const mostrarPersonajeLabel = document.querySelector ('#personajeLabelContainer');
const mostrarPlanetaLabel = document.querySelector('#planetaLabelContainer');

const mostrarPerson = () => {
    ocultarImg.setAttribute('class', 'invisible');
    mostrarContainer.setAttribute('class', 'visible');
    mostrarPlanetaLabel.setAttribute('class', 'invisible');
    mostrarPersonajeLabel.setAttribute('class', 'visible');
    personajes();
}

const mostrarPlanet = () => {
    ocultarImg.setAttribute('class', 'invisible');
    mostrarContainer.setAttribute('class', 'visible');
    mostrarPersonajeLabel.setAttribute('class', 'invisible');
    mostrarPlanetaLabel.setAttribute('class', 'visible');
    planets();
}

botonPersonaje.addEventListener('click', mostrarPerson);
botonPlaneta.addEventListener('click', mostrarPlanet);