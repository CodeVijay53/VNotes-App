const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");

const app = express();

dotenv.config();

connectDB();

app.use(res.JSON);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${PORT}`));

app.get("/", (req, res) => {
  res.send("You can win");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});
