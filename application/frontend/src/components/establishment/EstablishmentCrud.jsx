import React, { Component } from 'react';
import axios from 'axios'
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Estabelecimento',
    subtitle: 'Cadastro de estabelecimento: Incluir, Alterar'
}

const initialState = {
    establishment: { register_number: '', name: '', zipcode: '', state: '', street: '', number: '',type: '', user_id: '' },
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
        establishment["user_id"]= userId
        console.log(establishment)
        // await axios.post(`/user/${userId}/establishment`, establishment)
        //     .then(resp => {
        //         alert("Estabelecimento cadastrado com sucesso")
        //     })
        // this.changeDisplay(e)
    }

    updateField(event) {
        const establishment = { ...this.state.establishment }
        establishment[event.target.name] = event.target.value
        console.log(establishment)
        this.setState({ establishment })
    }

    async getCep() {
        console.log('teste')
        const cep = {...this.state.establishment.zipcode}
        // await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        //     .then(resp => {
        //         console.log(resp)
        //     })
    }

    renderForm() {
        return (
            <div class="w-100 p-3">
                <div className="anim d-flex justify-content-flex-start">
                    <form className="" style={{width:'1100px'}}>
                        <label className="mb-3 w-25 d-block font-weight-bold">
                            <p className="mb-1">CNPJ</p>
                            <input className="w-100" name="register_number" type="text" placeholder="Informe o CNPJ"
                                onChange={e => this.updateField(e)} />
                        </label>
                        <label className="mb-3 mr-5 w-50 d-block font-weight-bold">
                            <p className="mb-1">Razão Social</p>
                            <input className="w-100" name="name" type="text" placeholder="Nome do local" maxlength="10"
                                onChange={e => this.updateField(e)} />
                        </label>
                        <label className="mb-3 w-25 d-block font-weight-bold">
                            <p className="mb-1">CEP</p>
                            <input className="w-100" name="zipcode" type="text" placeholder="Digite o CEP" maxlength="8"
                                onChange={e => this.updateField(e), this.getCep()} />
                        </label>
                        <label className="mb-3 w-25 d-inline-block font-weight-bold">
                            <p className="mb-1">Cidade</p>
                            <input className="w-100" name="city" type="text" placeholder="Informe a cidade" disabled
                                /*onChange={e => this.updateField(e)}*/ />
                        </label>
                        <label className="mb-3 ml-3 d-inline-block font-weight-bold" style={{width:'257px'}}>
                            <p className="mb-1">Estado</p>
                            <input className="w-100" name="state" type="text" placeholder="UF" disabled
                                onChange={e => this.updateField(e)} />
                        </label>
                        <label className="mb-3 w-50 d-block font-weight-bold">
                            <p className="mb-1">Rua</p>
                            <input className="w-100" name="street" type="text" placeholder="Nome da rua" maxlength="25"
                                onChange={e => this.updateField(e)} />
                        </label>
                        <label className="mb-3 w-25 d-block font-weight-bold">
                            <p className="mb-1">Nº</p>
                            <input className="w-100" name="number" type="text" placeholder="Número" maxlength="5"
                                onChange={e => this.updateField(e)} />
                        </label>
                        <label className="mb-3 w-25 d-block font-weight-bold">
                            <p className="mb-1">Tipo</p>
                            <input className="w-100" name="type" type="text" placeholder="Número"
                                onChange={e => this.updateField(e)} />
                        </label>
                        <button className="blackButton p-2 mt-1 float-right text-align-center" type="button">Cancelar</button>
                        <button className="blackButton p-2 mt-1 mr-2 float-right text-align-center" type="button" onClick={e => this.save(e)}>Confirmar</button>
                    </form>
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