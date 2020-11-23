const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//Middleware
app.use(cors());
app.use(express.json()); //req.body

//Routes

//Create a todo
app.post('/todos', async (req, res) => {
    try {

        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo(description) VALUES ($1) RETURNING *", [description]);

        res.json(newTodo.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
})

//Get all todos 
app.get("/todos", async (req, res) => {
    try {

        const allTodos = await pool.query("SELECT * FROM todo")

        res.json(allTodos.rows)

    } catch (error) {
        console.error(error.message);
    }
})

//Get a todo
app.get('/todos/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);

        res.json(todo.rows[0])


    } catch (error) {
        console.log(error.message)
    }
})

//Update a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])

        res.json("Todo was updated successfully.")

    } catch (error) {
        console.error(error.message)
    }
})

//Delete a todo 
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletetodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])

        res.json("Todo was deleted successfully.")


    } catch (error) {
        console.log(error.message)
    }
})


app.listen(5000, () => {
    console.log('Server has started listening on port 5000')
})