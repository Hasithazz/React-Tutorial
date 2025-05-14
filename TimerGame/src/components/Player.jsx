import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredName, setEnteredName] = useState('');

  function handleOnClick() {
    setEnteredName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
