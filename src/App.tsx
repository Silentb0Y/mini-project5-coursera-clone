import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { SignIn } from './pages/signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <RoutLogine path='/' element={<Login setUserId={setUserId}/>}/> */}
          <Route path='/' element={<Login />}/>
          <Route path='/signIn' element={<SignIn />}/>
          {/* <Route path='/chat' element={<ChatPage UserId={UserId} UserName={UserName} />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
