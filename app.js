const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("hello from test1")
})

app.listen(3000, () => {
    console.log("listenong on port 3000")
})