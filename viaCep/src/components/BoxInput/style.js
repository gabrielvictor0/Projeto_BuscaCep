import styled from "styled-components"

//Componente que contem a label + input
export const FieldContent = styled.View`
    /* define o valor da largura como o valor da props.fielWidth */
    width: ${props => `${props.fieldWidth}%`};
    margin-top: 19px ;

`