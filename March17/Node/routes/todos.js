var express = require("express");
var router = express.Router();
let todos = [
  { item: "intial todo1", status: "complete" },
  { item: "intial todo2", status: "complete" },
];
router.get("/", function (req, res) {
  res.json(todos);
});
router.post("/", function (req, res) {
  let { item, status } = req.body;
  console.log(req.body);
  todos.push({ item, status });
  res.json({ status: "adding todo complete" });
});
router.delete("/:indexToDelete", (req, res) => {
  console.log(req.params.indexToDelete);
  let newTodos = todos.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      return false;
    } else {
      return true;
    }
  });
  todos = newTodos;
  res.json({ status: "Successfully deleted todos" });
});
module.exports = router;
