const express =  require("express");
const app = express();
const path = require('path');


const {dbParties, dbPokemons} = require("./db")

const PORT = 3000;

app.use(express.json()); // Utilise express.json() pour parser les corps JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, "public", "html/index.html"));
});

app.listen(PORT, ()=>{
    console.log("ok");

});

app.get("/api/parties", (req,res) => {
    dbParties.all("SELECT * FROM parties;", [], (err,rows)=>{
        if(err){
            res.status(500).json({error:err.message});
        }else{
            res.json({parties:rows});
        }
    });
});

app.get("/api/pokemons", (req,res) => {
    dbPokemons.all("SELECT * FROM pokemon;", [], (err,rows)=>{
        if(err){
            res.status(500).json({error:err.message});
        }else{
            //console.log(rows);
            res.json({pokemon:rows});
        }
    });
});

app.post("/api/parties", (req,res)=>{
    const { userInput, pok0, pok1, pok2, pok3, pok4, pok5 } = req.body;
    const query = 'INSERT INTO parties (name, pok0, pok1, pok2, pok3, pok4, pok5) VALUES (?,?,?,?,?,?,?)';
    dbParties.run(query, [userInput, pok0, pok1, pok2, pok3, pok4, pok5], function (err) {
        if (err) {
            console.error('Erreur lors de l\'insertion :', err);
            return res.status(500).json({ error: 'Erreur lors de l\'insertion dans la base de données.' });
        }

        // Réponse de succès avec l'ID de la nouvelle entrée
        res.status(201).json({ id: this.lastID, message: 'Valeur insérée avec succès.' });
    });
});






