import * as Style from "./style";

export default function Keyboard({ data }) {
  return (
    <Style.Container>
        <Style.ButtonFun onPress={() => data('C')}>
        <Style.TextButton style={{color:'#FFF'}}>C</Style.TextButton>
      </Style.ButtonFun>
      <Style.ButtonFun onPress={() => data(')')}>
        <Style.TextButton style={{color:'#FFF'}}>)</Style.TextButton>
      </Style.ButtonFun>
      <Style.ButtonFun onPress={() => data('(')}>
        <Style.TextButton style={{color:'#FFF'}}>(</Style.TextButton>
      </Style.ButtonFun>
      <Style.ButtonFun onPress={() => data('⌦')}>
        <Style.TextButton style={{color:'#FFF'}}>⌦</Style.TextButton>
      </Style.ButtonFun>
      <Style.Button onPress={() => data('7')}>
        <Style.TextButton>7</Style.TextButton>
      </Style.Button>
      <Style.Button onPress={() => data('8')}>
        <Style.TextButton>8</Style.TextButton>
      </Style.Button>
      <Style.Button onPress={() => data('9')}>
        <Style.TextButton>9</Style.TextButton>
      </Style.Button>
      <Style.ButtonFun onPress={() => data('x')}>
        <Style.TextButton style={{color:'#FFF'}}>x</Style.TextButton>
      </Style.ButtonFun>
      <Style.Button onPress={() => data('4')}>
        <Style.TextButton>4</Style.TextButton>
      </Style.Button>
      <Style.Button onPress={() => data('5')}>
        <Style.TextButton>5</Style.TextButton>
      </Style.Button>
      <Style.Button onPress={() => data('6')}>
        <Style.TextButton>6</Style.TextButton>
      </Style.Button>
      <Style.ButtonFun onPress={() => data('-')}>
        <Style.TextButton style={{color:'#FFF'}}>-</Style.TextButton>
      </Style.ButtonFun>
      <Style.Button onPress={() => data('1')}>
        <Style.TextButton>1</Style.TextButton>
      </Style.Button>
      <Style.Button onPress={() => data('2')}>
        <Style.TextButton>2</Style.TextButton>
      </Style.Button>
      <Style.Button onPress={() => data('3')}>
        <Style.TextButton>3</Style.TextButton>
      </Style.Button>
      <Style.ButtonFun onPress={() => data('+')}>
        <Style.TextButton style={{color:'#FFF'}}>+</Style.TextButton>
      </Style.ButtonFun>
      <Style.Button onPress={() => data('0')}>
        <Style.TextButton>0</Style.TextButton>
      </Style.Button>
      <Style.Button onPress={() => data('.')}>
        <Style.TextButton>.</Style.TextButton>
      </Style.Button>
      <Style.Button onPress={() => data('÷')}>
        <Style.TextButton>÷</Style.TextButton>
      </Style.Button>
      <Style.ButtonFun onPress={() => data('=')}>
        <Style.TextButton style={{color:'#FFF'}}>=</Style.TextButton>
      </Style.ButtonFun>
    </Style.Container>
  );
}
