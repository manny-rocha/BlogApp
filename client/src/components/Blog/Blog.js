import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Heading, Link, Text } from "@chakra-ui/react";
import { likeBlog, deleteBlog } from "../../reducers/blogReducer";
import Comments from "../Comments/Comments";

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
      navigate("/");
    }
  };

  return (
    <div className="contentContainer" >
      <Heading size="lg">
        {blog.title} - {blog.author}
      </Heading>
      <Text className="blog-details">
        <Link href={blog.url} isExternal>
          {blog.url}
        </Link>
      </Text>
      <Text className="blog-details">
        {blog.likes} likes{" "}
        <Button size="sm" colorScheme="blue" onClick={handleLike}>
          Like
        </Button>{" "}
        {user.username === blog.user.username && (
          <Button size="sm" colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </Text>
      <Text className="blog-details">
        Added by <strong>{blog.user.name}</strong>
      </Text>
      <Comments blog={blog} user={user} />
    </div>
  );
};

export default Blog;
