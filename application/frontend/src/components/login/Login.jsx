import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import axios from 'axios'
import terry from '../../assets/imgs/terry.png'
import Register from './Register'
export default function Login({ setToken, setRegister }) {

    async function loginUser(credentials) {
        const login = await axios.post('http://localhost:3333/login', credentials)
            .then(resp => resp.data)
        return login
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        const user = await axios.get(`/users/${email}`)
            .then(resp => {
                return (resp.data)
            })

        if (!user) {
            alert('Usuário não cadastrado')
        }

        else if (user.password != password) {
            alert('Senha incorreta')
        }

        else {
            e.preventDefault();
            const token = await loginUser({
                email,
                password
            });
            setToken(token);
            alert('Login efetuado com sucesso')
        }
    }

    const changeDisplay = e => {
        setRegister(true)
    }

    return (
        <div class="page anim">
            <div class="loginContent">
                <div className="wrapper anim" id="test">
                    <div className="login-wrapper anim" id="login">
                        <form>
                            <h1 className="mb-4 loginText">Entrar</h1>
                            <label className="mb-3">
                                <p className="mb-1 loginText">Email</p>
                                <input className="w-100" type="text" placeholder="Digite seu email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label className="mb-3">
                                <p className="mb-1 loginText">Senha</p>
                                <input className="w-100" type="password" placeholder="Digite sua senha"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <button type="button" onClick={e => changeDisplay(e)}>Registrar</button>
                            <button className="submit" type="button" onClick={e => handleSubmit(e)}>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="image">
                {/* <img src={terry} alt="" /> */}
            </div>
        </div>
    )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired,
    setRegister: PropTypes.func.isRequired
}
