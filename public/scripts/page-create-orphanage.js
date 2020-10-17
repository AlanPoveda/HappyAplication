

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

// Criando marcador

let marker;


//Criando e adicionando o mapa 
map.on('click', (event) =>{

    //Pegando a latitude e a longitude
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // Guardar essa informação para uma variável

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icone, para não ficar adicionando infinitamente

    marker && map.removeLayer(marker)

    // Adicionando o icone no mapa 
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

} )


// Adicionar o campo de fotos

function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar container para duplicar .new-image

    const fieldsContainer  = document.querySelectorAll('.new-upload')
    // realizar um clone da ultima imagem adicionada

    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

    //Se estiver vazio. não adicionar 

    const input = newFieldContainer.children[0]

    if(input.value == ''){
        return 
    }

    //Limpar o campo
    input.value = ''

    //Adicionar o clone no container de #images

    container.appendChild(newFieldContainer)




}

function deleteField(event){

    const span = event.currentTarget

    const fieldsContainer  = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1){
        // Limpar o valor do campo
        span.parentNode.children[0].value = ''

        return
        //Return vazio faz com que não seja executada a ação

    }

    // Deletar o valor do campo

    span.parentNode.remove()// Node parent, pega o que esta encima dele 


}

//Troca do botão sim e do não 


function toggleSelect(event){ 

    //Retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
    //Retirando active com function simplificada
    .forEach(button => button.classList.remove('active'))

    //Colocar a .class .active no botão selecionado 
    const button = event.currentTarget
    button.classList.add('active')


    //Atualizar o input hidden com o valor selcionado

    const input = document.querySelector('[name = "open_on_weekends"]')

    // verificar se sim ou não 

    input.value = button.dataset.value 


}

//Ver se a validação está correta para continuar com aplicação 

function validate(event){
    const needsLatAndLng = true 

    //Validar se lat e long estão preenchidos
    if ( needsLatAndLng == true)
    event.preventDefault()
    alert("Selecione um ponto no mapa")
}













