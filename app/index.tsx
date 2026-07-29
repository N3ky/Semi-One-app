import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

export default function Home(){
    

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    
    const go = ()=>{
        console.log(pass,email);
        router.push('/(tabs)')
    }

    return(
        <View style={s.body}>
            <View style={s.wrap}>
                <Text style= {s.t}>Login</Text>
                <View style={s.divider} />
                <Text style= {s.t}>Email</Text>
                <TextInput style ={s.input} onChangeText={setEmail} value={email} placeholder="Insira o E-mail"/>
                <Text style= {s.t}>Senha</Text>
                <TextInput style ={s.input} onChangeText={setPass} value={pass} placeholder="Insira o Senha"/>
                <View>
                    <TouchableOpacity style={s.button} onPress={go}>
                        <Text style={s.btnText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

const s = StyleSheet.create({

    divider: {
    height: 2,
    backgroundColor: "#be97c6",
    },

    body:{
        backgroundColor:'#be97c6',
        flex: 1
    },
    wrap:{
        gap: 7,
        backgroundColor: '#EFBCD5',
        width: '60%',
        height: 265,
        alignSelf: 'center',
        marginTop: '65%',
        padding: 30,
        borderRadius: 10,
        shadowColor: "#2E294E",
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24

    },

    t: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18
    },

    input: {
        paddingHorizontal: 10,
        paddingVertical:3,
        backgroundColor: '#f8e5fc',
        borderRadius: 5
    },

    button:{
        backgroundColor: '#f8e5fc',
        borderRadius: 5,
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
    btnText:{
        textAlign:'center',
        fontSize: 18,
        fontWeight: 600
    },
})