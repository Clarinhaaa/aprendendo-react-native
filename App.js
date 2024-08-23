import { StyleSheet, View } from "react-native";
import Titulo from "./src/components/Titulo";
import Form from "./src/components/Form";

//* OneBitHealth

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0043",
    margin: 0,
    padding: 0,
    paddingTop: 80,
  },
});
