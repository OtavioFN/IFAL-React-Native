/* import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function App() {

  const [feed, setFeed] = useState([
    { id: '1', nome: 'icaro', idade: 50, email: 'icaro@icaro.com'},
    { id: '2', nome: 'jonata', idade: 23, email: 'jonata@.com'},    
    { id: '3', nome: 'Henrique', idade: 40, email: 'henri@henrique.com'},    
    { id: '4', nome: 'josé', idade: 19, email: 'ana@ana.com'},  
    { id: '5', nome: 'carlos', idade: 29, email: 'jose@jose.com'}  
  ]);

 return (
  <View style={styles.container}>

    <FlatList
    showsVerticalScrollIndicator={false}
    data={feed}
    renderItem={ ({ item }) => <Pessoa data={item}  /> }
    />

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },  
  areaPessoa:{
   backgroundColor:'#121212',
   height: 200,
   marginBottom: 15,
   justifyContent: 'center'
  },
  textopessoa:{
    color: '#FFF',
    fontSize: 20
  }
}) 


function Pessoa(props){
  return(
    <View style={styles.areaPessoa}>
      <Text style={styles.textopessoa}>{props.data.nome}</Text>
      <Text style={styles.textopessoa}>{props.data.idade}</Text>
      <Text style={styles.textopessoa}>{props.data.email}</Text>
    </View>
  );
}*/

/* import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [carroSelecionado, setCarroSelecionado] = useState(0)
  const [carros, setCarros] = useState([
    {key: 1, nome: 'corsa 1', valor: 15000},
    {key: 2, nome: 'corsa 2', valor: 15000},
    {key: 3, nome: 'corsa 3', valor: 15000},
    {key: 4, nome: 'corsa 4', valor: 15000},
    {key: 5, nome: 'corsa 5', valor: 15000},

  ])

  let carrosItem = carros.map((v,k) => {
    return <Picker.Item key = {k} label = {v.nome}/>
  })

 return (
  <View style={styles.container}>
    <Picker selectedValue = {carroSelecionado} onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)}>
      {carrosItem}
    </Picker>
    <Text style={styles.carros}> Carro: {carros[carroSelecionado.nome]} </Text>
    <Text style={styles.carros}> R$: {carros[carroSelecionado.valor]}</Text>

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 35
  },
  carros:{
    marginTop: 15,
    fontSize: 25
  },
}) */

/* import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    {key: 1, nome: 'corsa 1.0', valor: 15.000},
    {key: 2, nome: 'corsa 2.0', valor: 20.000},
    {key: 3, nome: 'corsa 3.0', valor: 30.000},
    {key: 4, nome: 'corsa 4.0 turbo', valor: 50.000},
    {key: 5, nome: 'corsa versao ferrari', valor: 150.000}
  ]) 



  let carrosItem = carros.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  })

 return (
  <View style={styles.container}>

    <Picker
      selectedValue={carroSelecionado}
      onValueChange={ (itemValue, itemIndex) => setCarroSelecionado(itemValue) }
    >
      {carrosItem}
    </Picker>


   <Text style={styles.carros}>Carro: {carros[carroSelecionado].nome} </Text>
   <Text style={styles.carros}>R$: {carros[carroSelecionado].valor.toFixed(3)} </Text>

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 35
  },
  carros:{
   marginTop: 15,
   fontSize: 25 
  }
}) */

/* import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Slider from "@react-native-community/slider";

export default function App() {
  const [valor, setValor] = useState(50);

  return (
    <View style={styles.container}>
      <Slider
        minimunValue={0}
        maximumValue={100}
        value={valor}
        onValueChange={(valorSelecionado) => {
          setValor(valorSelecionado);
        }}
        minimumTrackTintColor="#000fff"
        maximumTrackTintColor="#ff0000"
        thumbTintColor="black"
      />

      <Text style={{textAlign:'center', fontSize: 25}}>Você tem: {valor.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
}); */


import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Switch } from "react-native";

import Slider from "@react-native-community/slider";

export default function App() {
  
  const [status, setStatus] = useState(false);


  return (
  <SafeAreaView style={styles.container}> 

    <Switch value={status}
    onValueChange={(valorSelecionado) => {
      setStatus(valorSelecionado)
    }}
    trackColor={{false: 'red', true: 'green'}}
    thumbColor={status ? 'green' : 'red'}/>
    
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
