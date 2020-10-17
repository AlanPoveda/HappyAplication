//Importando as aplicaçãoes para o banco de dados
const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');



module.exports = {

    index(request, response){
        return response.render('index')
    },

    async orphanage(request,response){

        const id = request.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]

            //Transformando as imagens em uma array, pois esta em formato string
            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            // Criando condição para retornar se estará aberto aos finais de semana ou não
            if(orphanage.open_on_weekends == 0){
                orphanage.open_on_weekends = false
            }else{
                orphanage.open_on_weekends = true
            }

            
            return response.render('orphanage', {orphanage})
        } catch (error) {
            console.log(error)
            return response.send('<h1>Erro no bando de dados</h1>')
        }
        return response.render('orphanage')
    },

    async orphanages(request, response){
        
        try{
            
            const db = await Database
            const orphanages = await db.all("SELECT * FROM orphanages")
            //Colocar o orphanage pelo banco
            return response.render('orphanages', { orphanages })

        } catch(error){
            console.log(error)
            return response.send('<h1>Erro no banco de dados</h1>')
        }
    },

    createOrphanage(request, response){
        return response.render('create-orphanage')
    },

    async saveOrphanage(request, response){
        const fields = request.body

        //Verificar se os campos não estão vazios
        if(Object.values(fields).includes('')){
            return response.send('Todos os campos devem ser preenchidos')
        }

        try {
            // Salvando o orfanato 
            const db = await Database
            await saveOrphanage(db, {
                lat : fields.lat,
                lng : fields.lng,
                name : fields.name,
                about : fields.about,
                whatsapp : fields.whatsapp,
                images : fields.images.toString(),
                instructions : fields.instructions,
                opening_hours : fields.opening_hours,
                open_on_weekends : fields.open_on_weekends,
            })
            // Redirecionamento 
            return response.redirect('/orphanages')

        } catch (error) {
            console.log(error)
            return response.send("Erro no banco de dados")
        }


        

    }



}