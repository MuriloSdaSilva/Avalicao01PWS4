import axios from "axios";
import { useEffect, useState } from "react";
import authService from "./serviçoLogin";
import React from "react";

class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            usuario : "",
            senha: "",
            redirect: false
        } 
    }


    logar = async (event) =>{
        event.preventDefault();
        let dados = {
            usuario : this.state.usuario,
            senha : this.state.senha
        }
        try{
            let res = await authService.authenticate(dados)
            console.log("res", res.dados)
            authService.setLoggedUser(res.dados)
        }catch(error){
            console.log(error)
            alert("Erro ao logar")
        }
    }

    render() {
            return (
                <div className="container d-flex justify-content-center">
                    <div className="card mt-5 w-50">
                        <div className="card-body">
                            <form onSubmit={this.logar}>
                                <div className="form-group">
                                    <label htmlFor="nickName">Usuário</label>
                                    <input type="text" className="form-control input"id="usuario" placeholder="Usuário"  value={this.state.usuario} onChange={(e) => this.setState({usuario : e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" className="form-control input" id="senha" placeholder="Senha" value={this.state.senha} onChange={(e) => this.setState({senha : e.target.value})}/>
                                </div>
                                <button type="submit" className="btn btn-primary button">Entrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
    }


}

export default Login;