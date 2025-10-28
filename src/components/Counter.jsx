const Counter = ({ count, setCount }) => {
  const handleColor = () => {
    switch (true) {
      case count === 0:
        return "black";
      case count > 0:
        return "green";
      case count < 0:
        return "red";
      default:
        return "black";
    }
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div style={{ color: handleColor() }}>{count}</div>
    </div>
  );
};

export default Counter;
