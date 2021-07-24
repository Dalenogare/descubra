import React, { Component } from 'react';
import axios from 'axios'
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Estabelecimento',
    subtitle: 'Cadastro de estabelecimento: Incluir, Alterar'
}

const initialState = {
    establishment: { register_number: '', name: '', zipcode: '', state: '', street: '', number: '', user_id: '' },
}


export default class EstablishmentCrud extends Component {

    changeDisplay(e) {
        return this.props.setRegister(false)
    }

    state = { ...initialState }

    async save(e) {
        e.preventDefault();
        const establishment = this.state.establishment
        const userId = JSON.parse(sessionStorage.getItem('token')).token
        establishment.id = userId
        console.log(establishment)
        await axios.post(`/user/${userId}/establishment`, establishment)
            .then(resp => {
                alert("Estabelecimento cadastrado com sucesso")
            })
        this.changeDisplay(e)
    }

    updateField(event) {
        const establishment = { ...this.state.establishment }
        establishment[event.target.name] = event.target.value
        console.log(establishment)
        this.setState({ establishment })
    }

    renderForm() {
        return (
            <div class="w-100">
                <div className="wrapper anim w-55" id="test">
                    <div className="anim d-flex justify-content-flex-start">
                        <form>
                            <label className="mb-3 d-block">
                                <p className="mb-1 loginText">Email</p>
                                <input className="w-100" type="text" placeholder="Digite seu email"
                                    onChange={e => this.updateField(e)} />
                            </label>
                            <label className="mb-3 d-block">
                                <p className="mb-1 loginText">Senha</p>
                                <input className="w-100" type="password" placeholder="Digite sua senha"
                                    onChange={e => this.updateField(e)} />
                            </label>
                            <button className="blackButton p-2 mt-1 float-right text-align-center" type="button">Registrar</button>
                            <button className="blackButton p-2 mt-1 mr-2 float-right text-align-center" type="button">Entrar</button>
                        </form>
                    </div>
                </div>
        </div>
        )
    }
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}