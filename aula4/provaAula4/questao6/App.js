/* 6. Crie um aplicativo sobre você(colocar imagens):
Check-list:
• Crie um novo projeto React native;
• Esse projeto deverá conter informações suas, tipo um currículo
mais profissional
• Ao clicar em um botão, você mudará de função e irá para uma
“nova página” falando sobre você um perfil mais informal, seus
hobbies (exemplo: gosto de jogar, adoro ler um livro e gosto do
caneta azul...) obs: deverá ter um botão também estilo toggle (ir e
voltar entre pages)*/

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function App() {
  const [informal, setInformal] = useState(false);
  const [formal, setFormal] = useState(false);
  const [uri, setUri] = useState("");
  const [info, setInfo] = useState("");

  const perfilFormal = () => {
    setFormal(true);
    setInformal(false);
    setUri(
      "https://media.istockphoto.com/id/520860375/pt/foto/ele-empresas-geridas.jpg?s=612x612&w=0&k=20&c=m3lG5EcUZKnynSHndeNGzZs2av2mgcHVHrcBp4tmLrw="
    );
    setInfo("Sou um curioso desenvolvedor de software");
  };

  const perfilInformal = () => {
    setInformal(true);
    setFormal(false);
    setUri(
      "https://img.freepik.com/fotos-premium/um-homem-caminhando-na-praia_416434-476.jpg?w=2000"
    );
    setInfo("Gosto de ir à praia, adoro harry potter");
  };

  const toggle = () => {
    if (formal) {
      perfilInformal();
    }
    if (informal) {
      perfilFormal();
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Perfil formal" onPress={perfilFormal}></Button>
      <Button title="Perfil informal" onPress={perfilInformal}></Button>
      <Button title="Toggle" onPress={toggle}></Button>
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: 200, height: 300 }}
      ></Image>
      <Text>{info}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
