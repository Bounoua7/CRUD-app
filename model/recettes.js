
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
// Se connecter à la base de données
const mongoDB = "mongodb://127.0.0.1:27017/euromed";
mongoose.connect(mongoDB)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée'))

// Définir un nouveau schéma
const Schema = mongoose.Schema;
const recettesSchema =new Schema(
{
nom: {type: String, required: true},
ingredients: {type: String, required: true},
description:{type: String, required: true},
categorie:{type: String, required: true}

})

module.exports = mongoose.model("recettes", recettesSchema);
