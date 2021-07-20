import React, { Component } from 'react';
import './Login.css';
import axios from 'axios'
import terry from '../../assets/imgs/terry.png'


const initialState = {
    user: { name: '', email: '', password: '' },
}


// const changeDisplay = e => {
//     setRegister(false)
// }

export default class Register extends Component {

    changeDisplay(e) {
        return this.props.setRegister(false)
    }

    state = { ...initialState }

    async save(e) {
        e.preventDefault();

        const user = this.state.user

        console.log(user)
        const msg = await axios.post('/users/', user)
            .then(resp => {
                alert("Usuário cadastrado com sucesso")
            })
        this.changeDisplay(e)
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        console.log(user)
        this.setState({ user })
    }

    render() {
        return (
            <div class="page anim">
                <div class="loginContent">
                    <div className="wrapper anim" id="test">
                        <div className="login-wrapper" id="register">
                            <form>
                                <h1 className="mb-4 registerText">Registrar</h1>
                                <label className="mb-3">
                                    <p className="mb-1 registerText">Nome</p>
                                    <input className="w-100" name="name" placeholder="Digite seu nome"
                                        onChange={e => this.updateField(e)} />
                                </label>
                                <label className="mb-3">
                                    <p className="mb-1 registerText">Email</p>
                                    <input className="w-100" name="email" placeholder="Endereço de email"
                                        onChange={e => this.updateField(e)} />
                                </label>
                                <label className="mb-3">
                                    <p className="mb-1 registerText">Senha</p>
                                    <input className="w-100" name="password" placeholder="Criar senha"
                                        type="password" onChange={e => this.updateField(e)} />
                                </label>

                                <button type="button" onClick={e => this.changeDisplay(e)}>Voltar</button>
                                <button className="submit" onClick={e => this.save(e)}>Registrar</button>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={terry} alt="" />
                </div>
            </div>
        )
    }
}