import Link from "next/link";

import styles from "../page.module.css";

async function getData() {
  const res = await fetch("http://localhost:3000/api/todos");
  /*
  const res = await fetch("http://localhost:3000/api/todos", {API_CODE});

  API_CODE:
  - {cache: "no-cache"} --> SSG (静的データ取得)
  - {cache: "no-store"} --> SSR (動的データ取得)
  - {next: {revalidate: 10}} --> ISR (データの再検証) after 10s.
  */

  return res.json();
}

type Todo = {
  title: string;
};

export default async function Page() {
  const todos: Todo[] = await getData();

  return (
    <div className={styles.main}>
      <h2>Todos</h2>

      <br />

      {todos.map((todo) => (
        <div key={todo.title}>{todo.title}</div>
      ))}

      <br />

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="page1">Page 1</Link>
        </li>
        <li>
          <Link href="page2">Page 2</Link>
        </li>
      </ul>
    </div>
  );
}
