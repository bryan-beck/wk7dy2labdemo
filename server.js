const express = require ('express');
const path = require("path");
const Rollbar = require('rollbar');


let rollbar = new Rollbar({
    accessToken: "5e74406e3924493c8e82ac1a8639d856",
    captureUncaught: true,
    captureUnhandledRejections: true
})
const app = express();

app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/public/index.html"));
        rollbar.info("HTML file served successfully!");
    });

const port = process.env.PORT || 4545;

app.listen(port, () => {
    console.log(`they're taking the hobbitss to ${port}!`);
    });