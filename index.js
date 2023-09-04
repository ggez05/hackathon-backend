import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/cards.js";
import routerForm from "./routes/googleForm.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/addcard", router);
app.use("/formdata", routerForm);
// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL =
  "mongodb+srv://garvit0510:daniel0510@cluster0.jab7qs9.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
