import express from "express";
import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

const router = express.Router();

export const getPostMessages = async (req, res) => {
  const postMessage = await PostMessage.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while retrieving all records : " +
          JSON.stringify(err, undefined, 2)
      );
  });
};

export const getPostMessage = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send("No record with given id : " + id);

  const updatedPostMessage = {
    title: req.body.title,
    message: req.body.message,
  };

  await PostMessage.findOneAndUpdate(id, updatedPostMessage, (err) => {
    if (!err) res.send(updatedPostMessage);
    else
      console.log(
        "No records with given id : " + JSON.stringify(err, undefined, 2)
      );
  });
};

export const createPostMessages = (req, res) => {
  const newPostMessage = new PostMessage({
    title: req.body.title,
    message: req.body.message,
  });
  newPostMessage.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while updating a record : " + JSON.stringify(err, undefined, 2)
      );
  });
};

export const deletePostMessage = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send("No record with given id : " + id);

  await PostMessage.findByIdAndRemove(id, (err) => {
    if (!err) res.send({ message: "PostMessage deleted successfully" });
    else
      console.log(
        "Error while deleting a record : " + JSON.stringify(err, undefined, 2)
      );
  });
};

export default router;
