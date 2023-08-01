/* 4. Crie um componente React Native chamado ListaItens que recebe um
array de objetos como propriedade. Cada objeto representa um item da
lista e possui as propriedades id (número único) e nome (texto). O
componente deve exibir uma lista de itens, onde cada item é renderizado
como um componente separado e exibe o nome do item. */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ListaItens = ( {objectsArray} ) => {
    const [objetos, setObjetos] = useState(objectsArray)
    let info = <View></View>
    
    const renderItems = () => {
        for(let i = 0; i < objectsArray.length; i ++){
            info += <Text>{objectsArray[i]}</Text>
        }
        return info;
    }
}

export default ListaItens;