const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();

dotenv.config(); // Load environment variables from a.env file.

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(chats);
  // Find the chat by the given ID from the chats array.

  const singleChat = chats.find((c) => c._id === req.params.id);

  res.send(singleChat);
  if (!singleChat) {
    res.status(404).send({ message: "Chat not found" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log("Server is running on port $(PORT)");
});
