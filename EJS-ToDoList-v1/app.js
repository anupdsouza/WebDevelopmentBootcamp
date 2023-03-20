// jshint esversion: 6

const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));


app.listen(port, function () {
    console.log(`Server running on http://localhost:${port}`)
})

app.get("/", function (request, response) {
    console.log(`Server listening on port ${port}`)

    let today = new Date()
    let currentDay = today.getDay()
    var day = ""

    switch (currentDay) {
        case 0:
            day = "Sunday"
            break
        case 1:
            day = "Monday"
            break
        case 2:
            day = "Tuesday"
            break
        case 3:
            day = "Wednesday"
            break
        case 4:
            day = "Thursday"
            break
        case 5:
            day = "Friday"
            break
        case 6:
            day = "Saturday"
            break
        default:
            console.log(`Invalid day ${currentDay}`)
    }
    response.render("list", { kindOfDay: day })
})

app.post("/", function (request, response) {

})