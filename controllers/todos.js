const Todo = require("../models/Todo");

const getAllTodos = (req, res) => {
  res.send("Here are all the todos!");
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error.message);
  }
};

const getTodo = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTodo = (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTodo = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = { getAllTodos, createTodo, getTodo, updateTodo, deleteTodo };
