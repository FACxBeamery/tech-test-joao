import React from "react";
import styles from "./Message.module.css";

const Message = ({ type = "normal", children }) => {
    return <p className={styles[type]}>{children}</p>;
};

export default Message;
