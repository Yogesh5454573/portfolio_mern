import Info from "../models/infoModel.js";

export const addInfo = async (req, res) => {
  try {
    const info = new Info(req.body);
    await info.save();
    res.status(201).json(info);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllInfo = async (req, res) => {
  try {
    const infos = await Info.find();
    res.status(200).json(infos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateInfo = async (req, res) => {
  try {
    const info = await Info.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(info);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteInfo = async (req, res) => {
  try {
    await Info.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Info deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
