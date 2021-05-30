const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get(['/','/index'], function(req, res){
    var obj={
        nom:"modou",
        age:31
    }
    res.render('index',obj);
})

app.get(['/','/personnages'], function(req, res){
    var personnages ={
        prenom :"Lamine",
        nom :"Diop",
        age : 50,
        sexe: "Masculin",
    }
    res.render('personnages',personnages);
})
app.listen(9090, function(){
    console.log("Mon serveur écoute le port 9090 !")
})