import React, { Fragment, useEffect, useState } from 'react';

const ListTodos = () => {

    const [todos, setTodos] = useState([])

    const getTodos = async () => {

        try {

            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    console.log(todos)

    return (
        <Fragment>

            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    ))}


                </tbody>
            </table>

        </Fragment>
    )
}

export default ListTodos