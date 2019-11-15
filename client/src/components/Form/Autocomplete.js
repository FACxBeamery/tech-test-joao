import React, { useState } from "react";
import styles from "./Autocomplete.module.css";

import OptionsList from "./OptionsList";

const Autocomplete = ({
    options,
    userInput,
    setUserInput,
    setShowWarningMessage
}) => {
    const [activeOption, setActiveOption] = useState(0);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);

    const onChange = e => {
        setUserInput(e.currentTarget.value);
        setShowWarningMessage(false);
        setFilteredOptions(
            options.filter(
                optionName =>
                    optionName.toLowerCase().indexOf(userInput.toLowerCase()) >
                    -1
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
        setShowWarningMessage(false);
    };

    const onKeyDown = e => {
        if (showOptions) {
            if (e.keyCode === 13) {
                setActiveOption(0);
                setShowOptions(false);
                setUserInput(filteredOptions[activeOption]);
                setShowWarningMessage(false);
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
        }
    };

    return (
        <React.Fragment>
            <label htmlFor="city">
                <strong>Enter a city</strong>
            </label>
            <div className={styles["search"]}>
                <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput || ""}
                    className={styles["search-box"]}
                    placeholder={"ex: London, Birmingham..."}
                />
                <input
                    type="submit"
                    value=""
                    className={styles["search-btn"]}
                />
            </div>
            {
                <OptionsList
                    // data-testid="options-list"
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
