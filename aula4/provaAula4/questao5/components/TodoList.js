/* 5. Criar um aplicativo de lista de tarefas(colocar imagens):
Check-list:
• Crie um novo projeto React Native.
• Crie uma tela onde os usuários possam adicionar tarefas.
• Implemente a funcionalidade de adicionar uma nova tarefa à lista.
• Exiba a lista de tarefas na tela principal.
• Adicione a opção de marcar as tarefas como concluídas.
• Implemente a funcionalidade de exclusão de tarefas da lista. */

import React, { useState} from "react";
import { TextInput } from "react-native";
import {View, Text, InputText, Button, StyleSheet} from 'react-native';

const AdicionarTarefaScreen = ({ onAdicionarTarefa }) => {
    const [tarefa, setTarefa] = useState('');

    const adicionarTarefa = () => {
        if (tarefa.trim() !== ''){
            onAdicionarTarefa(tarefa);
            setTarefa('')
        }
    };

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Digite a tarefa"
            value={tarefa}
            onChangeText={setTarefa}
            />
            <Button
            title='Adicionar'
            onPress={adicionarTarefa}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
    },
  });
  
export default AdicionarTarefaScreen;

/* import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AdicionarTarefaScreen = ({ onAdicionarTarefa }) => {
  const [tarefa, setTarefa] = useState('');

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      onAdicionarTarefa(tarefa);
      setTarefa('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />
      <Button title="Adicionar" onPress={adicionarTarefa} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default AdicionarTarefaScreen; */