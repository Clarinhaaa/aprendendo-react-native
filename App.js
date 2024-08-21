import { StyleSheet, View } from 'react-native';
import Titulo from './src/components/Titulo';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
