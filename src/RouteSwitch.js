import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Headphones from "./Headphones";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;