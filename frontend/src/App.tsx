import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { Login } from './pages/login';
import { SignIn } from './pages/signin';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signIn' element={<SignIn />}/>
        </Routes>
      </Router> */}
      <HomePage/>
    </div>
  );
}

export default App;
