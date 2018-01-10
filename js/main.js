const request = new XMLHttpRequest();
const container = document.querySelector('#container');
//let containerDiv = document.createElement('div');

let images =[
    'https://vignette.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest/scale-to-width-down/350?cb=20091030151422',
    'https://images-na.ssl-images-amazon.com/images/I/814YRV0Y8ML._SY679_.jpg',
    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5863/5863603_sd.jpg;maxHeight=640;maxWidth=550',
    'http://pictures.ozy.com/pictures/900x900/2/9/8/92298_darthvaderf.jpg',
    'http://3.bp.blogspot.com/--Oxg0f8Ypoo/VXG-vx1wrxI/AAAAAAAAC1M/zC9hJO88rQI/s1600/leia-princess-leia-organa-solo-skywalker-9301324-449-661.jpg',
    'https://vignette.wikia.nocookie.net/headhuntersholosuite/images/5/5e/Owen_Lars_001.jpg/revision/latest?cb=20100305172555',
    'https://vignette.wikia.nocookie.net/headhuntersholosuite/images/1/17/Beru_Lars_001.jpg/revision/latest?cb=20100317024358',
    'http://darksidetoy.com/image/cache/data/1%20BY%20BRAND/SIDESHOW/R5%20D4%20Sixth%20Scale%20Figure/F-700x700.jpg',
    'https://vignette.wikia.nocookie.net/swfanon/images/5/57/BiggsDarklighter.jpg/revision/latest?cb=20120324222406',
    'https://nerdist.com/wp-content/uploads/2017/12/download.jpg'
];

const setCard = (json) =>{
    console.log(json.results);

    for (let i = 0; i < json.results.length; i++) {

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
        containerDiv.setAttribute('class', 'card')
        container.appendChild(containerDiv);
        containerDiv.innerHTML = card;
    }
}

const star = () => {
    if (request.status == 200) {
        console.log('esta bien');
        let json = JSON.parse(request.responseText);
        setCard(json)
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
