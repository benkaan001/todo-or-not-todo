

const getAllTodos = (req,res) => {
    res.send('Here are all the todos!')
}

const createTodo = (req,res) => {
    res.json(req.body);

}

const getTodo = (req,res) => {
    res.json({id: req.params.id})
}

const updateTodo = (req,res) => {
    res.json({id:req.params.id})
}

const deleteTodo = (req,res) => {
    res.json({id:req.params.id})
}




module.exports= {getAllTodos, createTodo, getTodo,updateTodo,deleteTodo};