/* 3. Crie um componente React Native chamado BotaoContador que exibe
um botão e um texto. O botão deve incrementar um contador interno ao
ser pressionado, e o texto deve exibir o valor atual do contador. O
componente deve receber um valor inicial para o contador como
propriedade. */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BC from './components/BotaoContador'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <BC valorInicial={3}/>
      <BC valorInicial={3}/>
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
}); 