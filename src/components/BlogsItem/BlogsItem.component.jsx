import "./BlogsItem.styles.css";

const Blog = ({ image, title, content }) => {
  return (
    <div className="blog-container">
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Blog;
