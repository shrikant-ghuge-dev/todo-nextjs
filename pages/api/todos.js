// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const todos = [
    {
      id: 1,
      title: "Test",
      description: "This is test todo."
    },
    {
      id: 2,
      title: "Test1",
      description: "This is test1 todo."
    },
    {
      id: 3,
      title: "Test2",
      description: "This is test2 todo."
    }
  ];
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
