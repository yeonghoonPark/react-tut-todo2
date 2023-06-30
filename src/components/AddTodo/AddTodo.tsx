import React, { useState } from "react";
import { TodoType } from "../../models/todo";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

type Props = {
  onAdd: (addedTodo: TodoType) => void;
};

export default function AddTodo({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim().length === 0) return setText("");

    onAdd({
      id: uuidv4(),
      text,
      status: "active",
    });

    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
