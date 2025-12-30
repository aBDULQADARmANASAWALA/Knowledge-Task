import express from "express";
import { createIssues, deleteIssues, getAllIssues, getIssuesById, updateIssues } from "../controllers/issuesControllers.js";

const router = express.Router();

router.get("/", getAllIssues);
router.get("/:id", getIssuesById);
router.post("/", createIssues);
router.patch("/:id", updateIssues);
router.delete("/:id", deleteIssues);

export default router;