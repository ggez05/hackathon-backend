import mongoose from "mongoose";
import GoogleForm from "../modals/googleform.js";

export const getData = async (req, res) => {
  try {
    const formData = await GoogleForm.find();

    res.status(200).json(formData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createData = async (req, res) => {
  const card = req.body; // user provides this
  const newData = new GoogleForm(card);
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
