// export default App;
import React from "react";
// import ImageSlider from "../src/page/ImageSlider";
// import WhyChooseUs from "./page/WhyChooseUs";
// import HalfPageLayout from "../../mentor/src/file/HalfPageLayout";
import Header from "../src/page/Header";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../src/page/Home";
const App = () => {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router> */}
      <Header />
    </div>
  );
};

export default App;
