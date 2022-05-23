const express = require("express");
const connectDB = require("./config/db");

const connect = require("./config/db");

const app = express();
const cors = require("cors");

//Connect Database
connectDB();
const options = {
  origin: "http://localhost:3000",
};

//init Middleware
app.use(cors(options), express.json({ extended: false }));

app.get("/", (req, res) => res.send(`API Running`));

// Define Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const Port = process.env.Port || 5000;

app.listen(Port, () => console.log(`Server started on port ${Port} `));
