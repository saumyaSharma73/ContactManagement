
const express = require("express");
const morgan = require("morgan");
require("dotenv").config({ path: "./config/.env" });

const connectDB = require("./config/db");

const auth = require("./middlewares/auth");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(require("cors")());

// Routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));

// Define a simple route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, this is the root path!");
});


console.log('MONGODB_URI:', process.env.MONGODB_URI);

// Server configurations
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on port: ${PORT}`);
});
