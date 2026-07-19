import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import AreasOfExpertise from "../pages/areas-of-expertise/AreasOfExpertise";
import Gallery from "../pages/gallery/Gallery";
import Feeds from "../pages/feeds/Feeds";
import Contact from "../pages/contact/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/areas-of-expertise" element={<AreasOfExpertise />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/feeds" element={<Feeds />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
