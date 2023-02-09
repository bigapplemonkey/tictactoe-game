const Square = ({ value, onClick, isWinningSquare }) => {
  const winningClassName = isWinningSquare ? 'winning' : '';

  return (
    <button
      type="button"
      className={`square ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
