//jshint esversion:6

const express = require("express")

const app = express();

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})

app.get("/", function(request, response) {
    console.log(request)
    response.send("<h1>Hello !</h1>")
})

app.get("/contact", function(request, response) {
    console.log(request)
    response.send("<h1>Is it me you're looking for?</h1>")
})

app.get("/about", function(request, response) {
    console.log(request)
    response.send("<h1>I'm Batman.</h1>")
})