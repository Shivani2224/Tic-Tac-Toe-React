import { useState } from "react";
export default function Player({ initialName, symbol ,isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [editing, isEditing] = useState(false);

  function handleEditClick() {
    isEditing(editing ? false : true);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;

  if (editing) {
    editableplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive? "active": undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!editing ? "Edit" : "Save"}</button>
    </li>
  );
}
