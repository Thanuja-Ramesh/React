import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const App = () => {
  console.log("App Component");

  return (
    <>
      <NavBar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/help" element={<Help />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default App;