import React, { useState, useEffect } from "react";
import withContext from "../Consumer";
import axios from "axios";

import Autocomplete from "./Autocomplete";
import Message from "../Message";

const Form = ({ context }) => {
  const { setJobs } = context;
  const [userInput, setUserInput] = useState("");
  const [options, setOptions] = useState([
    "London",
    "Birmingham",
    "Leeds",
    "Sheffield",
    "Bradford",
    "Manchester",
    "Liverpool",
    "Bristol",
    "Newcastle",
    "Sunderland",
    "Wolverhampton"
  ]);
  const [showWarningMessage, setShowWarningMessage] = useState(false);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const [showNetworkErrorMessage, setShowNetworkErrorMessage] = useState(false);

  const handleOnSubmit = async e => {
    e.preventDefault();
    const userInputIsACity = options.includes(userInput);

    if (userInputIsACity) {
      try {
        setJobs(undefined);
        setShowLoadingMessage(true);
        setShowNetworkErrorMessage(false);
        const city = userInput.toLowerCase();
        const nrOfResults = "100";
        const response = await axios.get(
          `/jobs?city=${city}&nrOfResults=${nrOfResults}`
        );
        const { data } = response;
        const jobResults = data["results"];
        setShowLoadingMessage(false);
        setJobs(jobResults);
      } catch (error) {
        setShowLoadingMessage(false);
        setShowNetworkErrorMessage(true);
      }
    } else {
      setUserInput("");
      setShowWarningMessage(true);
      setShowNetworkErrorMessage(false);
      setJobs();
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
        <Message type={"warning"}>
          Please submit a valid city from the dropdown
        </Message>
      )}
      {showLoadingMessage && (
        <Message type={"loading"}>
          <span role="img" aria-label="looking/thinking emoji">
            🧐
          </span>{" "}
          Getting jobs...
        </Message>
      )}
      {showNetworkErrorMessage && (
        <Message type={"warning"}>
          Sorry! We're experiencing some problems on our end. You might check
          your Internet connection.
        </Message>
      )}
    </div>
  );
};

export default withContext(Form);
