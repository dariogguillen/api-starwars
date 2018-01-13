const planets = () => {

    const request = new XMLHttpRequest();
    const container = document.querySelector('#container');
    const planet = document.querySelector('#planetas');

    const images = [
        '../img/planetas/Alderaan.webp',
        '../img/planetas/Yavin_IV.jpg',
        '../img/planetas/Hoth.jpg',
        '../img/planetas/Dagobah.png',
        '../img/planetas/Bespin.jpg',
        '../img/planetas/Endor.jpg',
        '../img/planetas/Naboo.jpg',
        '../img/planetas/Coruscant.jpg',
        '../img/planetas/Kamino.png',
        '../img/planetas/Geonosis.jpg'
    ];

    const planeta = {
        planeta0: 'Alderaan',
        planeta1: 'Yavin_IV',
        planeta2: 'Hoth',
        planeta3: 'Dagobah',
        planeta4: 'Bespin',
        planeta5: 'Endor',
        planeta6: 'Naboo',
        planeta7: 'Coruscant',
        planeta8: 'Kamino',
        planeta9: 'Geonosis',
    };

    const setCard = (json) => {
        const card = (json, i) => {
            let card = `
            <div class='carta card${[i]}'>
                <div class='info'>
                    <h2>Nombre del Planeta: <span>${json.results[i].name}</span></h2>
                    <p class='diametro'>Diametro: <span>${json.results[i].diameter}</span></p>
                    <p class='clima'>Clima: <span>${json.results[i].climate}</span></p>
                    <p class='gravedad'>Gravedad: <span>${json.results[i].gravity}</span></p>
                    <p class='poblacion'>Poblacion: <span>${json.results[i].population}</span></p>
                </div>
                <div class='image'>
                    <img src="${images[i]}"
                </div>
            </div>`;

            let containerDiv = document.createElement('div');
            containerDiv.setAttribute('class', 'card');
            container.appendChild(containerDiv);
            containerDiv.innerHTML = card;
        }

        const removeCard = () => {
            const selectCard = document.querySelectorAll('.card');
            let long = selectCard.length;
            for (let i = 0; i < long; i++) {
                container.removeChild(selectCard[i]);
            }
        }

        if (planet.value == planeta.planeta0) {
            removeCard();
            card(json, 0);
        } else if (planet.value == planeta.planeta1) {
            removeCard();
            card(json, 1);
        } else if (planet.value == planeta.planeta2) {
            removeCard();
            card(json, 2);
        } else if (planet.value == planeta.planeta3) {
            removeCard();
            card(json, 3);
        } else if (planet.value == planeta.planeta4) {
            removeCard();
            card(json, 4);
        } else if (planet.value == planeta.planeta5) {
            removeCard();
            card(json, 5);
        } else if (planet.value == planeta.planeta6) {
            removeCard();
            card(json, 6);
        } else if (planet.value == planeta.planeta7) {
            removeCard();
            card(json, 7);
        } else if (planet.value == planeta.planeta8) {
            removeCard();
            card(json, 8);
        } else if (planet.value == planeta.planeta9) {
            removeCard();
            card(json, 9);
        } else {
            removeCard();
            let long = json.results.length
            for (let i = 0; i < long; i++) {
                card(json, i)
            }
        }
    }

    const star = () => {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            setCard(json);
        } else {
            console.log('no esta bien');
        }
    }

    const starerror = () => {
        console.error(e);
    }

    request.onload = star;
    request.onerror = starerror;
    request.open('GET', 'https://swapi.co/api/planets/');
    request.send();

    planet.addEventListener('change', star);

}