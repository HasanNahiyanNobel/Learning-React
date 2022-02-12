import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // This setTimeout is just to simulate the real-world scenario
    setTimeout(() => {
      fetch(`http://localhost:8000/blogs`).then(res => {
            return res.json();
          },
      ).then(data => {
        setBlogs(data);
        setIsPending(false);
      });
    }, 1000);
  }, []);

  return (
      <div className="Home">
        {
            isPending &&
            <div>Loading...</div>
        }
        {
            blogs &&
            <BlogList blogs={blogs} title="All Blogs"/>
        }
      </div>
  );
};

export default Home;
