import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";

const App = () => {
  return (
    /* infaut installer react dom router

  "npm i -D react-router-dom@latest"
  
  */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
