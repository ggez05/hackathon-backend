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
  const card = req.body;
  const newCard = new cardMessage(card);
  try {
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
