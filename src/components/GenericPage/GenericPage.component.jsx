import "../GenericPage/GenericPage.css";
import { NavLink } from "react-router-dom";
import CouraselContainer from "../Courael-container/CouraselContainer.components";

const GenericPage = ({ routeName }) => {
  return (
    <>
      <div className="genericpage-container">
        <div className="genericadvert-banner">advertisement</div>
        <div className="generic-title__container">
          <span className="generic-home-link">
            <NavLink to="/">Home</NavLink>
            <h1 style={{ color: "red" }}>{routeName}</h1>
          </span>
          <h2 className="generic-title">Title</h2>
        </div>
        <div className="generic-categories">
          <NavLink to={routeName}>Categories</NavLink>
        </div>
        <CouraselContainer />
      </div>
    </>
  );
};

export default GenericPage;
