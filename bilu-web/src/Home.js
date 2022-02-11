import {useState} from 'react';

const Home = () => {
  // let name = `John`;
  const [name, setName] = useState(`John`);
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = `George`;
    setName('George');
    setAge(23);
  };

  return (
      <div className="Home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old.</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
  );
};

export default Home;
