import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import axios from 'axios'
import terry from '../../assets/imgs/terry.png'

let login = true

export default function Login({ setToken }) {

    async function loginUser(credentials) {
        //     return fetch('http://localhost:3333/login', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify(credentials)
        //     })
        //       .then(data => data.json())
        //    }
        const login = await axios.post('http://localhost:3333/login', credentials)
            .then(resp => resp.data)
        return login
    }

    const [username, setUserName] = useState();
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
                username,
                password
            });
            setToken(token);
            alert('Login efetuado com sucesso')
        }
    }

    const handleRegister = async e => {
        e.preventDefault();

        const user = {
            name: username,
            email: email,
            password: password
        }
        console.log(user)
        const msg = await axios.post('/users/', user)
            .then(resp => {
                alert("Usuário cadastrado com sucesso")
            })
        changeDisplay()
    }

    const changeDisplay = e => {
        
        const loginElement = document.getElementById("login")
        login ? loginElement.classList.add("d-none") : loginElement.classList.remove("d-none")
        login ? loginElement.classList.remove("anim") : loginElement.classList.add("anim")

        const registerElement = document.getElementById("register")
        login ? registerElement.classList.remove("d-none") : registerElement.classList.add("d-none")
        login ? registerElement.classList.add("anim") : registerElement.classList.remove("anim")

        login = !login
    }

    return (
        <div class="page anim">
            <div class="loginContent">
                <div className="wrapper anim" id="test">
                    <div className="login-wrapper anim" id="login">
                        <form>
                            <h1 className="mb-5 loginText">Entrar</h1>
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

                    <div className="login-wrapper d-none" id="register">
                        <form onSubmit={handleRegister}>
                            <h1 className="mb-4 loginText">Registrar</h1>
                            <label className="mb-3">
                                <p className="mb-1 loginText">Nome</p>
                                <input className="w-100" type="name" placeholder="Digite seu nome"
                                    onChange={(e) => setUserName(e.target.value)} />
                            </label>
                            <label className="mb-3">
                                <p className="mb-1 loginText">Email</p>
                                <input className="w-100" type="email" placeholder="Endereço de email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label className="mb-3">
                                <p className="mb-1 loginText">Senha</p>
                                <input className="w-100" type="password" placeholder="Criar senha"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </label>

                            <button type="button" onClick={e => changeDisplay(e)}>Voltar</button>
                            <button className="submit" type="submit">Registrar</button>

                        </form>
                    </div>
                </div>
            </div>
            <div class="image">
                <img src={terry} alt="" />
            </div>
        </div>
    )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
