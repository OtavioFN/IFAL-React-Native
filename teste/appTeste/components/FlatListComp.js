import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const produtos = [
    {
        id: '001',
        desc: ['Mouse', '25.00']
    },
    {
        id: '002',
        desc: ['Teclado', '50.00']
    },
    {
        id: '003',
        desc: ['Monitor', '430.00']
    }
]

export default function App1(){
    return(
        <View>
            <FlatList
            data={produtos}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Text>Descrição: {item.desc[0]} - Valor: R$ {item.desc[1]}</Text>}
            
            />
        </View>
    );
}

// The FlatList data prop means from where are coming the data

// KeyExtractor is the prop which 

//renderItem={({item})=><Text>Descrição: {item.desc[0]} - Valor: R$ {item.desc[1]}</Text>}