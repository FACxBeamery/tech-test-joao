import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";
import Form from "./components/Form";
import JobsList from "./components/JobList";
import styles from "./App.module.css";

import Provider from "./components/Provider";

function App() {
  return (
    <div className={styles["app"]}>
      <Header>Job Search Genie</Header>

      <main className={styles["main"]}>
        <SubHeader>
          Find relevant job posts in a UK city of your preference
        </SubHeader>

        <Provider>
          <Form />
          <JobsList />
        </Provider>
      </main>
      <Footer>2019 - João Viana</Footer>
    </div>
  );
}

export default App;
