import mongoose from "mongoose";

const googleFormSchema = mongoose.Schema({
  name: String,
  email: String,
  batch: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const cardMessage = mongoose.model("GoogleForm", googleFormSchema);

export default cardMessage;
