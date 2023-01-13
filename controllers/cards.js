import mongoose from "mongoose";
import cardMessage from "../modals/cardMessage.js";

export const getCards = async (req, res) => {
  try {
    const cardMessages = await cardMessage.find();

    res.status(200).json(cardMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCard = async (req, res) => {
  const card = req.body; // user provides this
  const newCard = new cardMessage(card);
  try {
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCard = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const card = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that id");

    const updatedCard = await cardMessage.findByIdAndUpdate(
      _id,
      { ...card, _id },
      {
        new: true,
      }
    );

    res.json(updatedCard);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteCard = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await cardMessage.findByIdAndRemove(id);
  res.json({ message: "Post Deleted succesfully" });
};
