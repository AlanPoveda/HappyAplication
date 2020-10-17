
//Parte do mapa aqui 
const map = L.map('mapid').setView([-23.5762796,-46.6665123], 16);

// Criando e adicionando tilelayer
// Mapa grauíto disponível
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
 .addTo(map)

// criando icone 

const icon = L.icon({
    //Peagando a imagem do ícone
    iconUrl: "/images/map-marker.svg",
    // Tamanho do ícone 
    iconSize: [58, 68],
    //Aonde ele vai estar
    iconAnchor: [29,68],
    //Para o popup ficar ao lado 
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}){
    //Criando o popup

    const popup = L.popup({
        //Para não aparecer o Button
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"><img src="/images/arrow-white.svg"> </a>`)



    // Fazer a sua localização do mapa 
    L.marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span =>{
    //Preenchendo as informações para addmarker
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng

    }

    addMarker(orphanage)
})

