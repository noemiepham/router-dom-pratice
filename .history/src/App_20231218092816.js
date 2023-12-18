import { Routes, BrowserRouter, Route } from "react-router-dom";
//import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
//import Layout from "./components/Layout/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="tarif" element={<Tarif />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
