const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const chessRoutes = require("./routes/chess.js");

chessRoutes(app);

module.exports = app;
