import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Pages
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </Router>
    
    </>

  )
}

export default App