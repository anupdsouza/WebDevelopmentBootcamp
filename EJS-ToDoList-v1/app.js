// jshint esversion: 6

const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const items = []

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));


app.listen(port, function () {
    console.log(`Server running on http://localhost:${port}`)
})

app.get("/", function (request, response) {
    console.log(`Server listening on port ${port}`)

    let today = new Date()
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    let day = today.toLocaleDateString("en-US", options)
    response.render("list", { kindOfDay: day, todoListItems: items })
})

app.post("/", function (request, response) {
    items.push(request.body.newListItem)
    response.redirect("/")
})