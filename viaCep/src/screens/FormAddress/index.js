import { ContainerForm, ScrollForm, ContainerUf } from "../FormCep/style";
import axios from "axios";
import { BoxInput } from "../../components/BoxInput";
import { useState } from "react";
import { ContainerFormAddress } from "./style";
import { Header } from "../../components/Header/Index";

export function FormAddress() {

    const [logradouro, setLogradouro] = useState("");

    const [cidade, setCidade] = useState("");

    const [uf, setUf] = useState("");

    const [endereco, setEndereco] = useState([]);

    const [cep, setCep] = useState({});
    const [bairro, setBairro] = useState({});

    async function getAddress() {
        try {

            const promise = await axios.get(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/` )
            const objeto = await promise.data;

            setEndereco(objeto)
            setCep(endereco[0].cep)
            setBairro(endereco[0].bairro)
           
        } catch (error) {
            alert(error)
        }
    }


    return (
        <ContainerFormAddress>
            <Header />
            <ScrollForm>
                <ContainerForm>


                    <BoxInput
                        textLabel={"Logradouro"}
                        placeholder={"Logradouro..."}
                        onChangeText={setLogradouro}
                        editable={true}
                    />

                    <BoxInput
                        textLabel={"Cidade"}
                        placeholder={"Cidade..."}
                        onChangeText={setCidade}
                        editable={true}
                    />

                    <BoxInput
                        textLabel={"Estado"}
                        placeholder={"Logradouro..."}
                        onChangeText={setUf}
                        editable={true}
                        onBlur={getAddress}
                    />

                    <BoxInput
                        textLabel={"Cep"}
                        placeholder={"Cep..."}
                        keyType={"numeric"}
                        fieldValue={cep}

                    />

                    <ContainerUf>

                        <BoxInput
                            textLabel={"Bairro"}
                            placeholder={"Bairro..."}
                            fieldWidth={67}
                            fieldValue={bairro}
                            
                        />

                        <BoxInput
                            textLabel={"UF"}
                            placeholder={"UF"}
                            fieldWidth={25}
                        />

                    </ContainerUf>
                </ContainerForm>
            </ScrollForm>
        </ContainerFormAddress>

    )
}