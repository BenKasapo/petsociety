const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

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

// Define Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//Serve  static assets in Production
if (process.env.NODE_ENV === "PRODUCTION") {
  // Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("APP IS RUNNING...");
});

const Port = process.env.Port || 5000;

app.listen(Port, "0.0.0.0", () =>
  console.log(`Server started on port ${Port} `)
);
