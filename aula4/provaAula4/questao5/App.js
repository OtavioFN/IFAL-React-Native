/* 5. Criar um aplicativo de lista de tarefas(colocar imagens):
Check-list:
• Crie um novo projeto React Native.
• Crie uma tela onde os usuários possam adicionar tarefas.
• Implemente a funcionalidade de adicionar uma nova tarefa à lista.
• Exiba a lista de tarefas na tela principal.
• Adicione a opção de marcar as tarefas como concluídas.
• Implemente a funcionalidade de exclusão de tarefas da lista. */

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AdicionarTarefaScreen from './components/TodoList';

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, { id: Date.now().toString(), nome: tarefa, concluida: false }]);
  };

  return (
    <View style={styles.container}>
      <Text>Lista de Tarefas</Text>
      <AdicionarTarefaScreen onAdicionarTarefa={adicionarTarefa} />
      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <Text style={{ textDecorationLine: item.concluida ? 'line-through' : 'none' }}>
            {item.nome}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;

