import React, {Component} from 'react';
import {View, Text, TextInput, Button } from 'react-native';
import Contador from './Contador.js';
import {form} from '../styles/index.js'; 

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "", idade: ""
        };
        {/* Sempre que criarmos uma função para trabalhar com States, precisamos usar o bind para o State consiga acessar a função*/}
        this.concluir = this.concluir.bind(this);
    }

    /* Função concluir que será chamada quando clicar no botão */
    concluir() {
        /* Verifica se os States mudaram de valor */
        if (this.state.nome === "" || this.state.idade === "") {
            /* Se não mudaram, significa que o usuário não preenchou os dados */
            /* Solicitamos que ele preencha-os */
            alert("Por favor, preencha corretamente os campos.");
            return;
        } else {
            /* Vamos exibir em um alerta */
            alert("Nome: " + this.state.nome + "\n" + "Idade: " + this.state.idade);
        }
    }

    render() {
        return (            
            <View style={form.container}>
            {/*    <LabelCronometro name={minutos+":"+segundos}/>*/}
            {/*    <Text style={form.texts}>Nome: </Text>
                <TextInput placeholder="Informe seu nome" style={form.inputs} onChangeText = { (nomeDigitado) => this.setState({ nome : nomeDigitado })} /> */}
                <Text></Text>

            {/*    <Text style={form.texts}>Idade: </Text>                 
                <TextInput placeholder="Informe sua idade" keyboardType="numeric" style={form.inputs} onChangeText = { (idadeDigitada) => this.setState({ idade : idadeDigitada })} /> 
                <Text></Text>
                <View style={form.button}>
                      <Button title="Iniciar" onPress={this.concluir}></Button>
                      <Button title="Zerar" onPress={this.zerarCronometro}></Button>
                </View>
                <Text></Text>*/}
                
            </View>
        );
    }
}

export default Form;