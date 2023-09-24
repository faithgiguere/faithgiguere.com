import React, { useEffect } from "react";
import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Home from "./pages/Home";
import AutostereogramGenerator from "./pages/AutostereogramGenerator";
import HybridImages from "./pages/HybridImages";
import ImageAlignment from "./pages/ImageAlignment";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/autostereogram" element={<AutostereogramGenerator />} />
          <Route path="/projects/hybridimages" element={<HybridImages />} />
          <Route path="/projects/imagealignment" element={<ImageAlignment />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
