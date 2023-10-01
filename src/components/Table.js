import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {

    const [cep, setCep] = useState('');
    const [nomePokemon, setNomePokemon] = useState('');
    const [order, setOrder] = useState('');
    const [types, setTypes] = useState([]);

    const [err, setErr] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const nomes = [];
    const numero = [];


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/'+ nomePokemon).
            then((response) => {setOrder(response.data.order)}, console.log(types.type)).catch((err) => console.log(err));
    },[nomePokemon]);


    return(
         <div>
            <div class="well no-padding">
                <form action="#" id="smart-form-register" class="smart-form client-form">
                    <header>
                        Formulário
                    </header>                
                    <fieldset>
                    <form>
                        <div class="row">
                            <section class="col col-6">
                                <label class="input"> <i class="icon-append fa fa-user"></i>
                                    <input type="text" name="nomePokemon" placeholder="Nome do Pokemon" class = 'input' value={nomePokemon} onChange={(e) => {setNomePokemon(e.target.value)}}/>
                                </label>
                            </section>

                            <section class="col col-6">
                                <label class="input"> <i class="icon-append fa fa-lock"></i>
                                    <input type="text" name="order" placeholder="Order" id="order" class = 'input' value={order} onChange={(e) => setOrder(e.target.value)}/>
                                </label>
                            </section>
                            <button type="submit" className="btn btn-primary button" onClick={() => cadastrarPokemon(nomePokemon, order)}>Cadastrar</button>
                        </div>
                        </form>
                    </fieldset>

                  
                </form>
            </div>
        </div>
    )
}

export default Login;