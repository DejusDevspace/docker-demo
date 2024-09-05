import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Welcome to this page!");
});


app.listen(port, function () {
    console.log(`Server running on port ${port}`)
});