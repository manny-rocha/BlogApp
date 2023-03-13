const Blog = ({ blog }) => (
  <div>
    <ul>
      {blog.title}
      {blog.author}
      {blog.url}
      {blog.likes}
    </ul>
  </div>
)

export default Blog