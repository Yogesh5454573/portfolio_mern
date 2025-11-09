import express from "express";
import {addInfo,getAllInfo,getInfoById,updateInfo,deleteInfo } from "../controllers/infoController.js";
const router = express.Router();
router.post("/add", addInfo); 
router.get("/all", getAllInfo); 
router.get("/:id", getInfoById);
router.put("/update/:id", updateInfo); 
router.delete("/delete/:id", deleteInfo); 

export default router;
