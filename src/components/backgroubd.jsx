const Background = ({ type }) => {
  if (type == 'bottom') {
    return (
      <button
        type="button"
        className={`square ${winningClassName}`}
        onClick={onClick}
      >
        {value}
      </button>
    );
  } else if (type == 'top') {
    return (
      <button
        type="button"
        className={`square ${winningClassName}`}
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
};
export default Background;
