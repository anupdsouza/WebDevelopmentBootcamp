// jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const { url } = require('inspector');
const app = express();
const listId = ""
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"));

const port = 3000;
app.listen(port, function () {
    console.log(`Server running on http://localhost:${port}`)
})

app.get("/", function (request, response) {
    console.log(`Server listening on port ${port}`)
    response.sendFile(__dirname + "/signup.html")
})

app.post("/", function (req, res) {
    const firstname = req.body.fName
    const lastname = req.body.lName
    const email = req.body.email

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)
    const url = `https://us8.api.mailchimp.com/3.0/lists/${listId}`
    const options = {
        method: "POST",
        auth: "auth:-us8"
    }
    const request = https.request(url, options, function (response) {

        if(response.statusCode !== 200) {
            console.log("error")
            res.sendFile(__dirname + "/failure.html")
        } else {
            console.log("success")
            res.sendFile(__dirname + "/success.html")
        }
        response.on('data', function (data) {
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
})

