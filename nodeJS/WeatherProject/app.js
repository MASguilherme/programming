const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const unit = "metric";
  const apiKey = "7823b7e2074b50fd338b30380cec444b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;
  https.get(url, (response) => {
    response.on("data", (data) => {
      // tranforma o dado da API em um object que pode ser manipulado para procurar pedaços de dados.
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(`<h1>Description: ${desc}</h1>`);
      res.write(`<p>The tempeture of ${query} is ${temp} graus celcius.</p> `);
      res.write(`<img src="${imgURL}" /><br /><br />`);
      res.write(`<a href="/">Voltar</a>`);
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
