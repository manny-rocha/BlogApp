import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardHeader, CardBody, Heading, Text, CardFooter, Link } from '@chakra-ui/react';
import { likeBlog, deleteBlog } from '../../reducers/blogReducer';
import Comments from '../Comments/Comments';

import './styles.css';


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
    <Card className='container' pl={2} w='100%' mt={2}>
      <CardHeader className='heading'>
        <Heading as='h2'>{blog.title}</Heading>
      </CardHeader>
      <div className="blog-details">
        <Text>Author: {blog.author}</Text>
        <Text>URL: <Link href={blog.url}>{blog.url}</Link></Text>
        <Text>Likes: {blog.likes}</Text>
      </div>
      <div className="blog-buttons">
        {' '}
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleLike}
        >
          Like
        </Button>{' '}
        {user.username === blog.user.username && (
          <Button size="sm" colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </div>
      <Text className="blog-details">
        Added by <strong>{blog.user.name}</strong>
      </Text>
      <Comments blog={blog} />
    </Card>
  );
};

export default Blog;
