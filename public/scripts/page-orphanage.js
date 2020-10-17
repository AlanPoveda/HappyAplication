
// Para não mexer no mapa, ficar estático

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,

}



//Parte do mapa aqui 
const map = L.map('mapid', options).setView([-23.5762796,-46.6665123], 16);

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




// Fazer a sua localização do mapa 
L.marker([-23.5762796,-46.6665123], { icon })
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
