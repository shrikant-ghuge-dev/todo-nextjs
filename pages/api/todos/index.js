// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { todos } from "../../../data/todos";

export default function handler(req, res) {

  if (req.method === 'GET') {
    res.status(200).json(todos);
  } else if (req.method === 'POST') {
    const newTodo = {
      id: Date.now(),
      title: req.body.title,
      description: req.body.description
    }
    todos.push(newTodo);
    res.status(201).json(newTodo);
  }
}
