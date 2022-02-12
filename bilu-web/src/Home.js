import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: `My new website`, body: `lorem ipsum...`, author: `John`, id: 1},
    {title: `Welcome party!`, body: `lorem ipsum...`, author: `Paul`, id: 2},
    {title: `Web dev top tips`, body: `lorem ipsum...`, author: `John`, id: 3},
  ]);

  const [name, setName] = useState('George');

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => id !== blog.id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    alert(`useEffect ran!`);
  }, [name]);

  return (
      <div className="Home">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter(blog => blog.author === `John`)}
                  title="John's Blogs" handleDelete={handleDelete}/>
        <button onClick={() => setName(`Ringo`)}>Change Name</button>
        <p>{name}</p>
      </div>
  );
};

export default Home;
