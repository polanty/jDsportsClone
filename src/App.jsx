import React from "react";
// import ReactDOM from "react-dom/client";

import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Navigation } from "./Navigation";
import Home from "./Home";
import ScrollToTop from "./Utilities/scrollToTop/ScrollToTop.utility";

// import Shop from "./Shop";
// import Checkout from "./Checkout";
import MenRoute from "./Categories/Category-men/CategoryMen.routes";
import WomenRoute from "./Categories/Category-women/CategoryWomen.routes";
import KidsRoute from "./Categories/Category-Kids/CategoryKids.routes";
import BrandRoute from "./Categories/Category-brands/CategoryBrands.routes";
import AccessoryRoute from "./Categories/Category-accessories/CategoryAccessories.routes";
import Checkout from "./Checkout";
import ProductView from "./ProductView";
import BlogsRoute from "./BlogsPage";
import SearchResultPage from "./SearchResultPage";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="men/*" element={<MenRoute />}></Route>
          <Route path="women/*" element={<WomenRoute />}></Route>
          <Route path="kids/*" element={<KidsRoute />}></Route>
          <Route path="brands/*" element={<BrandRoute />}></Route>
          <Route path="accessories/*" element={<AccessoryRoute />}></Route>
          <Route path="productView" element={<ProductView />}></Route>
          <Route path="Checkout" element={<Checkout />}></Route>
          <Route path="BlogsRoute" element={<BlogsRoute />}></Route>
          <Route path="SearchResultPage" element={<SearchResultPage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}
