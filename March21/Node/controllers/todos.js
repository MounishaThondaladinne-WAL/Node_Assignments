const { body, validationResult } = require("express-validator");

let todos = [
  { item: "intial todo1", status: "complete" },
  { item: "intial todo2", status: "complete" },
];
function getTodos(req, res) {
  res.json(todos);
}
const createTodo = [
  body("item")
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("min should be 3 and max should be 20")
    .escape()
    .withMessage("No special charcters allowed"),
  body("status")
    .trim()
    .isLength({ min: 8, max: 10 })
    .withMessage("min should be 8 and max should be 10"),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      let { item, status } = req.body;
      console.log(req.body);
      todos.push({ item, status });
      res.json({ status: "adding todo complete" });
    }
  },
];
function deleteTodo(req, res) {
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
}
module.exports = { getTodos, createTodo, deleteTodo };
