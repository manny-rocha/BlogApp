import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../../reducers/blogReducer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

// import "./formStyles.css";

const BlogForm = ({ togglableRef }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const handleCreateBlog = async (event) => {
    event.preventDefault();
    togglableRef.current.toggleVisibility();

    const newBlog = {
      title,
      author,
      url,
    };

    setTitle("");
    setAuthor("");
    setUrl("");

    dispatch(createBlog(newBlog));
  };


  return (
    <div className="blogForm">
      <h2>Create new blog</h2>
      <form onSubmit={handleCreateBlog}>
        <div>
          <span className="p-float-label">
            <InputText id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="title">Title</label>
          </span>
        </div>
        <div>
          <span className="p-float-label">
            <InputText id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <label htmlFor="author">Author</label>
          </span>
        </div>
        <div>
          <span className="p-float-label">
            <InputText id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
            <label htmlFor="url">URL</label>
          </span>
        </div>
        <Button label="Create" className="p-button-raised p-button-primary" type="submit" />
      </form>
    </div>
  );
};

export default BlogForm;
