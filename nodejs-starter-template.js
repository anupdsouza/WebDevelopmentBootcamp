// jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https')
const app = express();
app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static("public"));

const port = 3000;
app.listen(port, function() {
    console.log(`Server running on http://localhost:${port}`)
})

app.get("/", function(request, response) {
    console.log(`Server listening on port ${port}`)
    response.sendFile(__dirname + "/signup.html")
})

app.post("/", function(request, response) {
    
})