import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style & Icons
import "./App.scss";

// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";

// Components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="view">
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
