import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import firebase from './../../config/config.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function SalvarPagina(pag){
  firebase.database().ref("/pagina").push({
    pagina: pag,
  })
    alert("item salvo")
}

function SalvarPagina(nom){
  firebase.database().ref("/nome").push({
    nome: nom,
  })
    alert("item salvo")
}

let [pagina, setPagina] = useState();
let [nome, setNome] = useState();


function Index({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UM SONHO SEM NOME</Text>
    </View>
  )
}

function Test_1({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste</Text>
      <Image source={require('./../../assets/test/test_1.png')} style={{width: 300, height: 200}} />
      <Text style={styles.text}>Este é Jonas.</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Test_2')} >
        <Text>proximo</Text>
      </TouchableOpacity>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Home')} >
          <Text>voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Test_1')} >
          <Text>ir pro início</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Test_2({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste</Text>
      <Image source={require('./../../assets/test/test_2.png')} style={{width: 300, height: 200}} />
      <Text style={styles.text}>Este é Carlos.</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Test_3')} >
        <Text>proximo</Text>
      </TouchableOpacity>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Test_1')} >
          <Text>voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Test_1')} >
          <Text>ir pro início</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Test_3({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste</Text>
      <Image source={require('./../../assets/test/test_3.gif')} style={{width: 300, height: 200}} />
      <Text style={styles.text}>Eles amam platonicamente um do outro.</Text>
      <Text style={styles.text}>Fim</Text>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Test_2')} >
          <Text>voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Test_1')} >
          <Text>ir pro início</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Test(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Test_1" component={Test_1} options={{ headerShown: false }}/>
      <Stack.Screen name="Test_2" component={Test_2} options={{ headerShown: false }}/>
      <Stack.Screen name="Test_3" component={Test_3} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

function Creditos() {
  return (
    <View>
      <Text>a</Text>
    </View>
  )
}

function Lista() {
  return (
    <View>
      <Text>a</Text>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Index} />
        <Drawer.Screen name="Teste" component={Test} />        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8BD2D',
    padding: 8
  },
  btn_container:{
    flexDirection: 'row'
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 20
  },
  btn: { 
    backgroundColor:'#F08400', 
    padding: 12, 
    borderRadius:8,  
    alignSelf: 'flex-end',
    margin: 10 
  },
  btn_page: {
    backgroundColor:'#F08400', 
    paddingRight: 10,
    paddingLeft: 10,
    padddingTop: 5,
    paddingBottom: 5,
    margin: 10,
    borderRadius: 5
  },
  text: {
    padding: 10
  }
});

export default App;