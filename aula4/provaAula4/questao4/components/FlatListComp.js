/* 4. Crie um componente React Native chamado ListaItens que recebe um
array de objetos como propriedade. Cada objeto representa um item da
lista e possui as propriedades id (número único) e nome (texto). O
componente deve exibir uma lista de itens, onde cada item é renderizado
como um componente separado e exibe o nome do item. */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const produtos = [
    {
        id: '001',
        nome:'Otávio'
    },
    {
        id: '002',
        nome: 'Oivato'
    },
    {
        id: '003',
        nome:'Ícaro'
    }
]

export default function App1(){
    return(
        <View>
            <FlatList
            data={produtos}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Text>ID: {item.id} - Nome: {item.nome}</Text>}
            
            />
        </View>
    );
}

// The FlatList data prop means from where are coming the data

// KeyExtractor is the prop which 

//renderItem={({item})=><Text>Descrição: {item.desc[0]} - Valor: R$ {item.desc[1]}</Text>}