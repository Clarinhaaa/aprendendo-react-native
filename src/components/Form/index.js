import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
} from "react-native";
import Resultado from "./Resultado";
import styles from "./style";

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [imc, setImc] = useState(null);
  const [mensagemImc, setMensagemImc] = useState(null);
  const [textoBotao, setTextoBotao] = useState("Calcular IMC");
  const [mensagemErro, setMensagemErro] = useState(null);

  function calcularImc() {
    let alturaFormatada = altura.replace(",", ".");
    let pesoFormatado = peso.replace(",", ".");
    return setImc(
      (pesoFormatado / (alturaFormatada * alturaFormatada)).toFixed(2)
    );
  }

  function verificarForm() {
    Keyboard.dismiss();
    if (altura == null || peso == null) {
      Vibration.vibrate();
      setMensagemErro("*Campos obrigatórios");
      setImc(null);
      setMensagemImc("Preencha sua altura e peso");
      return;
    }
    calcularImc();
    setAltura(null);
    setPeso(null);
    setMensagemErro(null);
    setMensagemImc("Seu IMC é: ");
    setTextoBotao("Calcular novamente");
  }

  return (
    <Pressable style={styles.formContainer} onPress={Keyboard.dismiss}>
      <View style={styles.form}>
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

        <TouchableOpacity style={styles.button} onPress={() => verificarForm()}>
          <Text style={styles.buttonText}>{textoBotao}</Text>
        </TouchableOpacity>
      </View>
      <Resultado imc={imc} mensagemImc={mensagemImc} />
    </Pressable>
  );
}
