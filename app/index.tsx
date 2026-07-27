import { Route, router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home(){
    return(
        <View>
            <Text>Inicial</Text>
            <TouchableOpacity onPress={go}>
                <Text>Ir para as Tabs</Text>
            </TouchableOpacity>
        </View>
    )


}
const go = ()=>{
    router.push('/(tabs)')
}