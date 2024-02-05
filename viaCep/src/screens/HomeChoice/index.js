import { ButtonForm } from "../../components/Button";
import { Header } from "../../components/Header/Index";
import { ContainerButton, ContainerForm, ContainerHome } from "./style";

export function HomeChoice({navigation}) {
    return (
        <ContainerHome>
            <Header/>
            <ContainerForm>
            <ContainerButton>
                <ButtonForm
                    text={"Buscar CEP por endereço"}
                    onPress={() => navigation.navigate('FormAddress')}
                />
                <ButtonForm
                    text={"Buscar endereço por CEP"}
                    onPress={() => navigation.navigate('FormCep')}
                />
            </ContainerButton>
        </ContainerForm>
        </ContainerHome>
        
    )
}