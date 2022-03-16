const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/addcar", function (req, res) {
  const cmpltPath = path.join(__dirname, "Car.html");
  res.sendFile(`${cmpltPath}`);
});
app.get("/showcars", function (req, res) {
  const cmpltPath = path.join(__dirname, "showCars.html");
  res.sendFile(`${cmpltPath}`);
});
app.get("/login", function (req, res) {
  const cmpltPath = path.join(__dirname, "login.html");
  res.sendFile(`${cmpltPath}`);
});
app.post(`/loginstatus`, function (req, res) {
  console.log(req.body);
  let userName = req.body.username;
  let userPassword = req.body.userpassword;
  let login = "";
  if ((userName == "smith") & (userPassword == "abc")) {
    login = "Logged In";
  } else {
    login = "Please provide valid Credentials";
  }
  res.send(`
    <style>body{
      background: linear-gradient(
        45deg,
        rgb(211, 149, 159),
        rgb(223, 185, 114),
        rgb(211, 149, 159),
        rgb(223, 185, 114)
      );
      }
      .result-div{
          width:60%;
          margin:5px auto 0 auto;
          text-align:center;
          border:2px solid black;
      }
      </style>
    <body>
    <div class="result-div">
    <h2>${login}</h2>
      </div>
      </body>`);
});
app.listen(3000);
console.log("Car Website is Running");
