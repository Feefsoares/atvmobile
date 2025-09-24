import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.cartao}>
     <Image style={styles.imagem}
        source={{ uri: 'https://i.pinimg.com/474x/46/6e/ec/466eec58b115dd9b3591906f858b0d03.jpg' }} />
      <Text style={styles.nome}>Nome: Fernando</Text>
      <Text style={styles.profissao}>Profissão: programador</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  cartao: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
  },
  profissao: {
    fontSize: 16,
  }
});
 
