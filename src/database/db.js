//Assincrono

const Database = require('sqlite-async');



//Assim ele espera para carregar o banco
function execute(db) {
    
    //Criando tabela
     return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );

    `)
}

//Pegar o objeto com a tabela dentro 
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);