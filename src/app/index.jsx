import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getDatabase, onValue, ref } from "firebase/database";
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Vibration, View } from 'react-native';
import './components/font.js';
import firebase from './config/config.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
let protag = 'Misaki'


function GetPagina() {
  const db = getDatabase();
  const starCountRef = ref(db, 'comic/' + id + '/pag');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    return data
  });
}

function GetNome() {
  const db = getDatabase();
  const starCountRef = ref(db, 'comic' + id + '/nome');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    return data
  });
}

function Apagar() {
  firebase.database().ref('/comic').remove();
  Vibration.vibrate(1000)
  alert("Deletado")
}

function Salvar(n, p) {
  firebase.database().ref('/comic').push ({
    nome: n,
    pag: p
  })
    Vibration.vibrate(1000)
    alert("Salvo")
}


function Index({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>UM SONHO SEM NOME</Text>
        <Image source={require('./assets/comic/page001.png')} style={styles.image} />
        <TouchableOpacity style={styles.btn_home} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 1' })} >
          <Text style={styles.text_btn}>COMEÇAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_home} onPress={() => navigation.navigate('UM SONHO SEM NOME')} >
          <Text style={styles.text_btn}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>  
  )
}

function Page001({ navigation }){
  let [nome, setNome] = useState('')
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>UM SONHO SEM NOME</Text>
        <Image source={require('./assets/comic/page001.png')} style={styles.image} />
        <Text style={styles.text}>Você é uma garota dormindo em seu quarto. Apesar de ter 15 anos, você ainda não tem um nome.</Text>
        <Text style={styles.text}>Decida um novo nome pra você.</Text>
        <TextInput style={styles.input} onChangeText={setNome}/>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 2') + setNome(nome)} >
          <Text style={styles.text_btn}>Acordar</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Home')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar(nome, 1)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  )
}

function Page002({ navigation }){
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Acordar</Text>
        <Image source={require('./assets/comic/page002.png')} style={styles.image} />
        <Text style={styles.text}>Seu nome é {protag}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 3')} >
          <Text style={styles.text_btn}>Proximo</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 2)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function Page003({ navigation }){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('./assets/comic/page003.png')} style={styles.image} />
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 4')} >
          <Text style={styles.text_btn}>Explorar o quarto</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 2')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 3)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function Page004({ navigation }){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Explorar o quarto</Text>
        <Image source={require('./assets/comic/page004.png')} style={styles.image} />
        <Text style={styles.text}>Primeiro você tem que se vestir de forma ideal.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 5')} >
          <Text style={styles.text_btn}>Se vestir de forma ideal</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 3')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 4)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function Page005({ navigation }){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Se vestir de forma ideal</Text>
        <Image source={require('./assets/comic/page005.png')} style={styles.image} />
        <Text style={styles.text}>Assim está bom.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 6')} >
          <Text style={styles.text_btn}>Seu quarto</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 4')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 5)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function Page006({ navigation }){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Seu quarto</Text>
        <Image source={require('./assets/comic/page006.png')} style={styles.image} />
        <Text style={styles.text}>Este é o seu quarto.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 7')} >
          <Text style={styles.text_btn}>O que você quer fazer?</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 5')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 6)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function Page007({ navigation }){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>O que você quer fazer?</Text>
        <Image source={require('./assets/comic/page007.png')} style={styles.image} />
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 8')} >
          <Text style={styles.text_btn}>Olhar pela janela</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 9')} >
          <Text style={styles.text_btn}>Mostrar afeto pelo gato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 10')} >
          <Text style={styles.text_btn}>Sair do quarto</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 6')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 7)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function Page008({ navigation }){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>O que você quer fazer?</Text>
        <Image source={require('./assets/comic/page008_a.png')} style={styles.image} />
        <Image source={require('./assets/comic/page008_b.png')} style={styles.image} />
        <Text style={styles.text}>O dia parece estar maravilhoso, até o céu esta da sua cor favortita.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 7')} >
          <Text style={styles.text_btn}>O que você quer fazer?</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 7')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 8)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function Page009({ navigation }){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Mostrar afeto pelo gato</Text>
        <Image source={require('./assets/comic/page009.gif')} style={styles.image} />
        <Text style={styles.text}>(^_  _^₎⟆ </Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 7')} >
          <Text style={styles.text_btn}>O que você quer fazer?</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 7')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 9)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function Page010({ navigation }){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Sair do quarto</Text>
        <Image source={require('./assets/comic/page010.png')} style={styles.image} />
        <Text style={styles.text}>...</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 11')} >
          <Text style={styles.text_btn}>Proximo</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 7')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 10)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function Page011({ navigation }){
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Sair do quarto</Text>
        <Image source={require('./assets/comic/page011.png')} style={styles.image} />
        <Text style={styles.text}>Você não se sente preparada para sair deste lugar.</Text>
        <Text style={styles.text}>O mundo lá fora é assustador.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 7')} >
          <Text style={styles.text_btn}>O que você quer fazer?</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 10')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 11)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar()} >
            <Text style={styles.text_btn_tiny}>deletar</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>  
  )
}

function UmSonhoSemNome(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Página 1"  component={Page001} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 2"  component={Page002} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 3"  component={Page003} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 4"  component={Page004} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 5"  component={Page005} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 6"  component={Page006} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 7"  component={Page007} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 8"  component={Page008} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 9"  component={Page009} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 10" component={Page010} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 11" component={Page011} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

function Paginas() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 1' })} >
            <Text style={styles.text_btn_tiny}>001 - UM SONHO SEM NOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 2' })} >
            <Text style={styles.text_btn_tiny}>002 - Acordar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 3' })} >
            <Text style={styles.text_btn_tiny}>003 - Explorar o quarto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 4' })} >
            <Text style={styles.text_btn_tiny}>004 - Se vestir de forma ideal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 5' })} >
            <Text style={styles.text_btn_tiny}>005</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 6' })} >
            <Text style={styles.text_btn_tiny}>006 - Seu quarto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 7' })} >
            <Text style={styles.text_btn_tiny}>007 - O que você quer fazer?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 8' })} >
            <Text style={styles.text_btn_tiny}>008 - Olhar pela janela</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 9' })} >
            <Text style={styles.text_btn_tiny}>009 - Mostrar afeto pelo gato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 10' })} >
            <Text style={styles.text_btn_tiny}>010 - Sair do quarto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_list} onPress={() => navigation.navigate('UM SONHO SEM NOME', { screen: 'Página 11' })} >
            <Text style={styles.text_btn_tiny}>011</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

function Galeria() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Galeria</Text>
        <Image source={require('./assets/comic/page001.png')} style={styles.image} />
        <Image source={require('./assets/comic/page002.png')} style={styles.image} />
        <Image source={require('./assets/comic/page003.png')} style={styles.image} />
        <Image source={require('./assets/comic/page004.png')} style={styles.image} />
        <Image source={require('./assets/comic/page005.png')} style={styles.image} />
        <Image source={require('./assets/comic/page006.png')} style={styles.image} />
        <Image source={require('./assets/comic/page007.png')} style={styles.image} />
        <Image source={require('./assets/comic/page008_a.png')} style={styles.image} />
        <Image source={require('./assets/comic/page008_b.png')} style={styles.image} />
        <Image source={require('./assets/comic/page009.gif')} style={styles.image} />
        <Image source={require('./assets/comic/page010.png')} style={styles.image} />
        <Image source={require('./assets/comic/page011.png')} style={styles.image} />
      </View>
    </ScrollView>
  )
}

function Creditos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créditos</Text>
      <Image source={require('./assets/misc/gustavo.jpg')} style={styles.image_credits} />
      <Text style={styles.title_credits}>Gustavo Yuri Nishi</Text>
      <Text style={styles.text}>História, arte e programação</Text>
    </View>
  )
}

function Test_1({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste</Text>
      <Image source={require('./assets/test/test_1.png')} style={styles.image} />
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
      <Image source={require('./assets/test/test_2.png')} style={styles.image} />
      <Text style={styles.text}>E esse é Carlos.</Text>
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
      <Image source={require('./assets/test/test_3.gif')} style={styles.image} />
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

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Index} />
        <Drawer.Screen name="UM SONHO SEM NOME" component={UmSonhoSemNome} />
        <Drawer.Screen name="Páginas" component={Paginas} /> 
        <Drawer.Screen name="Galeria" component={Galeria} /> 
        <Drawer.Screen name="Créditos" component={Creditos} /> 
        <Drawer.Screen name="Teste" component={Test} />      
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'stretch',
    backgroundColor: '#F8BD2D',
    padding: 5,
    textAlign: 'center',
    height: '200%'
  },
  btn_container:{
    flexDirection: 'row'
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 20,
    fontFamily: 'GohuFont'
  },
  title_credits:{
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'GohuFont'
  },
  btn: { 
    backgroundColor:'#F08400', 
    padding: 12, 
    borderRadius: 8,  
    alignSelf: 'flex-end',
    margin: 10 
  },
  btn_list: { 
    backgroundColor:'#F08400', 
    padding: 10, 
    borderRadius:8,  
    alignSelf: 'center',
    margin: 4,
    width: 300,
  },
  btn_page: {
    backgroundColor:'#F08400', 
    padding: 5,
    margin: 7,
    borderRadius: 5
  },
  btn_home: {
    backgroundColor:'#F08400', 
    padding: 5,
    margin: 10,
    borderRadius: 5,
    width: 160,
  },
  text: {
    padding: 10,
    textAlign: 'center',
    fontFamily: 'GohuFont'
  },
  text_btn: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'GohuFont'
  },
  text_btn_tiny: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'GohuFont'
  },
  image: {
    width: 300,
    height: 225,
    marginBottom: 10
  },
  image_credits:{
    width: 150,
    height: 150,
    marginBottom: 10
  },
  input: {  
    borderWidth: 1, 
    borderRadius: 3, 
    padding: 8, 
    width: 150,
    backgroundColor: '#FFFFFF',
    fontFamily: 'GohuFont'
  }
});

export default App;