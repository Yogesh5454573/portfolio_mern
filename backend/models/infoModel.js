import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

const infoSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4(),
    unique: true
  },
  token: {
    type: String,
    default: () => crypto.randomBytes(16).toString("hex"), 
    unique: true
  },
  name: String,
  email: String,
  phone: String,
  message: String
}, 
{ 
  timestamps: true 
});

export default mongoose.model("Info", infoSchema);
