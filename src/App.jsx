// import { Fragment } from "react"; //solusi supaya code tidak banyak <div>
import { useState } from "react";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Result from "./components/Results";

function App() {
  // using array descrtucturing
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10,
  });

  const durationIsValid = userInput.duration > 0;

  // created dinamis funtion
  function handleUserInput(inputKey, newValue) {
    setUserInput((existingUserInput) => {
      return {
        ...existingUserInput,
        [inputKey]: +newValue,
      };
    });
  }
  return (
    // react fragment --> <> atau <Fragment>
    <>
      <Header />
      <Calculator onChangeProps={handleUserInput} userInput={userInput} />
      {/* <Result resultInput={userInput} /> */}

      {!durationIsValid && (
        <p style={{ textAlign: "center" }}>Masukkan Durasi diatas 0</p>
      )}
      {durationIsValid && <Result resultInput={userInput} />}
    </>
  );
}

export default App;
