var mysql = require('mysql');

 function createDBConnection(){
    return mysql.createConnection({
            host : 'localhost',
            port : 3310,
            user : 'root',
            password : 'root',
            database : 'casadocodigo_nodejs'
    })
}
//wrapper - EMBRULHA A CONEXAO
module.exports = function(){
    return createDBConnection;
}
