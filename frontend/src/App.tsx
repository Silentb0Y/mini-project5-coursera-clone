import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { Login } from "./pages/login";
import { SignIn } from "./pages/signin";
import ContentPage from "./pages/ContentPage";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./pages/NavScrollExample";
function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/ContentPage" element={<ContentPage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      {/* <HomePage /> */}
      {/* <ContentPage /> */}
    </div>
  );
}

export default App;
