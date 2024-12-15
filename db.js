const sqlite3 = require("sqlite3").verbose();

const dbParties = new sqlite3.Database("./data/database.db", (err) =>{
    if(err){
        console.log("error");
    }else {
        console.log("ok");
    }

});

const dbPokemons = new sqlite3.Database("./data/pokemon.db", (err) =>{
    if(err){
        console.log("error");
    }else {
        console.log("ok");
    }

});

dbParties.serialize(()=>{
    dbParties.run("CREATE TABLE IF NOT EXISTS parties(id INTEGER PRIMARY KEY, name TEXT, pok0 INTEGER,pok1 INTEGER,pok2 INTEGER,pok3 INTEGER,pok4 INTEGER,pok5 INTEGER)");
});

dbPokemons.serialize(()=>{
    dbPokemons.run("CREATE TABLE IF NOT EXISTS pokemon(id INTEGER PRIMARY KEY, name TEXT, type1 TEXT, type2 TEXT, totalStats INTEGER, isFinal BOOLEAN)");
});


module.exports = {dbParties, dbPokemons};