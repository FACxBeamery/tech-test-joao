import React from "react";

import styles from "./OptionsList.module.css";

const OptionsList = ({
  showOptions,
  userInput,
  filteredOptions,
  activeOption,
  onClick
}) => {
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      return (
        <ul className={styles["options"]} data-testid="list">
          {filteredOptions.map((optionName, index) => {
            let className;
            if (index === activeOption) {
              className = styles["option-active"];
            }
            return (
              <li className={className} key={optionName} onClick={onClick}>
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <div className={styles["no-options"]}>
          <em>No Option!</em>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default OptionsList;
