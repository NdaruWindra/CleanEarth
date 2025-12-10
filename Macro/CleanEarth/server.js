const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose
  .connect(
    "mongodb+srv://faeznz:faeznz@data.h3xudui.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const itemSchema = new mongoose.Schema({
  nama: String,
  bank: String,
  nominal: Number,
  no_telepon: String,
  alamat: String,
});

const Item = mongoose.model("Item", itemSchema);

app.use(express.json());

app.get("/nasabah", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/nasabah/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    res.json(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/nasabah", async (req, res) => {
  const newItem = new Item(req.body);
  try {
    await newItem.save();
    res.status(201).send(newItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.put("/nasabah/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
    res.send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete("/nasabah/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
