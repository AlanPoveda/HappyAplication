
// Para não mexer no mapa, ficar estático

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,

}

// Pegando valores para centralizar no mapa pegos do html

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


//Parte do mapa aqui 
const map = L.map('mapid', options).setView([ lat, lng], 15);

// Criando e adicionando tilelayer
// Mapa gratuíto disponível
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
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




// Fazer a sua localização do mapa 


L
.marker([lat, lng], { icon })
.addTo(map)

 // Image galery

 function selectImage(event){
    const button = event.currentTarget

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
      button.classList.remove("active")
    }

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container da imagem
    imageContainer.src = image.src

    // Adicionar a classe .active para o novo botão
    button.classList.add('active')
 }
