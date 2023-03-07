//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})

app.get("/", function(request, response) {
    // console.log(__dirname)
    response.sendFile(__dirname + "/index.html")
})

app.post("/", function(request, response) {
    console.log(request.body)
    response.send("The sum is: " + (Number(request.body.num1) + Number(request.body.num2)))
})

app.get("/bmicalculator", function(request, response) {
    response.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator", function(request, response) {
    console.log(request.body)
    response.send(bmiCalculator(parseFloat(request.body.weight), parseFloat(request.body.height)))
})

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2))
    var interpretation = ""
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    } else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }
    return interpretation
}