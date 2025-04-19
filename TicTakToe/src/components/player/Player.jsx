import { useState } from 'react';

export default function Player({ playerName, playerSymbol, isActive, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState(playerName);

  function handleEditClick() {
    if (isEditing) {
      onSave(newPlayerName, playerSymbol);
    }
    setIsEditing((editing) => !editing);
  }

  function handleInputChange(event) {
    setNewPlayerName(event.target.value);
  }

  let playerContent = <span className="player-name">{newPlayerName}</span>;

  if (isEditing) {
    playerContent = (
      <input
        type="text"
        value={newPlayerName}
        required
        onChange={handleInputChange}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{playerSymbol}</span>
        <button
          onClick={() => {
            handleEditClick();
          }}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </span>
    </li>
  );
}
