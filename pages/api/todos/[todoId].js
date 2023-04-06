import { todos } from "../../../data/todos";

export default function handler(req, res) {
    const todoId = req.query;
    if (req.method === 'DELETE') {
        const deleteTodo = todos.find(todo => todo.id === parseInt(todoId.todoId));
        const index = todos.findIndex(todo => todo.id === parseInt(deleteTodo.id));
        todos.splice(index, 1);
        res.status(200).json(deleteTodo);
    } else if (req.method === 'GET') {
        const todo = todos.filter(todo => { if (todo.id == parseInt(todoId.todoId)) return todo });
        res.status(200).json(todo);
    } else if (req.method === 'PUT') {
        const objIndex = todos.findIndex(todo => todo.id === parseInt(todoId.todoId));
        todos[objIndex].title = req.body.title;
        todos[objIndex].description = req.body.description;
        res.status(200).json(todos);
    }


}