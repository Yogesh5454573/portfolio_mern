import express from "express";
import {
  addInfo,
  getAllInfo,
  getInfoByToken,
  updateInfoByToken,
  deleteInfoByToken,
} from "../controllers/infoController.js";

const router = express.Router();

router.post("/add", addInfo); // Create
router.get("/all", getAllInfo); // Get all
router.get("/getInfo/:token", getInfoByToken); // Get by token
router.put("/update/:token", updateInfoByToken); // Update by token
router.delete("/delete/:token", deleteInfoByToken); // Delete by token

export default router;
