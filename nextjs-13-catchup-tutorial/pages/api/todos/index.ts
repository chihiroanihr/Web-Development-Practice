import { NextApiRequest, NextApiResponse } from "next";

type Todo = {
  title: string;
};

const todos: Todo[] = [
  { title: "Reading Book" },
  { title: "Programming" },
  { title: "Exercising" },
];

const sendTodos = async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve) => setTimeout(resolve, 4000)); // Return data after 4 seconds
  res.status(200).json(todos);
};

export default sendTodos;
