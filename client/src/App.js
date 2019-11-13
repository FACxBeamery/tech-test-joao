import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Form from "./components/Form";
import Autocomplete from "./components/Autocomplete";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header>Job Search Engine</Header>
      <main className={styles["main"]}>
        <SubHeader>
          Find relevant job posts in a UK city of your preference
        </SubHeader>
        <Autocomplete
          options={[
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
          ]}
        />
      </main>
    </div>
  );
}

export default App;
