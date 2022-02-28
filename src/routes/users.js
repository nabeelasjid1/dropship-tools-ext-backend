import express from "express";
import { updatePassword, checkUserSubscription } from "../controllers/users";

const router = express.Router();

router.post("/update-password", updatePassword);
router.get("/check-user-subscription", checkUserSubscription);

export default router;
