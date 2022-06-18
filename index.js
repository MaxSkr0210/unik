require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("unik/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "unik", "dist", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log("Работает");
});
