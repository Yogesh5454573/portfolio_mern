import express from "express";
import {addInfo, getAllInfo,  updateInfo, deleteInfo} from "../controllers/infoController.js";
 
const router = express.Router();

router.post("/", addInfo);
router.get("/", getAllInfo);
router.put("/:id", updateInfo);
router.delete("/:id", deleteInfo);

export default router;
