import "./db.js";
import express from "express";
import bodyParser from "body-parser";
import postMessageRoutes from "./routes/postMessages.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.listen(4000, () => console.log("Server started at : 4000"));

app.use("/postMessages", postMessageRoutes);
