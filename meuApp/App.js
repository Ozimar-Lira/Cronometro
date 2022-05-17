import React, { Component } from 'react'; 
import { View, Text, ViewPropTypes } from 'react-native'; 
import Header from './src/components/Header'; 
import Form from './src/components/Form';
import Contador from './src/components/Contador';
//import Botao from './src/components/Botao';
import LabelCronometro from './src/components/LabelCronometro';


/*function App(){
  return(
    <div>

      <Header titulo="React Native" subtitulo="Uma biblioteca JavaScript."></Header>
      <Form></Form>
      <Contador/>
    </div>    

      
   );
   <Botao onClick={()=> this.zerarCronometro()} label ="Zerar"/>

}
*/

class App extends Component { 
  render() { 
    return ( 
      <View>  
        <Header titulo="React Native" subtitulo="Uma biblioteca JavaScript."></Header>
        <Contador/>
        <Form></Form>
        
      </View> 
    ) 
  } 
  }
export default App;