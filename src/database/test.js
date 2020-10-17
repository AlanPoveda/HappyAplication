const db = require('./db');
const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    //Inserir dados na tabela
    /*await saveOrphanage(db, {
        lat: "-23.5762796" ,
        lng: "-46.6665123",
        name: "Lar dos meninos",
        about: "Presta assistência para criançãs de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"9773248",
        
        images:[
            "https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar" ,
        opening_hours: "Horário de visita das 8 ás 19 horas",
        open_on_weekends: "0"
    })*/

    //consultar dados da tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    // consultar somente um orfanato pelo ID

    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"') 
    //console.log(orphanage)

    //Mesmo deletando, o ID não vai ser o mesmo!!! nunca volta
    // Deletando dados da tabela
    // Deletar tudo DELETE FROM orphanages já vai deletar tudo
    console.log(await db.run('DELETE FROM orphanages'))


})