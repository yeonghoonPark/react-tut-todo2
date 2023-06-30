import React, { useEffect, useState } from "react";
import { TodoType } from "../../models/todo";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

type Props = { filter: string };

export default function TodoList({ filter }: Props) {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: "123", text: "shopping", status: "active" },
    { id: "124", text: "study english", status: "active" },
  ]);

  const handleAdd = (addedTodo: TodoType) => {
    setTodos([...todos, addedTodo]);
  };

  const handleUpdate = (updatedTodo: TodoType) => {
    setTodos(todos.map((cV) => (cV.id === updatedTodo.id ? updatedTodo : cV)));
  };

  const handleDelete = (deletedTodo: TodoType) => {
    setTodos(todos.filter((cV) => cV.id !== deletedTodo.id));
  };

  const filteredTodos =
    filter === "all" ? todos : todos.filter((cV) => cV.status === filter);

  useEffect(() => {
    console.log(todos, "@todos");
  }, [todos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map((cV) => (
          <Todo
            key={cV.id}
            todo={cV}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
