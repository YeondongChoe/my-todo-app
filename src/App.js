import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';
import { useState } from 'react';

const ChangeValueButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  border-radius: 30px;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const [count, setCount] = useState(0);
  function IncreaseValue() {
    setCount(count + 1);
  }
  function DecreaseValue() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <ButtonWrapper>
          <ChangeValueButton
            aria-label="Increment value"
            onClick={IncreaseValue}
          >
            +
          </ChangeValueButton>
          <ChangeValueButton
            aria-label="Decrement value"
            onClick={DecreaseValue}
          >
            -
          </ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
