import React from "react";
import { TodoType } from "../../models/todo";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

type Props = {
  todo: TodoType;
  onUpdate: (updatedTodo: TodoType) => void;
  onDelete: (deletedTodo: TodoType) => void;
};

export default function Todo({ todo, onDelete, onUpdate }: Props) {
  const { id, text, status } = todo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleClick = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={`checkbox${id}`}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={`checkbox${id}`}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleClick}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
