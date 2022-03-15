const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.send(
    `<style>h1{text-align:center}</style><h1>Please Provide Operation in the Url</h1>`
  );
});
app.get("/:operation", function (req, res) {
  res.send(`
  <style>
  body{
      background: linear-gradient(
        45deg,
        rgb(211, 149, 159),
        rgb(223, 185, 114),
        rgb(211, 149, 159),
        rgb(223, 185, 114)
      );
  }
  .Calculator-Form {
    margin: 2% auto 0px auto;
    border: 2px solid black;
    width: 35%;
    padding: 8px;
    border-radius: 5px;
  }
  .heading
   {
    text-align:center;
  }
  .form-element {
    background-color: white;
    height: 30px;
    width: 75%;
    margin: 0px auto 10px auto;
    display: block;
    border-radius: 4px;
    text-align:center;
  }
  .Caluctor-Button {
    margin: 0px auto 8px auto;
    display: block;
    width: 50%;
    height: 30px;
    background-color: rgb(224, 172, 28);
    border-radius: 4px;
    border: Black 2px solid;
    font-size: 15px;
  }
  
  </style>
  <body>
    <h1 class = "heading"> Calculator </h1>
      <form action=/result/${req.params.operation} method="post" class="Calculator-Form">
        <input type="number" name="firstNum" placeholder="Enter First Digit" class="form-element"/>
        <input type="number" name="secondNum" placeholder="Enter Second Digit" class="form-element"/>
        <button class="Caluctor-Button">Submit</button>
      </form>
    </body>`);
});
app.post(`/result/:operation`, function (req, res) {
  console.log(req.body);
  const Operation = req.params.operation;
  let Num1 = parseInt(req.body.firstNum);
  let Num2 = parseInt(req.body.secondNum);
  let finalResult = 0;
  if (Operation == "Addition") {
    finalResult = Num1 + Num2;
  } else if (Operation == "Subtraction") {
    finalResult = Num1 - Num2;
  } else if (Operation == "Multiplication") {
    finalResult = Num1 * Num2;
  } else if (Operation == "Division") {
    finalResult = Num1 / Num2;
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
  <div class="result-div"><h1>Final Result</h1>
    <h2>The ${Operation} of ${Num1} and ${Num2} is ${finalResult}</h2>
    </div></body>`);
});
app.listen(8001);
console.log("Assignment2_March1 is Running");
