//Precisa oir bno Pakage.json o "start":"nodemon rsc/server.js" após intalação do nodemon
//Lembrar de fazer essa etapa 
// O site esta na porta http://127.0.0.1:5500/ da minha máquina


//Importar dependencia ou pacotes
const express = require('express')

//Parra não confundir /\. Isto é do próprio express
const path = require('path')

//Importar o objeto pages

const pages = require('./pages.js')

//Iniciando o express
const server = express()

//Utilizando os arquivos estáticos
server

    // Utilizar body da requisição
    .use(express.urlencoded({ extended: true }))

    .use(express.static('public'))
    //Agora ir para o index e tirar o public da requisição

    // Configurar template engine 

    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //Criar uma rota e request é uma requisição do servidor, e o response e ume resposta que da o servido para você
    .get('/', pages.index) 

    //Rotas da aplicação
    .get('/', pages.index) 
    .get('/orphanage', pages.orphanage) 
    .get('/orphanages', pages.orphanages) 
    .get('/create-orphanage', pages.createOrphanage) // Colocou em Mayuscula para subtituir a '-' 
    .post('/save-orphanage', pages.saveOrphanage)

//Ligar servidor

server.listen(5500)








