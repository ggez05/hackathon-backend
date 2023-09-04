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
  const { name, email, batch } = req.body;
  console.log(req.body);
  console.log(name, email);
  const newData = new GoogleForm({ name, email, batch });
  console.log(newData);
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
