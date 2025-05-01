import UserInput from '../userInputComponent/UserInput';

export default function UserInputGroup({ onInputValueChange }) {
  return (
    <div>
      <div id="user-input">
        <div className="input-group">
          <UserInput
            labelName={'Initial Investement'}
            onValueChange={() => {
              onInputValueChange('initialInvestment', +event.target.value);
            }}
          />
          <UserInput
            labelName={'Anual Investement'}
            onValueChange={() => {
              onInputValueChange('annualInvestment', +event.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <UserInput
            labelName={'Expected Return'}
            onValueChange={() => {
              onInputValueChange('expectedReturn', +event.target.value);
            }}
          />
          <UserInput
            labelName={'Duration'}
            onValueChange={() => {
              onInputValueChange('duration', +event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
