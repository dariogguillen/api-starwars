const personajes = () =>{

    const request = new XMLHttpRequest();

    const container = document.querySelector('#container');
    const personaje = document.querySelector('#personaje');

    const images =[
        '../img/personajes/luke.jpg',
        '../img/personajes/C3PO.jpg',
        '../img/personajes/r2-d2.jpg',
        '../img/personajes/Darth Vader.jpeg',
        '../img/personajes/Leia Organa.jpeg',
        '../img/personajes/Owen Lars.jpg',
        '../img/personajes/Beru Whitesun lars.webp',
        '../img/personajes/R5-D4.jpg',
        '../img/personajes/Biggs Darklighter.webp',
        '../img/personajes/Obi-Wan Kenobi.jpg'
    ];

    const person = {
        person0: 'Luke_Skywalker',
        person2: 'R2_D2',
        person1: 'C_3PO',
        person3: 'Darth_Vader',
        person4: 'Leia_Organa',
        person5: 'Owen_Lars',
        person6: 'Beru_Whitesun_Lars',
        person7: 'R5_D4',
        person8: 'Biggs_Darklighter',
        person9: 'Obi_Wan_Kenobi',
    };

    const setCard = (json) =>{
        const card = (json, i) => {
            let card = `
            <div class='carta card${[i]}'>
                <div class='info'>
                    <h2>Nombre del Personaje: <span>${json.results[i].name}</span></h2>
                    <p class='genero'>Genero: <span>${json.results[i].gender}</span></p>
                    <p class='nacimiento'>Nacimiento: <span>${json.results[i].birth_year}</span></p>
                    <p class='altura'>Altura: <span>${json.results[i].height} cm</span></p>
                    <p class='peso'>Peso: <span>${json.results[i].mass} kg</span></p>
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

        if ( personaje.value == person.person0 ) {
            removeCard();
            card(json, 0);
        } else if (personaje.value == person.person1) {
            removeCard();
            card(json, 1);
        } else if (personaje.value == person.person2) {
            removeCard();
            card(json, 2);
        } else if (personaje.value == person.person3) {
            removeCard();
            card(json, 3);
        } else if (personaje.value == person.person4) {
            removeCard();
            card(json, 4);
        } else if (personaje.value == person.person5) {
            removeCard();
            card(json, 5);
        } else if (personaje.value == person.person6) {
            removeCard();
            card(json, 6);
        } else if (personaje.value == person.person7) {
            removeCard();
            card(json, 7);
        } else if (personaje.value == person.person8) {
            removeCard();
            card(json, 8);
        } else if (personaje.value == person.person9) {
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
    request.open('GET', 'https://swapi.co/api/people/');
    request.send();
    
    personaje.addEventListener('change', star);
}