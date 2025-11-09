import mongoose from "mongoose";

const infoSchema = new mongoose.Schema(
  {
    name: 
      { 
        type: String, 
        required: true
      },
    email: 
      { 
        type: String,
        required: true
      },
    phone:
      { 
        type: String, 
        required: true 
        
      },
    message:
     { 
      type: String 
     },
  },
  { 
    timestamps: true 
  }
);

const Info = mongoose.model("Info", infoSchema);
export default Info;
