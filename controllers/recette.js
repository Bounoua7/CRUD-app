import { v4 as uuid} from "uuid";

let recettes = [];

export const getRecettes= (req, res) => {
    res.send(recettes);
};

export const createRecette= (req, res) => {
    const recette= req.body;
    recettes.push({...recette, id: uuid()});
    res.send("Recipe added successefuly");
};

export const getRecette= (req,res) => {
    const singleRecette= recettes.filter((recette) => recette.id === req.params.id);
    res.send(singleRecette);
};

export const deleteRecette= (req,res) => {
    recettes=recettes.filter((user) => recette.id !== req.params.id);
    res.send("Recipe deleted successefuly");    
};

export const updateRecette=(req,res) => {
    const recette =recettes.find((recette) => recette.id === req.params.id);
    recette.name= req.body.name;
    recette.description= req.body.description;
    recette.ingrédients= req.body.ingrédients;
    recette.categorie= req.body.categoris;

    res.send("Recipe updated successefuly");
}