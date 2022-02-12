import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'john', id: 1},
    {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'john', id: 3},
  ]);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => id !== blog.id);
    setBlogs(newBlogs);
  };

  return (
      <div className="Home">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter(blog => blog.author === `john`)}
                  title="John's Blogs" handleDelete={handleDelete}/>
      </div>
  );
};

export default Home;
