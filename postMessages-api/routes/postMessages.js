import express from "express";

import {
  createPostMessages,
  getPostMessages,
  getPostMessage,
  deletePostMessage,
} from "../controllers/postMessageController.js";

const router = express.Router();

router.get("/", getPostMessages);
router.post("/", createPostMessages);
router.put("/:id", getPostMessage);
router.delete("/:id", deletePostMessage);

export default router;
