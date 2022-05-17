import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {form} from '../styles/index.js'; 
//import Botao from './Botao';

class Contador extends React.Component {
    constructor(props){
        super(props)
        this.state={
            segundos: 0,
            minutos: 0,
            stop: false,
            nameStatus:"Stop",
            volta:""
        }
    }
    incrementar(){
        this.setState(
            (state)=>{
                if(this.state.stop==false){
                    if(state.segundos>=60){
                        this.zerar()
                        this.incrementarMinutos()
                    }
                    return({segundos: state.segundos+1})
                }    
            }
        )
    }   
    zerar(){
        this.setState({segundos:0})
    }   

     
    
    incrementarMinutos(){
        this.setState({minutos:this.state.minutos+1})
    }

    zerarCronometro(){
        this.setState({
            segundos:0,
            minutos:0,
            
        }
        )
    }

    pararTempo(){
        this.setState({
            stop: !this.state.stop
        })
        if (this.state.stop )
        {
            this.setState({
                nameStatus: "Stop"}) 
        }
                 
        else{
            this.setState({nameStatus: "Play"})

        }
    }

    volta(){
        let v = this.state.minutos + ":" + this.state.segundos
        this.setState({
            volta: this.state.volta + "->" + v
        })

    }
 
    componentDidMount(){
       this.timer = setInterval(() => {this.incrementar()}, 100)
    }
  
    render(){
        return(
            <View>
  
                <Text style={form.texts}>{this.state.minutos}:{this.state.segundos}</Text>
                <View style={form.button}>
                    <Button title={this.state.nameStatus} onPress={this.incrementar}></Button>
                    <Button title="Zerar" onPress={this.zerarCronometro}></Button>
                    <Button title="Voltas" onPress={this.volta}></Button>

                </View>
                <Text style={form.texts}>{this.state.volta}</Text>
            </View>
        )
    }

}
export default Contador
