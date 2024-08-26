import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function Resultado(props) {
  const share = async () => {
    await Share.share({
      message: "Meu IMC agora é: " + props.imc,
    });
  };

  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoMensagem}>{props.mensagemImc}</Text>
      <Text style={styles.resultadoImc}>{props.imc}</Text>
      {props.imc != null ? (
        <TouchableOpacity style={styles.buttonCompartilhar} onPress={share}>
          <Text style={styles.buttonText}>Compartilhar</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}
