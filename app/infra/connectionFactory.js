var mysql = require('mysql');

 function createDBConnection(){

   if(!process.env.NODE_ENV){
      return mysql.createConnection({
            host : 'localhost',
            port : 3310,
            user : 'root',
            password : 'root',
            database : 'casadocodigo_nodejs'
          });
    }

    if(process.env.NODE_ENV == test){
       return mysql.createConnection({
             host : 'localhost',
             port : 3310,
             user : 'root',
             password : 'root',
             database : 'casadocodigo_nodejs_test'
           });
     }
}
//wrapper - EMBRULHA A CONEXAO
module.exports = function(){
    return createDBConnection;
}
