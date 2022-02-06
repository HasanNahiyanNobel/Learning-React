import './App.css';

function App() {
  const title = `Welcome to the New Blog`;
  const likes = 50;
  /*const person = {
    name: `John`,
    age: 40,
  }*/ // Using objects or booleans inside jsx won't work
  const link = `https://www.google.com`;

  return (
      <div className="App">
        <div className="content">
          <h1>{title}</h1>
          <p>Likes {likes} times.</p>
          <p>{10}</p>
          <p>{`Hello, Jude`}</p>
          <p>{[1, 2, 3, 4, 5]}</p>
          <p>{Math.random() * 10}</p>
          <a href={link}>Google Site</a> {/* Note: href is not followed by double quotes! */}
        </div>
      </div>
  );
}

export default App;
