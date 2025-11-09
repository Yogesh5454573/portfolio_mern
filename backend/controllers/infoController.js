import Info from "../models/infoModel.js";

export const addInfo = async (req, res) => {
  try {
    const newInfo = new Info(req.body);
    const savedInfo = await newInfo.save();
    res.status(201).json({
      message: "Record created successfully",
      data: savedInfo
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllInfo = async (req, res) => {
  try {
    const infos = await Info.find();
    res.json(infos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInfoByToken = async (req, res) => {
  try {
    const info = await Info.findOne({ token: req.params.token });
    if (!info) return res.status(404).json({ message: "Record not found" });
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateInfoByToken = async (req, res) => {
  try {
    const updated = await Info.findOneAndUpdate(
      { token: req.params.token },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Record not found" });
    res.json({ message: "Record updated successfully", data: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteInfoByToken = async (req, res) => {
  try {
    const deleted = await Info.findOneAndDelete({ token: req.params.token });
    if (!deleted) return res.status(404).json({ message: "Record not found" });
    res.json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
