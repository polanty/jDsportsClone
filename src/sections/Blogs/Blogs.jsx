import { NavLink } from "react-router-dom";
import "../Blogs/Blogs.css";

const PageBlogContainer = () => {
  return (
    <>
      <div className="brands__container">
        <h1 className="LogoList-title">Discover</h1>

        <div className="Blog-container">
          <NavLink className="Blogs-link">
            <img src="" alt="Blog_Img" />
            <div className="blog_content">
              <h2 className="blog_header">BLOG HEADING</h2>
              <p className="blog_snapshot">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Loremipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="blog_navlink">Find out more...</p>
            </div>
          </NavLink>

          <NavLink className="Blogs-link">
            <img src="" alt="Blog_Img" />
            <div className="blog_content">
              <h2 className="blog_header">BLOG HEADING</h2>
              <p className="blog_snapshot">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Loremipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="blog_navlink">Find out more...</p>
            </div>
          </NavLink>

          <NavLink className="Blogs-link">
            <img src="" alt="Blog_Img" />
            <div className="blog_content">
              <h2 className="blog_header">BLOG HEADING</h2>
              <p className="blog_snapshot">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Loremipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="blog_navlink">Find out more...</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PageBlogContainer;
