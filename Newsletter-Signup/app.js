// jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const { url } = require('inspector');
const app = express();
const listId = "f127ae0c9c"
const apiKey = "396c4c9f547985a73e16cbd1e59d6f1f-us8"
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"));

const port = 3000;
app.listen(process.env.port || port, function () {
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
        auth: `auth:${apiKey}`
    }
    const request = https.request(url, options, function (response) {
        
        response.on('data', function (data) {            
            const jsonResponse = JSON.parse(data)
            console.log(`response.statusCode: ${response.statusCode} && error_count: ${jsonResponse.error_count}`)
            if(response.statusCode === 200 && jsonResponse.error_count === 0) {
                res.sendFile(__dirname + "/success.html")
            } else {
                res.sendFile(__dirname + "/failure.html")
            }
            
        })
    })

    request.write(jsonData)
    request.end()
})

app.post("/failure", function (req, res) {
    res.redirect("/")
})