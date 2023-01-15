import express from "express";
import {getRecettes, createRecette, getRecette, deleteRecette, updateRecette} from "../controllers/recette"

const router = express.Router();

router.get("/recettes", getRecettes);
router.post("/recette", createRecette);
router.get("/recette/:id", getRecette,);
router.delete("/recette/:id", deleteRecette);
router.put("/recette/:id", updateRecette);


export default router;
