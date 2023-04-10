import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardHeader, Heading } from '@chakra-ui/react';
import { likeBlog, deleteBlog } from '../../reducers/blogReducer';
import Comments from '../Comments/Comments';

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blog = useSelector((state) => state.blogs.find((b) => b.id === id));
  const user = useSelector((state) => state.login);

  if (!blog) return null;

  const handleLike = () => {
    const { id } = blog;
    const blogToUpdate = { ...blog, likes: blog.likes + 1, user: blog.user.id };
    dispatch(likeBlog(id, blogToUpdate));
  };

  const handleDelete = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      dispatch(deleteBlog(blog));
      navigate('/');
    }
  };

  return (
    <Card>
      <CardHeader>
        <Heading as='h2'>{blog.title} | {blog.author}</Heading>
      </CardHeader>
      <div className="blog-details">
        <a href={blog.url}>{blog.url}</a>
      </div>
      <div className="blog-details">
        {blog.likes} likes{' '}
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleLike}
        >
          Like
        </Button>{' '}
        {user.username === blog.user.username && (
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
      </div>
      <div className="blog-details">
        Added by <strong>{blog.user.name}</strong>
      </div>
      <Comments blog={blog} />
    </Card>
  );
};

export default Blog;
