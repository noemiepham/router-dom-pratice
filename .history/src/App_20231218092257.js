import { Routes, BrowserRouter, Route } from "react-router-dom";
//import Layout from "./components/Layout/Layout";
//import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
