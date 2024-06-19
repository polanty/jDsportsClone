import { dataretriever } from "../../Utilities/cloudfile";
import { useEffect, useState } from "react";
import {
  NavLink,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import AllProducts from "../All-Products/AllProduct";
import GenericPage from "../../components/GenericPage/GenericPage.component";

const WomenRoute = () => {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  const location = useLocation();

  // Extract the pathname from the location object
  const pathname = location.pathname;

  // Extract the route name from the pathname
  const routeName = pathname.substring(1);

  useEffect(() => {
    const getCollections = async () => {
      const categoryMap = await dataretriever();
      setData(categoryMap);
    };

    return getCollections;
  }, []);

  // console.log(data);

  return (
    <>
      <Routes>
        <Route index element={<GenericPage routeName={routeName} />}></Route>
        <Route path=":allproducts" element={<AllProducts />}></Route>
      </Routes>
    </>
  );
};

export default WomenRoute;
