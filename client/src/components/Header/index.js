import React from "react";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <header className={styles["header"]}>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
