import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { Login } from "./pages/login";
import { SignIn } from "./pages/signin";
import ContentPage from "./pages/ContentPage";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/ContentPage" element={<ContentPage />} />
        </Routes>
      </Router>
      {/* <HomePage /> */}
      {/* <ContentPage /> */}
    </div>
  );
}

export default App;
