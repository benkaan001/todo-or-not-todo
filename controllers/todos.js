const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    //we are sending back the object todos. There is a property inside the todos
    //object by the name todos. ES6 allows us to refactor it to ({todos}) as long
    //as the object name matches the property.
    // res.status(200).json({ todos: todos });
    // res.status(200).json({ todos, amount: todos.length });
    // res.status(200).json({ status: success, data: {todos, nbHits: todos.lenth} });
    // res.status(200).json({ status: 'success', data: {todos}});

    // key points to condier
    // -> if the front end gets the data, no need to add a status in response
    // -> axios on the front end already has the data property. So no need to
    //    wrap our response in a data object.
    //    in the front would look like data : {data : {todos} }

    res.status(200).json({ todos });

    res.status(200).json({ todos });
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
    // res.status(200).json({ success: true, data: todo });
    // keep it stupid simple
    res.status(200).json({ todo });
  } catch (error) {
    //will send cast error because the number of characters in ID does not match
    //the req.params
    res.status(500).json({ msg: error });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      res.status(404).json({ msg: `No todo found with that id ${todoID} ` });
    }
    // res.status(200).json({ success: true, data: todo });
    // keep it stupid simple
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });

    if (!todo) {
      res.status(404).json({ msg: `No todo found with that id ${todoID}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: todoID });
    if (!todo) {
      return res
        .status(404)
        .json({ msg: ` No todo found with this id: ${todoID}` });
    }
    // response variations --> options === limitless
    // key consideration, 'what will you do with the response on the front end?'
    // res.status(200).json({status:'success', todo: null});
    // res.status(200).json({ todo});
    // res.status(200).send();

    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  editTodo,
  updateTodo,
  deleteTodo,
};
