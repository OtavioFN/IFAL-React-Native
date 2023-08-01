/* 3. Crie um componente React Native chamado BotaoContador que exibe
um botão e um texto. O botão deve incrementar um contador interno ao
ser pressionado, e o texto deve exibir o valor atual do contador. O
componente deve receber um valor inicial para o contador como
propriedade. */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const BotaoContador = ({valorInicial}) => {

    const [contador, setContador] = useState(typeof valorInicial === 'number' ? valorInicial : 0);

    const incrementarContador = () => {
        setContador(contador + 1)
    }

    return(
        <View>
            <Button title='Incrementar' onPress={incrementarContador}/>
            <Text>Contador: {contador}</Text>
        </View>
    );
}

export default BotaoContador;