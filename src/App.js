import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import { Carousel } from "./components/carousel";
import DisplaySuggestedDrinks from "./components/displaySuggestedDrinks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Carousel />}></Route>
        <Route path="/mixedDrinks" element={<DisplaySuggestedDrinks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
