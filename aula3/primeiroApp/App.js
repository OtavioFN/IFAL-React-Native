/*import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View, Image,  } from "react-native";

export default function App() {
  const nomeInicial = 'Otávio';
  const idadeInicial = 25;

  const [nome, setNome] = useState(nomeInicial);
  const [idade, setIdade] = useState(idadeInicial);



  function entrar() {
    setNome("Otávio bolsista");
    setIdade(30);
  }

  function voltar(){
    setNome(nomeInicial);
    setIdade(idadeInicial);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/> {/* barStyle define a cor dos elementos da statusBar
      backgroundColor define a cor da minha statusBar
  hidden recebe um booleano que define se a barra vai ser exibida ou não */
      /*<Button title='Mudar nome' onPress={entrar}></Button>
      <Button title='Voltar' onPress={voltar}></Button>
      <Text style={[styles.titulo, styles.textoAlinhado]}>Olá, mundo!</Text>
      <Text style={{ color: "#f98723", fontSize: 25, margin: 50 }}>Olá</Text>
      <Text style={{fontSize: 30}}>{nome}</Text>
      <Text style={{fontSize: 30}}>{idade}</Text>


      <Image
        source={{
          uri: "https://pbs.twimg.com/media/FwrEeHkXgAMFrtk?format=jpg&name=large",
        }}
        style={{ width: 200, height: 300 }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  area:{
    marginTop: 60
  },
  titulo:{
    fontSize: 30,
    marginTop: 15
  },
  textoAlinhado:{
    textAlign: "center"
  }
}); */

/* import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

export default function App() {
  const nomeInicial = 'Otávio';
  const idadeInicial = 25;

  const [nome, setNome] = useState(nomeInicial);
  const [idade, setIdade] = useState(idadeInicial);



  function entrar() {
    setNome("Otávio bolsista");
    setIdade(30);
  }

  function voltar(){
    setNome(nomeInicial);
    setIdade(idadeInicial);
  }

  function randomSentence(){
    sentences = ['Oi, seja bem vindo', 'Olá, seja bem welcome', 'Iae, boas vindas', 'Hey, you`re welcome']

    return sentence[Math.random() * sentence.lenght];
  }
  return (
    <><View style={styles.container}>
      <StatusBar></StatusBar>
      <Text>
        <Button title='Jogar Frase' onPress={randomSentence}></Button>
      </Text>
    </View>
    <View style={styles.container1}> 
        <Text style={{color: "white"}}>Otávio</Text>
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  area:{
    marginTop: 60
  },
  titulo:{
    fontSize: 30,
    marginTop: 15
  },
  textoAlinhado:{
    textAlign: "center"
  }
}); */

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const nomeInicial = 'Otávio';
  const idadeInicial = 25;

  const [nome, setNome] = useState(nomeInicial);
  const [idade, setIdade] = useState(idadeInicial);



  const entrar = () => {
    setNome("Otávio bolsista");
    setIdade(30);
  }

  const voltar= () => {
    setNome(nomeInicial);
    setIdade(idadeInicial);
  }

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <Button title='Mudar nome' onPress={entrar}></Button>
      <Button title='Voltar' onPress={voltar}></Button>
      <Text style={[styles.titulo, styles.textoAlinhado]}>Olá, mundo!</Text>
      <Text style={{ color: "#f98723", fontSize: 25, margin: 50 }}>Olá</Text>
      <Text style={{fontSize: 30}}>{nome}</Text>
      <Text style={{fontSize: 30}}>{idade}</Text>


      <Image
        source={{
          uri: "https://pbs.twimg.com/media/FwrEeHkXgAMFrtk?format=jpg&name=large",
        }}
        style={{ width: 200, height: 300 }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  area:{
    marginTop: 60
  },
  titulo:{
    fontSize: 30,
    marginTop: 15
  },
  textoAlinhado:{
    textAlign: "center"
  }
});

/* import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const nomeInicial = 'Otávio';
  const idadeInicial = 25;

  const [nome, setNome] = useState(nomeInicial);
  const [idade, setIdade] = useState(idadeInicial);
  const [frase, setFrase] = useState('')



  function entrar() {
    setNome("Otávio bolsista");
    setIdade(30);
  }

  function voltar(){
    setNome(nomeInicial);
    setIdade(idadeInicial);
  }

  const randomSentence = () => {
    sentences = ['Oi, seja bem vindo', 'Olá, seja bem welcome', 'Iae, boas vindas', 'Hey, you`re welcome']

    
    const fraseAleatoria = sentences[Math.floor(Math.random() * sentences.length)]

    setFrase(fraseAleatoria)
          
  }
  return (
    <><View style={styles.container}>
      <StatusBar></StatusBar>
      <Text style={{color: "black"}}>
        <Button title='Jogar Frase' onPress={randomSentence}/>
        {frase}
      </Text>
    </View>
    <View style={styles.container1}> 
        <Text style={{color: "white"}}>Otávio</Text>
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  },
  container1: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  area:{
    marginTop: 60
  },
  titulo:{
    fontSize: 30,
    marginTop: 15
  },
  textoAlinhado:{
    textAlign: "center"
  }
}); */

/* import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [mensagem, setMensagem] = useState('');
  const [frase, setFrase] = useState('');
  const name = useState("Matheus");
  const [number, setNumber] = useState(1)

  const exibirBoasVindas = () => {
    setMensagem('Seja bem-vindo(a) ao app!');
  };

  const exibirFraseAleatoria = () => {
    const frases = [
      'A persistência é o caminho do êxito.',
      'No meio da dificuldade encontra-se a oportunidade.',
      'O sucesso normalmente vem para quem está ocupado demais para procurar por ele.',
      'A coragem não é ausência do medo; é a persistência apesar do medo.',
      'O único lugar onde o sucesso vem antes do trabalho é no dicionário.'
    ];

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFrase(fraseAleatoria);
  };

  const incrementar = () => {
    setNumber(number + 1)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Exibir Boas Vindas" onPress={exibirBoasVindas} />
      <Text style={{ marginVertical: 20 }}>{mensagem}</Text>

      <Button title="Exibir Frase Aleatória" onPress={exibirFraseAleatoria} />
      <Text>{frase}</Text>
      <Text>
        {name}
        <Button title="Incrementar" onPress={incrementar} />
        {number}
      </Text>
    </View>
  );
};

export default App; */