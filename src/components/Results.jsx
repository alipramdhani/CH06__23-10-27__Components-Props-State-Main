import "./Result.css";
import { calculateInvestmentResults } from "../util/investment";

function Result(resultInput) {
  console.log("Result...");
  console.log(resultInput);

  const resultData = calculateInvestmentResults(resultInput);

  return <p>Result ... </p>;
}

export default Result;
