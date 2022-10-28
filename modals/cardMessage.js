import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  id: Number,
  img: String,
  difficulty: String,
  status: String,
  title: String,
  description: String,
  timertilte: String,
  enddate: Date,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const cardMessage = mongoose.model("CardMesaage", cardSchema);

export default cardMessage;
