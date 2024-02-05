import { ContainerForm, ScrollForm, ContainerUf } from "../FormCep/style";
import axios from "axios";
import { BoxInput } from "../../components/BoxInput";
import { useState } from "react";
import { ContainerFormAddress } from "./style";
import { Header } from "../../components/Header/Index";

export function FormAddress() {

    const [logradouro, setLogradouro] = useState("");

    const [cidade, setCidade] = useState("");

    const [estado, setEstado] = useState("");

    async function getAddress() {
        try {

        } catch (error) {

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
                        fieldWidth={67}
                        onChangeText={setEstado}
                        editable={true}
                    />

                    <BoxInput
                        textLabel={"Cep"}
                        placeholder={"Cep..."}
                        keyType={"numeric"}

                    />

                    <ContainerUf>

                        <BoxInput
                            textLabel={"Bairro"}
                            placeholder={"Bairro..."}

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