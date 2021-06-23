import React from 'react';
import {Button, View, Text, StyleSheet, Image,} from 'react-native';

export default class Inicial extends React.Component{
    render(){
        return(
            <View style={styles.conteudoBtns}>
            <Image source= {('./img1.png')}/>

                <Text style={styles.tituloBtns}>Sejam bem-vidos!</Text>
                <Text style={styles.tituloBtns1}>Faça seu pedido na Coffee House</Text>
                <Button style={styles.conteudoBtns}
                    title="Fazer o pedido"
                    color="red"
                    onPress={() =>
                    this.props.navigation.navigate('AdicionaItens')    
                    }                
                />
                <Button style={styles.conteudoBtns}
                    title="Lista de Pedidos"
                    color="blue"
                    onPress={() =>
                    this.props.navigation.navigate('ListaItens')    
                    }                
                />  
            </View>
        );
}}
const styles = StyleSheet.create({
    conteudoBtns:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    tituloBtns:{
        fontSize: 35,
        justifyContent: 'center',
        color: 'black',
        textAlign: 'center',
    },
    tituloBtns1:{
        fontSize: 25,
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
    },
});