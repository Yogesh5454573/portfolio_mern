import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import infoRoutes from "./routes/infoRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

connectDB();

app.use("/api/info", infoRoutes); // main info CRUD routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
