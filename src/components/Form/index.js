import { React, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Resultado from "./Resultado";
import styles from "./style";

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [imc, setImc] = useState(null);
  const [mensagemImc, setMensagemImc] = useState(null);
  const [textoBotao, setTextoBotao] = useState("Calcular IMC");

  function calcularImc() {
    return setImc((peso / (altura * altura)).toFixed(2));
  }

  function verificarForm() {
    if (altura == null || peso == null) {
      setImc(null);
      setMensagemImc("Preencha sua altura e peso");
      return;
    }
    calcularImc();
    setAltura(null);
    setPeso(null);
    setMensagemImc("Seu IMC é: ");
    setTextoBotao("Calcular novamente");
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura (m):</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex.: 1.65"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        ></TextInput>
        <Text style={styles.formLabel}>Peso (kg):</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex.: 65.4"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => verificarForm()}>
          <Text style={styles.buttonText}>{textoBotao}</Text>
        </TouchableOpacity>
      </View>
      <Resultado imc={imc} mensagemImc={mensagemImc} />
    </View>
  );
}
