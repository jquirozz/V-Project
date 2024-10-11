import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style & Icons
import "./App.scss";

// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Settings from "./pages/Settings";

// Components
import NavBar from "./components/NavBar";

// Context
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <NavBar />
          <div className="view">
            <Routes>
              <Route path="*" element={<Error />} />
              <Route path="/" element={<Home />} />

              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
