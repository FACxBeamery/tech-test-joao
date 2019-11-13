import React from "react";
import styles from "./SubHeader.module.css";

const SubHeader = ({ children }) => {
  return <h2 className={styles["subheader"]}>{children}</h2>;
};

export default SubHeader;
