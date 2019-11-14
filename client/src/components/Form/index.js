import React, { useState, useEffect } from "react";
import withContext from "../Consumer";
import axios from "axios";

import Autocomplete from "./Autocomplete";

const Form = ({ context }) => {
  const { setJobs } = context;
  const [userInput, setUserInput] = useState("");
  const [options, setOptions] = useState();
  const [showWarningMessage, setShowWarningMessage] = useState(false);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);

  const handleOnSubmit = async e => {
    e.preventDefault();
    const userInputIsACity = options.includes(userInput);

    if (userInputIsACity) {
      try {
        setJobs(undefined);
        setShowLoadingMessage(true);
        const response = await axios.get("/jobs", {
          params: {
            city: userInput.toLowerCase(),
            resultsToTake: "100"
          }
        });
        const { data } = response;
        const jobResults = data["results"];
        setShowLoadingMessage(false);
        setJobs(jobResults);
      } catch (error) {
        console.log(error);
      }
    } else {
      setUserInput("");
      setShowWarningMessage(true);
    }
  };
  useEffect(() => {
    async function getCities() {
      try {
        const response = await axios.get("/cities");
        const { data } = response;
        setOptions(data);
      } catch (error) {
        throw error;
      }
    }
    getCities();
  }, []);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Autocomplete
          options={options}
          userInput={userInput}
          setUserInput={setUserInput}
          setShowWarningMessage={setShowWarningMessage}
        />
      </form>
      {showWarningMessage && (
        <p>Please submit a valid city from the dropdown </p>
      )}
      {showLoadingMessage && (
        <p>
          <span aria-label="looking emoji">🧐</span> Getting jobs...
        </p>
      )}
    </div>
  );
};

export default withContext(Form);
