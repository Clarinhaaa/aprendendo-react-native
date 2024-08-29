import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function Resultado(props) {
  const compartilhar = async () => {
    await Share.share({
      message: "Meu IMC agora é: " + props.imc,
    });
  };

  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoMensagem}>Seu IMC é:</Text>
      <Text style={styles.resultadoImc}>{props.imc}</Text>
      <TouchableOpacity
        style={styles.buttonCompartilhar}
        onPress={compartilhar}
      >
        <Text style={styles.buttonText}>Compartilhar</Text>
      </TouchableOpacity>
    </View>
  );
}
