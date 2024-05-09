const mysql = require('mysql');

const conn = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password :'',
    database : 'e-commerce',
    port:3306
});
conn.connect((err)=>{
    if(err){
        console.log("error");
    }else{
        console.log("connected");
    }
});

module.exports = conn;

// conn.query("select*from users", (err,result)=>{
//     console.log("result" , result);
// })