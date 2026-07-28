import { StyleSheet ,Text, View, ScrollView,Image, ImageSourcePropType} from 'react-native';

type Curso ={
  id: string;
  titulo:string;
  descricao: string;
  imagem: ImageSourcePropType | undefined;
}

const cursos: Curso[] = [
  {
    id: '1',
    titulo: 'Automação Industrial',
    descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque a voluptates quibusdam rerum? Sequi, optio vitae corporis cumque mollitia iste. Consequuntur laborum temporibus provident at dicta? Molestiae est in voluptates?',
    imagem: require('../../assets/images/auto4.avif')
  },
  {
    id: '2',
    titulo: 'HTML',
    descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque a voluptates quibusdam rerum? Sequi, optio vitae corporis cumque mollitia iste. Consequuntur laborum temporibus provident at dicta? Molestiae est in voluptates?',
    imagem: require('../../assets/images/html1.jpg')
  },
  {
    id: '3',
    titulo: 'Manutenção de Computadores',
    descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque a voluptates quibusdam rerum? Sequi, optio vitae corporis cumque mollitia iste. Consequuntur laborum temporibus provident at dicta? Molestiae est in voluptates?',
    imagem: require('../../assets/images/manutenção.png')
  },
  {
    id: '4',
    titulo: 'Robotica',
    descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque a voluptates quibusdam rerum? Sequi, optio vitae corporis cumque mollitia iste. Consequuntur laborum temporibus provident at dicta? Molestiae est in voluptates?',
    imagem: require('../../assets/images/robotica.png')
  },

  {
    id: '5',
    titulo: 'Ciber Segurança',
    descricao:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque a voluptates quibusdam rerum? Sequi, optio vitae corporis cumque mollitia iste. Consequuntur laborum temporibus provident at dicta? Molestiae est in voluptates?',
    imagem: require('../../assets/images/ciber.png')
  }
]
export default function TabTwoScreen() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
      <Text style={s.header}>Cursos Técnicos SENAI</Text>


    {cursos.map((item)=> (
      <View key={item.id} style={s.card}>
        <Image source={item.imagem} style={s.cardImage} resizeMode='cover'/>
        <View style={s.cardBody}>
          <Text style={s.cardTitle}>{item.titulo}</Text>
          <Text style={s.cardDesc}>{item.descricao}</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20
  },
  card:{
    borderRadius: 12,
    marginBottom: 30,
    overflow: 'hidden',
    backgroundColor:'#fffff',
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
    width:'100%',
    height: 220
  },
  cardBody:{
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
