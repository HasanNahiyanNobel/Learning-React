const Home = () => {
  const handleClick = () => {
    alert(`Hello, Jude!`);
  };
  const handleClickAgain = (name) => {
    alert(`Hello ${name}!`);
  };

  return (
      <div className="Home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClickAgain(`John`)}>Click Me Again
        </button>
      </div>
  );
};

export default Home;
