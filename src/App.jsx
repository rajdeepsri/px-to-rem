import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Lottie from "lottie-react";
import animationData from "./scroll-down-arrow.json";
import Table from "./components/Table";

const App = () => {
  const [isBtnVisible, setIsBtnVisible] = useState(true);
  const handleScrollDownBtn = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 100 ? setIsBtnVisible(false) : setIsBtnVisible(true)
    );
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-white font-poppins">
      <Navbar />
      <Section />
      <div className="cursor-pointer mr-6 absolute right-0">
        <Lottie
          animationData={animationData}
          onClick={handleScrollDownBtn}
          className="w-20"
          style={{ display: isBtnVisible ? "block" : "none" }}
        />
      </div>
      <Table />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
