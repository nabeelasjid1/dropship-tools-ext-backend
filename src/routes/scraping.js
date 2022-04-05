import express from "express";
import { saveIdentifiers, saveSearches, importIdentifiers } from "../controllers/scraping";

const router = express.Router();

router.post("/save-identifiers", saveIdentifiers);
router.post("/import-identifiers", importIdentifiers);
router.post("/save-searches", saveSearches);

export default router;
