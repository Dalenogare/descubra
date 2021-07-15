import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import axios from 'axios'

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
            alert('Senha incorreta seu animal de teta')
        }

        else {
            e.preventDefault();
            const token = await loginUser({
                username,
                password
            });
            setToken(token);
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
        if (login) {
            var element = document.getElementById("login")
            element.classList.add("d-none")
            var element = document.getElementById("register")
            element.classList.remove("d-none")
            login = !login
        }

        else {
            var element = document.getElementById("login")
            element.classList.remove("d-none")
            var element = document.getElementById("register")
            element.classList.add("d-none")
            login = !login
        }
    }

        return (
            <div>
                <div className="login-wrapper" id="login">
                    <h1>Please login</h1>
                    <form>
                        <label>
                            <p>Email</p>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <div>
                            <button type="button" onClick={e => handleSubmit(e)}>Submit</button>
                            <button type="button" onClick={e => changeDisplay(e)}>Registrar</button>
                        </div>
                    </form>
                </div>
                <div className="login-wrapper d-none" id="register">
                    <h1>Please Register</h1>
                    <form onSubmit={handleRegister}>
                        <label>
                            <p>Nome</p>
                            <input type="name" onChange={(e) => setUserName(e.target.value)} />
                        </label>
                        <label>
                            <p>Email</p>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <div>
                            <button type="submit">Registrar</button>
                            <button type="button" onClick={e => changeDisplay(e)}>Voltar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
