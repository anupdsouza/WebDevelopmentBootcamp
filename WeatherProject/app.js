const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true}))

const port = 3000;
const apiKey = "" // signup & get one from openweathermap
const weatherByCityUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const weatherIconUrl = "https://openweathermap.org/img/wn/"

app.listen(port, function() {
    console.log(`App running on http://localhost:${port}`)
})

app.get("/", function(request, response) {
    console.log(`Server listening on port ${port}`)
    response.sendFile(__dirname + "/index.html")
})

app.post("/", function(request, response) {
    const location = request.body.cityName
    console.log(`Starting fetch for weather of${location}`)

    const requestUrl = `${weatherByCityUrl}${location}&appid=${apiKey}`

    https.get(requestUrl, function (res) {
        console.log(res)
        res.on("data", function (data) {
            const weatherData = JSON.parse(data)

            const temperature = weatherData.main.temp
            const weatherDesc = weatherData.weather[0].description
            const weatherIcon = weatherData.weather[0].icon

            response.write(`<p>The temperature in ${location} is ${temperature} degree Celsius</p>`)
            response.write(`<p>The weather is currently: ${weatherDesc}</p>`)
            response.write(`<img src=${weatherIconUrl}${weatherIcon}@2x.png>`)
            response.send()
        })
    })
})
