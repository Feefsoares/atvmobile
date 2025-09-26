import { StyleSheet, Text, View } from 'react-native';

export default function Login({campo, tipo}) {
  
  let ph = 'Digite seu ' + campo + ':'
  
  return (
    <View style={styles.campo}>
      <Text style={styles.campo}>{campo}</Text>
          <input type={tipo} placeholder={ph}/>
    </View>
  );
}


const styles = StyleSheet.create({
  campo: {
alignItems: 'center',
    fontSize: 25,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
  },
  profissao: {
    fontSize: 16,
  },

});
 
