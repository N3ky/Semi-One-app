import { StyleSheet ,Text, View, ScrollView,Image, ImageSourcePropType} from 'react-native';

type Curso ={
  id: string;
  nome:string;
  curso: string;
  imagem: ImageSourcePropType | undefined;
}

const cursos: Curso[] = [
  {
    id: '1',
    nome: 'Prof. Ana Carolina Mendes',
    curso:'Ciber Segurança',
    imagem: require('../../assets/images/prof3.jpg')
  },
  {
    id: '2',
    nome: 'Prof. Ricardo Alves Santos',
    curso:'Ciber Segurança',
    imagem: require('../../assets/images/prof4.avif')
  },
  {
    id: '3',
    nome: 'Prof. Juliana Ferreira',
    curso:'Robótica',
    imagem: require('../../assets/images/prof2.jpg')
  },
  {
    id: '4',
    nome: 'Prof. Marcelo Henrique Costa',
    curso:'Manutenção de Computadores',
    imagem: require('../../assets/images/prof5.webp')
  },

  {
    id: '5',
    nome: 'Prof. Camila Rodrigues',
    curso:'HTML',
    imagem: require('../../assets/images/prof1.jpg')
  },
  {
    id: '6',
    nome: 'Prof. Eduardo Lima Oliveira',
    curso:'Automação Industrial',
    imagem: require('../../assets/images/prof6.png')
  }
]
export default function TabTwoScreen() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
      <Text style={s.header}>Professores</Text>


    {cursos.map((item)=> (

        <View key={item.id} style={s.card}>
          <Image source={item.imagem} style={s.cardImage} resizeMode='cover'/>
          <View style={s.cardBody}>
            <Text style={s.cardTitle}>{item.nome}</Text>
            <Text style={s.cardDesc}>{item.curso}</Text>
          </View>
        </View>
    ))}
    </ScrollView>  


  );

}

const s = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor:'white'
  },
  content:{
    padding: 16,
    paddingBottom:30
  },
  header:{
    color:'#c353b4',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20
  },
  card:{
    flexDirection: 'row', 
    borderRadius: 12,
    marginBottom: 30,
    overflow: 'hidden',
    backgroundColor:'#fff',
    shadowColor: "#2E294E",
    shadowOffset: {
        width: 0,
        height: 12
      },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    padding: 5
  },
  cardImage:{
    width: 80,
    height: 80,
    borderRadius: 40
  },
  cardBody:{
    flex: 1,
    padding: 15
  },
  cardDesc:{

  },
  cardTitle:{
    fontSize: 18,
    fontWeight: 500,
    color:'#c353b4'
  }
});
