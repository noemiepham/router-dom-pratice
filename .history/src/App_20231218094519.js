import { Routes, BrowserRouter, Route } from "react-router-dom";
//import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
