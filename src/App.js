
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { paytm_routes } from "./configs/routes-config";

function App() {
  return <BrowserRouter>
    <Routes>
      {
        paytm_routes.map((item) => {
          return <Route path={item.path} element={item.component} />
        })
      }
    </Routes>
  </BrowserRouter>
}

export default App;
