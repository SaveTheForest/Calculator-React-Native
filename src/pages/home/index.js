import { StatusBar } from "expo-status-bar";
import * as Style from "./style";
import { ThemeProvider } from "styled-components/native";
import { Image, TouchableOpacity, useColorScheme } from "react-native";
import dark from "../../themes/dark";
import light from "../../themes/light";
import { useState } from "react";
import Keyboard from "../keyboard";

export default function Home() {
  const [theme, setTheme] = useState(light);
  const getSystemColor = useColorScheme()
  const [changeTheme, setchangeTheme] = useState(getSystemColor);

 
 
  const [calcValue, setCalcValue] = useState("");
  const [calcValueResult, setCalcValueResult] = useState("");

  function calculate(value) {
    setCalcValue(calcValue + value);
   
    if (calcValueResult != "") {
      setCalcValueResult("");
    }
    if (value == "+" || value == "-" || value == "x" || value == "÷") {
      if (
        calcValue.slice(-1) == "+" ||
        calcValue.slice(-1) == "-" ||
        calcValue.slice(-1) == "x" ||
        calcValue.slice(-1) == "÷"
      ) {
        setCalcValue(calcValue.slice(0, -1) + value);

        return;
      }
    }
    if (value === "⌦") {
      setCalcValue(calcValue.slice(0, -1));
    }
    if (value == "=") {
      handleResult();
    }
    if (value == "C") {
      setCalcValueResult("");
      setCalcValue("");
    }
  }
  function handleResult() {
    try {
      setCalcValueResult(
        eval(calcValue.replace("÷", "/").replace("x", "*"))
          .toFixed(4)
          .replace(".", ",")
      );

      setCalcValue("");
    } catch {
      setCalcValueResult("error");
      setCalcValue("");
    }
  }

  async function handleChangeTheme() {

    if (changeTheme == "light") {
      setchangeTheme("dark");
      setTheme(dark);
      console.log(getSystemColor)
    
    } else {
      setchangeTheme("light");
      setTheme(light);
      console.log(getSystemColor)
  
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Style.Container>
        <StatusBar translucent={false} style="light" />
        <TouchableOpacity onPress={()=> handleChangeTheme()}>
        <Image
        style={{width:40, height:40, alignSelf:'flex-end', margin:10}}
        source={require('../../assets/day-and-night.png')} />
        </TouchableOpacity>
       
        <Style.Display>
          <Style.CalculatorText>{calcValueResult}</Style.CalculatorText>
          <Style.CalculatorTextResult>{calcValue}</Style.CalculatorTextResult>
        </Style.Display>

        <Keyboard data={calculate} />
      </Style.Container>
    </ThemeProvider>
  );
}
