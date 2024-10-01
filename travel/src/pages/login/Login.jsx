import React from 'react'
import { LuLightbulb, LuLightbulbOff } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

//CSS
import './login.scss'

function Login() {

    const navigate = useNavigate();

    const goSign = () =>{
        navigate('/signUp')
    }
  return (
    <div className="login">

        <div className="light-mode">
            <LuLightbulb />
        </div>
        <div className="container-login">

            <div className="logo">
                <h1>Incrivelmente <br/> Orlando</h1>
            </div>

            <form>

                <div className="input-group">
                    <input type="email" id='email' required autoComplete='off' />
                    <span>Email</span>
                </div>
                <div className="input-group">
                    <input type="password" id='password' required autoComplete='off' />
                    <span>Senha</span>
                </div>

                <div className="line"></div>

                <div className="btn-send">
                    <button type='submit'>Acessar</button>
                </div>

            </form>

            <div className="forget-password">
                <p>Esqueceu sua senha? <span onClick={goSign}>Redefinir senha</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login