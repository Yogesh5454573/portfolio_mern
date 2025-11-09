import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import infoRoutes from "./routes/infoRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/info", infoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`);
});
