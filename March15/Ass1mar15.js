const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  const cmpltPath = path.join(__dirname, "Ass1mar15.html");
  res.sendFile(cmpltPath);
});
app.post("/details", function (req, res) {
  console.log(req.body);
  let userDetails = `
  <style>
  body {
    background: linear-gradient(
      45deg,
      rgb(211, 149, 159),
      rgb(223, 185, 114),
      rgb(211, 149, 159),
      rgb(223, 185, 114)
    );
  }
  table{
     border-collapse: collapse; 
     width:50%;
     margin:7px auto 0 auto
  }
  tr,th,td{
    border:2px solid black;
  } 
  h1{
    text-align:center;
  }
  </style>
  <body>
  <h1>User Details</h1>
  <table>
  <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Date of Birth</th>
      <th>City</th>
      <th>Country</th>
  </tr>
  <tr>
      <td>${req.body.userName}</td>
      <td>${req.body.userEmail}</td>
      <td>${req.body.userDob}</td>
      <td>${req.body.userCity}</td>
      <td>${req.body.userCountry}</td>
  </tr>
</table>
</body>`;
  res.send(userDetails);
});
app.listen(8000);
console.log("Assignment1_March1 is Running");
