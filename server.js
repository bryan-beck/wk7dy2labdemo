const express = require ('express');
const path = require("path");
const Rollbar = require('rollbar');


let rollbar = new Rollbar({
    accessToken: "5e74406e3924493c8e82ac1a8639d856",
    captureUncaught: true,
    captureUnhandledRejections: true
})
const students = [];
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/public/index.html"));
        rollbar.info("HTML file served successfully!");
    });
    app.post('/api/student', (req, res) => {
        let {name} = req.body;
        name = name.trim();
        students.push(name);

        rollbar.log("Student added successfully", {author: "bryan", type: "manual entry"});
        res.status(200).send(students);
    })

const port = process.env.PORT || 4545;
app.use(rollbar.errorHandler());

app.listen(port, () => {
    console.log(`they're taking the hobbitss to ${port}!`);
    });