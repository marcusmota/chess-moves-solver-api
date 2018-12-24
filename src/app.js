const express = require("express");
const app = express();

const chessRoutes = require("./routes/chess.js");

chessRoutes(app);

module.exports = app;
