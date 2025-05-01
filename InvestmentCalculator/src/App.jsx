import { useState } from 'react';
import { Header } from './Components/headerComponent/Header';
import Result from './Components/resultComponent/Result';
import UserInputGroup from './Components/userInputGroupComponent/userInputGroup';
import { calculateInvestmentResults } from './util/investment';

const INVESTMENT_DETAILS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [investmentDetails, setInvestmentDetails] =
    useState(INVESTMENT_DETAILS);

  const isValid = investmentDetails.duration > 0;

  function handleValueChange(fieldIdentifier, value) {
    setInvestmentDetails((prevDetails) => {
      return { ...prevDetails, [fieldIdentifier]: value };
    });
  }

  const calculatedAnnualData = calculateInvestmentResults(investmentDetails);

  return (
    <>
      <Header />;
      <UserInputGroup onInputValueChange={handleValueChange} />
      {!isValid && <p className="center"> Duration must be greater than 0</p>}
      {isValid && <Result data={calculatedAnnualData} />}
    </>
  );
}

export default App;
