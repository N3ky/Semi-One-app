import { router } from "expo-router";
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

export default function HomeScreen() {
  return (

    <ScrollView contentContainerStyle={s.container}>
      <Image source={require('../../assets/images/senai.jpg')} style={s.image} resizeMode='cover'/>
    <View style={s.content}>
      <Text style={s.title}>SENAI Curitiba</Text>
      <Text style={s.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio neque, dolores aut tenetur 
        repudiandae eaque! Saepe corporis minima obcaecati 
        harum magni, vero fuga eos cupiditate modi quis ipsam est!
      </Text>
      <TouchableOpacity style={s.button} onPress={() => router.push('/explore')}>
        <Text style={s.buttonText}>Lista de cursos</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  image:{
    width:'100%',
    height: 220
  },
  content:{
    padding: 20
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    color: '#c353b4',
    marginBottom: 12
  },
  paragraph:{
    fontSize: 16,
    lineHeight:22,
    color:'#0a0909',
    marginBottom: 30
  },
  button:{
    backgroundColor: '#cda3d6',
    paddingVertical: 14,
    paddingHorizontal:20,
    borderRadius:8,
    alignSelf:'flex-end'
    },
  buttonText:{
    color: "#fff",
    fontSize: 20,
    textAlign:'center',
    fontWeight: 'bold'
    },
});
