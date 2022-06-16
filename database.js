var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "Milarqui",
    password: "Zandu17Iomedae&"
})

con.connect(function(err){
    if(err) throw err
    console.log("Connected")
    con.query("CREATE DATABASE cinque", function(err,result){
        if(err) throw err;
        console.log("Database")
    })
})