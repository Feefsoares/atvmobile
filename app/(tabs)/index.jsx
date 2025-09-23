import CartaoPerfil from '.components/CartaoPerfil.tsx';
 
export default function App() {
  return (
    <View style={styles.container}>
      <CartaoPerfil 
        nome="Ana Maria"
        profissao="Engenheira de Software"
        urlFoto="https://..."
      />
      <CartaoPerfil 
        nome="Carlos Souza"
        profissao="Designer de Produto"
        urlFoto="https://..."
      />
    </View>
  );
}