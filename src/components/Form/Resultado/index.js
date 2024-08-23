import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Resultado(props) {
  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoMensagem}>{props.mensagemImc}</Text>
      <Text style={styles.resultadoImc}>{props.imc}</Text>
    </View>
  );
}
