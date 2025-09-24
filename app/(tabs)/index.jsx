import { View } from 'react-native';
import CartaoPerfil from '../../src/components/CartaoPerfil';

export default function App() {
  return (
    <View>
      <CartaoPerfil 
        nome="Ana Maria"
        profissao="Engenheira de Software"
        urlFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGKNq1PqiejsI1bgf_u7rajrRbuIMU3s8lQ&s"
      />
      <CartaoPerfil 
        nome="Carlos Souza"
        profissao="Designer de Produto"
        urlFoto="https://img.freepik.com/vetores-gratis/jovem-super-heroi-em-traje-vibrante_1308-168204.jpg?semt=ais_incoming&w=740&q=80"
      />
    </View>
  );
}