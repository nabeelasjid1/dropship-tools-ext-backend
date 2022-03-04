import express from "express";
import { saveIdentifiers } from "../controllers/scraping";

const router = express.Router();

router.post("/save-identifiers", saveIdentifiers);

export default router;