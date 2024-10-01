import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

//CSS
import './SignUp.scss'

function SignUp() {

  const navigate = useNavigate();

    const goHome = () =>{
        navigate('/')
    }

  return (
    <div className="sign">

      <div className="back-page" onClick={goHome}>
        <LuArrowLeft />
      </div>
      <div className="container-sign">

        <div className="logo">
          <h1>Incrivelmente <br/> Orlando</h1>
        </div>

        <form action="">
           <div className="input-group">
              <input type="email" id='email' required autoComplete='off' />
              <span>Email</span>
           </div>

           <div className="input-group">
              <input type="text" id='name' required autoComplete='off' />
              <span>Nome Completo</span>
           </div>

           <div className="btn-send">
              <button type='submit'>Redefinir Senha</button>
           </div>
        </form>

      </div>
    </div>
  )
}

export default SignUp