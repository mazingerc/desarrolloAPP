import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuario from './src/components/Usuario';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>"Hola, Coder!"</Text>
      <Usuario usuario="Gaston" />
      <Usuario usuario="Agustin" />
      <Usuario usuario="Franco" />
      <Usuario usuario="Rocio" />
      <StatusBar style="auto" />
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
