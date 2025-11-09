import Info from "../models/infoModel.js";

export const addInfo = async (req, res) => {
  try {
    const newInfo = new Info(req.body);
    const savedInfo = await newInfo.save();
    res.status(201).json(savedInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllInfo = async (req, res) => {
  try {
    const info = await Info.find();
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInfoById = async (req, res) => {
  try {
    const info = await Info.findById(req.params.id);
    if (!info) return res.status(404).json({ message: "Info not found" });
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateInfo = async (req, res) => {
  try {
    const updated = await Info.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Info updated successfully", updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteInfo = async (req, res) => {
  try {
    await Info.findByIdAndDelete(req.params.id);
    res.json({ message: "Info deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
