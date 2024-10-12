import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style & Icons
import "./App.scss";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Agents from "./pages/Agents";
import Settings from "./pages/Settings";

// Components
import NavBar from "./components/NavBar";

// Context
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <NavBar />
            <div className="view">
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />

                <Route path="/agents" element={<Agents />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
