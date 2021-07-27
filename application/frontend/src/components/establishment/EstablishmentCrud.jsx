import React, { Component } from 'react';
import axios from 'axios'
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Estabelecimento',
    subtitle: 'Cadastro de estabelecimento: Incluir, Alterar'
}

const initialState = {
    establishment: { register_number: '', name: '', zipcode: '', state: '', city: '', street: '', number: '', type: '', user_id: '' },
    alreadyRegistered: false
}


export default class EstablishmentCrud extends Component {

    changeDisplay(e) {
        return this.props.setRegister(false)
    }

    state = { ...initialState }

    async componentDidMount() {
        const user_id = JSON.parse(sessionStorage.getItem('token')).token
        const data = await axios.get(`/users/${user_id}/establishment`)
        .then(resp => {
            return resp.data
        })
        const {register_number, name, zipcode, state, city, street, number, type} = data
        this.state.establishment.register_number = register_number
        this.state.establishment.name = name
        this.state.establishment.zipcode = zipcode
        this.state.establishment.state = state
        this.state.establishment.city = city
        this.state.establishment.street = street
        this.state.establishment.number = number
        this.state.establishment.type = type
        this.state.establishment.user_id = user_id

        if(name) {
            this.state.alreadyRegistered = true
            this.blockInputs()
        }
        
        this.setState( {establishment: this.state.establishment, alreadyRegistered: this.state.alreadyRegistered} )
    }

    clear() {
        this.setState({ establishment: initialState.establishment })
    }

    async save(e) {
        e.preventDefault();
        // const establishment = this.state.establishment
        // const userId = JSON.parse(sessionStorage.getItem('token')).token
        // establishment["user_id"] = userId
        // console.log(establishment)
        this.state.alreadyRegistered = true
        this.blockInputs()
        }

    blockInputs() {
        if (this.state.alreadyRegistered) {
            const inputs = document.getElementsByTagName("input")
        console.log(inputs.length)
        for(const i in inputs) {
            if(i < 8){
            inputs[i].setAttribute("disabled", "disabled")
            }
        }
        }
    }

    updateField(event) {
        const establishment = { ...this.state.establishment }
        establishment[event.target.name] = event.target.value
        this.setState({ establishment })
        console.log(establishment)
        if(event.target.name == 'zipcode'){
            this.getCep(establishment.zipcode)
        }
    }

    async getCep(zipcode) {
        if(zipcode.length === 8) {
        const establishment = { ...this.state.establishment }
        const address = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
            .then(resp => {
                return resp.data
            })
        if(!address.erro) {
            establishment.state = address.uf
            establishment.street = address.logradouro
            establishment.city = address.localidade
            this.setState({ establishment })
            console.log(this.state.establishment)
        }
        else{
            alert("CEP INVÁLIDO")
            establishment.state = ''
            establishment.street = ''
            establishment.city = ''
            establishment.zipcode = ''
            this.setState({ establishment })
            console.log(this.state.establishment)
        }

    }
}


renderForm() {
    return (
        <div className="w-100 p-3">
            <div className="anim d-flex justify-content-flex-start">
                <form className="" style={{ width: '1100px' }}>
                    <label className="mb-3 w-25 d-block font-weight-bold">
                        <p className="mb-1">CNPJ</p>
                        <input className="w-100" name="register_number" type="text" placeholder="Informe o CNPJ"
                            value={this.state.establishment.register_number} onChange={e => this.updateField(e)} />
                    </label>
                    <label className="mb-3 mr-5 w-50 d-block font-weight-bold">
                        <p className="mb-1">Razão Social</p>
                        <input className="w-100" name="name" type="text" placeholder="Nome do local" maxLength="10"
                            value={this.state.establishment.name} onChange={e => this.updateField(e)} />
                    </label>
                    <label className="mb-3 w-25 d-block font-weight-bold">
                        <p className="mb-1">CEP</p>
                        <input className="w-100" name="zipcode" type="text" placeholder="Digite o CEP" maxLength="8"
                            value={this.state.establishment.zipcode} onChange={e => this.updateField(e)}/>
                    </label>
                    <label className="mb-3 w-25 d-inline-block font-weight-bold">
                        <p className="mb-1">Cidade</p>
                        <input className="w-100" name="city" type="text" placeholder="Informe a cidade" disabled
                                value={this.state.establishment.city} onChange={e => this.updateField(e)} />
                    </label>
                    <label className="mb-3 ml-3 d-inline-block font-weight-bold" style={{ width: '257px' }}>
                        <p className="mb-1">Estado</p>
                        <input className="w-100" name="state" type="text" placeholder="UF" disabled
                            value={this.state.establishment.state} onChange={e => this.updateField(e)} />
                    </label>
                    <label className="mb-3 w-50 d-block font-weight-bold">
                        <p className="mb-1">Rua</p>
                        <input className="w-100" name="street" type="text" placeholder="Nome da rua" maxLength="25"
                            value={this.state.establishment.street} onChange={e => this.updateField(e)} />
                    </label>
                    <label className="mb-3 w-25 d-block font-weight-bold">
                        <p className="mb-1">Nº</p>
                        <input className="w-100" name="number" type="text" placeholder="Número" maxLength="5"
                            value={this.state.establishment.number} onChange={e => this.updateField(e)} />
                    </label>
                    <label className="mb-3 w-25 d-block font-weight-bold">
                        <p className="mb-1">Tipo</p>
                        <input className="w-100" name="type" type="text" placeholder="Número"
                            value={this.state.establishment.type} onChange={e => this.updateField(e)} />
                    </label>
                    <button className="blackButton p-2 mt-1 float-right text-align-center" onClick={e => this.clear(e)} type="button">Cancelar</button>
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