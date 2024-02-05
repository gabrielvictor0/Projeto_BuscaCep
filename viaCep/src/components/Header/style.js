import styled from "styled-components";

//HeaderContainer -- View
//HeaderContent -- SafeAreaView 
//TextHeader -- Text

export const HeaderContainer = styled.View`

background-color: #FECC2B;
height: 20%;
flex-direction: row;
justify-content: center;
align-items: center;

border-radius: 0px 0px 15px 15px;
elevation: 5;

`

export const HeaderContent = styled.SafeAreaView`
    
`

export const TextHeader = styled.Text`
font-family: "Roboto_500Medium";
font-size: 24px;
color: #333E33;
`