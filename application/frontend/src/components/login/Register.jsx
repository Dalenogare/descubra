import React, { Component } from 'react';
import '../../main/Forms.css';
import axios from 'axios'
import terry from '../../assets/imgs/terry.png'


const initialState = {
    user: { name: '', email: '', password: '' },
}


export default class Register extends Component {

    changeDisplay(e) {
        return this.props.setRegister(false)
    }

    state = { ...initialState }

    async save(e) {
        e.preventDefault();

        const user = this.state.user

        console.log(user)
        await axios.post('/users/', user)
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
            <div className="page anim w-100">
                <div className="d-flex flex-column w-75 justify-content-center align-items-center">
                    <div className="wrapper anim w-55" id="test">
                        <div className="anim d-flex justify-content-center
                        align-items-center overflow-hidden">
                            <form>
                                <h1 className="mb-4 registerText">Registrar</h1>
                                <label className="mb-3 d-block">
                                    <p className="mb-1 registerText">Nome</p>
                                    <input className="w-100" name="name" placeholder="Digite seu nome"
                                        onChange={e => this.updateField(e)} />
                                </label>
                                <label className="mb-3 d-block">
                                    <p className="mb-1 registerText">Email</p>
                                    <input className="w-100" name="email" placeholder="Endereço de email"
                                        onChange={e => this.updateField(e)} />
                                </label>
                                <label className="mb-3 d-block">
                                    <p className="mb-1 registerText">Senha</p>
                                    <input className="w-100" name="password" placeholder="Criar senha"
                                        type="password" onChange={e => this.updateField(e)} />
                                </label>

                                <button className="blackButton p-2 mt-1 float-right text-align-center" type="button" onClick={e => this.changeDisplay(e)}>Voltar</button>
                                <button className="blackButton p-2 mt-1 mr-2 float-right text-align-center" onClick={e => this.save(e)}>Registrar</button>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={terry} alt="" className="w-100 h-100 float-right"/>
                </div>
            </div>
        )
    }
}