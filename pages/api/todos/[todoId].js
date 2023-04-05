import { todos } from "../../../data/todos";

export default function handler(req, res) {
    const todoId = req.query;
    if (req.method === 'DELETE') {
        const deleteTodo = todos.find(todo => todo.id === parseInt(todoId));
        const index = todos.findIndex(todo => todo.id === parseInt(deleteTodo));
        todos.splice(index, 1);
        res.status(200).json(deleteTodo);
    } else if (req.method === 'GET') {
        const todo = todos.filter(todo => todo.id == parseInt(todoId.todoId));
        console.log(todoId.todoId);
        res.status(200).json(todo);
    }


}