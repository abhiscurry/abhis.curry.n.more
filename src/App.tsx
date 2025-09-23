import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FoodMenu from "./components/FoodMenu";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div className="root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<FoodMenu />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route
            path="*"
            element={
              <div className="p-4">
                <h1>404 - Not Found</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
