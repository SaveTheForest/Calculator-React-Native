import styled from 'styled-components/native'


export const Container = styled.View`
flex: 1.7;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`
export const Button = styled.TouchableOpacity`
    background-color:  ${({theme}) => theme.COLORS.NUMBERBUTTON};;
    width: 20%;
    height: 16%;
    margin: 7px;
   
    border-radius: 15px;
    align-items: center;
    justify-content: center;

`
export const ButtonFun = styled.TouchableOpacity`
    background-color:  ${({theme}) => theme.COLORS.FUNBUTTON};;
    width: 20%;
    height: 16%;
    margin: 7px;
    
    border-radius: 15px;
    align-items: center;
    justify-content: center;

`
export const TextButton = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXTBUTTON};
    font-size: 32px;
    
`