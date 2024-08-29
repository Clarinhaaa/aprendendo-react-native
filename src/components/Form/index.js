import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import Resultado from "./Resultado";
import styles from "./style";

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [mensagemErro, setMensagemErro] = useState(null);
  const [imc, setImc] = useState(null);
  const [listaImc, setListaImc] = useState([]);

  function calcularImc() {
    //* Substituir a vírgula pelo ponto nos números, caso eles tenham, pois no iOS apenas há a opção de vírgula no teclado
    let alturaFormatada = altura.replace(",", ".");
    let pesoFormatado = peso.replace(",", ".");
    let resultado = (
      pesoFormatado /
      (alturaFormatada * alturaFormatada)
    ).toFixed(2);
    setImc(resultado);
    //* Inserindo cada resultado no array da lista, com um id (key) único
    setListaImc((array) => [
      ...array,
      { id: Math.floor(Math.random() * 500), imc: resultado },
    ]);
  }

  function verificarForm() {
    Keyboard.dismiss();
    if (altura == null || peso == null) {
      Vibration.vibrate();
      setMensagemErro("*Campos obrigatórios");
    } else {
      calcularImc();
      setAltura(null);
      setPeso(null);
      setMensagemErro(null);
    }
  }

  return (
    <View style={styles.formContainer}>
      {imc == null ? (
        <Pressable style={styles.form} onPress={Keyboard.dismiss}>
          <Text style={styles.formLabel}>Altura (m):</Text>
          {mensagemErro != null ? (
            <Text style={styles.mensagemErro}>{mensagemErro}</Text>
          ) : (
            <View />
          )}
          <TextInput
            style={styles.formInput}
            placeholder="Ex.: 1.65"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          ></TextInput>

          <Text style={styles.formLabel}>Peso (kg):</Text>
          {mensagemErro != null ? (
            <Text style={styles.mensagemErro}>{mensagemErro}</Text>
          ) : (
            <View />
          )}
          <TextInput
            style={styles.formInput}
            placeholder="Ex.: 65.4"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          ></TextInput>

          <TouchableOpacity style={styles.buttonSubmit} onPress={verificarForm}>
            <Text style={styles.buttonText}>Calcular IMC</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={[styles.form, { height: "50%" }]}>
          <Resultado imc={imc} listaImc={listaImc} />
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => setImc(null)}
          >
            <Text style={styles.buttonText}>Calcular novamente</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.listaImcTitulo}>Lista de IMCs:</Text>
      <FlatList
        style={styles.listaImc}
        data={[...listaImc].reverse()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Text style={styles.listaImcItem}>
              IMC {item.id}: {item.imc}
            </Text>
          );
        }}
      ></FlatList>
    </View>
  );
}
