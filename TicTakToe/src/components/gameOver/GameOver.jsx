export default function GameOver({ winner, onRematchSelect }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won</p>}
      {!winner && <p>It's a Draw</p>}
      <button onClick={onRematchSelect}>Rematch</button>
    </div>
  );
}
