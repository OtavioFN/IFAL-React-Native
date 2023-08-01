/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

/* 3. Crie um componente React Native chamado BotaoContador que exibe
um botão e um texto. O botão deve incrementar um contador interno ao
ser pressionado, e o texto deve exibir o valor atual do contador. O
componente deve receber um valor inicial para o contador como
propriedade. */

/* import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BotaoContador from './components/BotaoContador';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <BotaoContador valorInicial={0}/>
      <BotaoContador valorInicial={78}/>
      <BotaoContador valorInicial={78}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

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
      <Text>Open up App.js to start working on your app!</Text>
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