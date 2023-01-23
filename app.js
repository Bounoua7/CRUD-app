const express = require("express");
const mongoose = require('mongoose');

const recette= require("./model/recettes");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express()
app.use(express.static("public/img"));
app.use(express.static("public/css"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

//routes de la page home
app.get('/', function(req, res) {
    res.render("index.ejs")
    });

app.get('/home', function(req, res) {
        res.render("index.ejs")
        });

//Route de la page about
app.get('/about', function(req, res) {
        res.render("about.ejs")
        });



    //Route pour la Page Ajouter recette-----------------------------
app.get("/recettes", function (req, res) {
    recette.find({},(err,recettes)=>{
        res.render('table.ejs',{Recipe:recettes})
    })

});

//Post route pour ajouter une recette

app.post('/recettes', (req,res)=>
 {
    let newRecette = new recette({
       nom :req.body.nom,
       ingredients: req.body.ingredients,
       description: req.body.description,
       categorie: req.body.categorie
     });
     newRecette.save((error)=>{
        if(error){
    
        }else{
            res.redirect("/recettes");
        }
       })
    
 });



//Route get de: delete recette
app.get('/deleterecette/:id', async (req, res) => {
    try{
        await recette.findByIdAndDelete({_id: req.params.id});
        res.redirect("/recettes");
        
            } catch(err) {
              res.send(err);
            }
           
               
            
          });

//Route pour modifier les donnes de l element selectonné ,cette route derige vers une page edit qui contient les données à modifer
app.get('/editrecette/:id', (req, res) => {
   
    recette.findById({_id: req.params.id},(err,recette)=>{
        if(err) {
            console.log(err)
        }
        else{
            res.render('editRec.ejs',{
                recette:recette
            })
        } 
    })
});

//Route(POST) pour modifier les donnes de l element selectonné ,les mettre à jour
app.post('/update/:id', (req, res) => {
     
    recette.findByIdAndUpdate({_id : req.params.id}, {
        nom :req.body.nom,
        ingredients: req.body.ingredients,
        description: req.body.description,
        categorie: req.body.categorie
    }, (err) => {
      if(err) {
        console.log(err);
        res.status(500).send("Erreur de mettre à jour la recette");
      } else {
        res.redirect("/recettes");
      }
    });
  });




app.listen(4000, () => {
     console.log("Server is Running")
     })