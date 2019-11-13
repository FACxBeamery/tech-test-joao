import React, { Component, useState } from "react";
import styles from "./Autocomplete.module.css";

//autocomplete component based on: https://codesandbox.io/s/ojr02w7x55?from-embed

const OptionsList = ({
  showOptions,
  userInput,
  filteredOptions,
  activeOption,
  onClick
}) => {
  let optionList;
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      return (
        <ul className={styles["options"]}>
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

const Autocomplete = ({ options }) => {
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const onChange = e => {
    // const { options } = this.props;
    setUserInput(e.currentTarget.value);

    setFilteredOptions(
      options.filter(
        optionName =>
          optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      )
    );
    setShowOptions(true);
    setActiveOption(0);
  };

  const onClick = e => {
    setUserInput(e.currentTarget.innerText);

    setFilteredOptions([]);
    setShowOptions(false);
    setActiveOption(0);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveOption(0);
      setShowOptions(false);
      setUserInput(filteredOptions[activeOption]);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption => activeOption - 1);
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      setActiveOption(activeOption => activeOption + 1);
    }
  };

  return (
    <React.Fragment>
      <div className={styles["search"]}>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          className={styles["search-box"]}
        />
        <input type="submit" value="" className={styles["search-btn"]} />
      </div>
      {
        <OptionsList
          showOptions={showOptions}
          userInput={userInput}
          filteredOptions={filteredOptions}
          activeOption={activeOption}
          onClick={onClick}
        />
      }
    </React.Fragment>
  );
};

export default Autocomplete;
