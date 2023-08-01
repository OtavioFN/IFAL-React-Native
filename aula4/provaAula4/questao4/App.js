/* 4. Crie um componente React Native chamado ListaItens que recebe um
array de objetos como propriedade. Cada objeto representa um item da
lista e possui as propriedades id (número único) e nome (texto). O
componente deve exibir uma lista de itens, onde cada item é renderizado
como um componente separado e exibe o nome do item. */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListaPlana from './components/FlatListComp'

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on</Text>
      <StatusBar style="auto" />
      <ListaPlana/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250
  },
});