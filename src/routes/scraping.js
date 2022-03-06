import express from "express";
import { saveIdentifiers, saveSearches } from "../controllers/scraping";

const router = express.Router();

router.post("/save-identifiers", saveIdentifiers);
router.post("/save-searches", saveSearches);

export default router;
