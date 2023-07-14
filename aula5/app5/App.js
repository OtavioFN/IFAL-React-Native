/* import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState("VAI");
  const [ultimo, setUltimo] = useState(null);

  function vai() {
    if (timer !== null) {
      // aqui para o timer
      clearInterval(timer);
      timer = null;

      setBotao("vai");
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }
        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? "0" + hh : hh) +
          ":" +
          (mm < 10 ? "0" + mm : mm) +
          ":" +
          (ss < 10 ? "0" + ss : ss);

        setNumero(format);
      }, 1000);

      setBotao("PARAR");
    }
  }

  function limpar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
    setUltimo(numero);
    setNumero(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setBotao('VAI');
  }
  return (
    <View style={styles.container}>
      <Image source={require('./src/crono.png')} />
      <Text style={styles.timer}>{numero}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btnTexto} onPress={vai}>
          {botao}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btn} onPress={limpar}>
        <Text style={styles.btnTexto}>LIMPAR</Text>
      </TouchableOpacity>
      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {ultimo ? 'ultimo tempo: ' + ultimo : ''}
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aaef",
  },
  timer: {
    marginTop: -150,
    fontSize: 45,
    fontWeight: "bold",
    color: "#fff",
  },
  img: {
    width: 200,
    height: 200,
  },
  textoFrase: {
    fontSize: 20,
    color: "#134523",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
    justifyContent: "center",
  },
  btn: {
    textAlign: "center",
    justifyContent: "center",
    width: 200,
    height: 80,
    borderColor: "#124523",
    borderWidth: 3,
    borderRadius: 25,
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 130,
    height: 30,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aaef",
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 15,
    borderRadius: 9
  },
  areaUltima: {
    marginTop: 50
  },
  textoCorrida:{
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic'
  }
}); */

/* Tem q colocar : no css antes dos atributos */

/* função watch dogs */

import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState("VAI");
  const [ultimo, setUltimo] = useState(null);

  function vai() {
    if (timer !== null) {
      // aqui para o timer
      clearInterval(timer);
      timer = null;

      setBotao("VAI");
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss === 60) {
          ss = 0;
          mm++;
        }
        if (mm === 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? "0" + hh : hh) +
          ":" +
          (mm < 10 ? "0" + mm : mm) +
          ":" +
          (ss < 10 ? "0" + ss : ss);

        setNumero(format);
      }, 1000);

      setBotao("PARAR");
    }
  }

  function limpar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
    setUltimo(numero);
    setNumero(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setBotao("VAI");
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/crono.png")} style={styles.img} />
      <Text style={styles.timer}>{numero}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btn} onPress={limpar}>
        <Text style={styles.btnTexto}>LIMPAR</Text>
      </TouchableOpacity>
      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {ultimo ? "Último tempo: " + ultimo : ""}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aaef",
  },
  timer: {
    marginTop: -150,
    fontSize: 45,
    fontWeight: "bold",
    color: "#fff",
  },
  img: {
    width: 200,
    height: 200,
  },
  textoFrase: {
    fontSize: 20,
    color: "#134523",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
    justifyContent: "center",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 130,
    height: 30,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aaef",
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 15,
    borderRadius: 9,
  },
  areaUltima: {
    marginTop: 50,
  },
  textoCorrida: {
    fontSize: 20,
    color: "#fff",
    fontStyle: "italic",
  },
});
