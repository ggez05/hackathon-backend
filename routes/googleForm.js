import express from "express";
import { getData, createData } from "../controllers/googleform.js";

const router = express.Router();

router.get("/", getData);
router.post("/", createData);

export default router;
