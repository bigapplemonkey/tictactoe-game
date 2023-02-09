const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is <span className="text-white">{winner}</span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-white">O</span> and{' '}
          <span className="text-white">X</span> tied
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next player is <span className="text-white">{nextPlayer}</span>
        </>
      );
    }
    return null;
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};
export default StatusMessage;
