import { NavLink } from "react-router-dom";
import { AllProductImages } from "../../assets/AllImages/AllImagesObject/AllImagesObject";
import "../Blogs/Blogs.css";

const PageBlogContainer = () => {
  const { blogs } = AllProductImages;

  const { CouraselImagesLink } = blogs;

  return (
    <>
      <div className="blogs__container">
        <h1 className="LogoList-title">Discover</h1>

        <div className="blogs__Inner-container">
          {CouraselImagesLink.map((images, ind) => {
            return (
              <div key={ind} className="Blog-container">
                <NavLink to="/BlogsRoute" className="Blogs-link">
                  <div className="Blog_Img-container">
                    {/* <img src={images} alt="Blog_Img" /> */}

                    <img src={images} alt="Blog_Img" className="Blog_Img" />
                  </div>
                  <div className="blog_content">
                    <h2 className="blog_header">
                      ONLY AT JD: An Exclusive Club
                    </h2>
                    <p className="blog_snapshot">
                      It’s the season of exclusives! Level up in the latest
                      looks that you won’t find anywhere else.
                    </p>
                    <p className="blog_navlink">Find out more...</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PageBlogContainer;
