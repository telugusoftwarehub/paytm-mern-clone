
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { paytm_routes } from "./configs/routes-config";
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {

  return <GoogleOAuthProvider clientId="63718728436-40c0r68jpna93i3uggcsucdlrvqmjdg4.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        {
          paytm_routes.map((item) => {
            return <Route path={item.path} element={item.component} />;
          })
        }
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
}

export default App;
