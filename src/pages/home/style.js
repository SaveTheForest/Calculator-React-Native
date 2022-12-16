
import styled from 'styled-components/native'


export const Container = styled.View`
  background-color: ${({theme})=> theme.COLORS.BACKGROUND};
  flex: 1;
`
export const Display = styled.View`
flex: 1;
 align-items: flex-end;
 justify-content: center;
  padding-right: 10px;
`
export const CalculatorText = styled.Text`
  color: ${({theme}) => theme.COLORS.DISPLAYTEXT};
  font-size: 72px;
  
`
export const CalculatorTextResult = styled.Text`
  color: ${({theme}) => theme.COLORS.DISPLAYTEXT};
  font-size: 42px;
`

export const Keyboard = styled.View`
  flex: 1;
    
`
