import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { DarkModeProvider } from "./contexts/DarkModeContext";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
