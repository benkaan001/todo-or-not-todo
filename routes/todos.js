const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  updateTodo,
  deleteTodo,
  getTodo,
  createTodo,
  editTodo,
} = require("../controllers/todos");

router.route("/").get(getAllTodos);
router.route("/").post(createTodo);
router.route("/:id").get(getTodo);
router.route("/:id").put(editTodo);
router.route("/:id").patch(updateTodo);
router.route("/:id").delete(deleteTodo);

module.exports = router;
