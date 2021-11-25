const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    //we are sending back the object todos. There is a property inside the todos
    //object by the name todos. ES6 allows us to refactor it to ({todos}) as long
    //as the object name matches the property.
    res.status(201).json({ todos: todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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

const getTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findOne({ _id: todoID });
    if (!todo) {
      return res
        .status(404)
        .json({ msg: `No todo found with that id: ${todoID}` });
    }
    res.status(201).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTodo = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = { getAllTodos, createTodo, getTodo, updateTodo, deleteTodo };
