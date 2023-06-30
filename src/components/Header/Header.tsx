import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import styles from "./Header.module.css";

type Props = {
  filters: string[];
  filter: string;
  onFilterChange: (filter: string) => void;
};

export default function Header({ filters, filter, onFilterChange }: Props) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const filter = e.currentTarget.name;
    onFilterChange(filter);
  };

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
      <nav>
        <ul className={styles.filters}>
          {filters.map((cV, i) => (
            <li key={i}>
              <button
                className={`
                  ${styles.filter} 
                  ${filter === cV && styles.selected}
                `}
                onClick={handleClick}
                name={cV}
              >
                {cV}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
