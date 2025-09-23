const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Property = require("./models/Property");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ortus", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// GET properties with optional filters
app.get("/properties", async (req, res) => {
  try {
    const filters = {};
    if (req.query.type) filters.type = req.query.type;
    if (req.query.location) filters.location = req.query.location;

    const properties = await Property.find(filters);
    res.json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
