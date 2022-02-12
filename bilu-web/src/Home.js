import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This setTimeout is just to simulate the real-world scenario
    setTimeout(() => {
      fetch(`http://localhost:8000/blogs`).then(res => {
            console.log(res);
            if (!res.ok) {
              throw Error(`Could not fetch data for that resource.`);
            }
            return res.json();
          },
      ).then(data => {
        setBlogs(data);
        setError(null);
        setIsPending(false);
      }).catch(err => {
        setError(err.message);
        setIsPending(false);
      });
    }, 1000);
  }, []);

  return (
      <div className="Home">
        {
            error &&
            <div>{error}</div>
        }
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
