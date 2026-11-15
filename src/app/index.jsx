import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import './components/font.js';
import firebase from './config/config.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
let comic = []

function GetPagina() {
  firebase.database().ref("comic").once('value', snapshot => {
    let data = snapshot.val();
    if (data == null) {
      console.log("Não encontrado!")
    } else {
      let dados = Object.values(data)
      let pag = ({ comic: dados })
      return pag
    }
  })
}

function GetNome() {
  firebase.database().ref("comic").child('nome').on('value', snapshot =>{
    let data  = snapshot.val();
    if(data == null){
      alert("Não encontrado!")
    }
    else{
      let dados = Object.values(data)
      return dados
    }
  })
}



function Apagar() {
  firebase.database().ref('/comic').remove();
}

function Salvar(n, p) {
  firebase.database().ref('/comic').push ({
    nome: n,
    pag: p
  })
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
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>UM SONHO SEM NOME</Text>
        <Image source={require('./assets/comic/page001.png')} style={styles.image} />
        <Text style={styles.text}>Você é uma garota dormindo em seu quarto. Apesar de ter 15 anos, você ainda não tem um nome.</Text>
        <Text style={styles.text}>Decida um novo nome pra você.</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 2')} >
          <Text style={styles.text_btn}>Acordar</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Home')} >
            <Text style={styles.text_btn_tiny}>voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => navigation.navigate('Página 1')} >
            <Text style={styles.text_btn_tiny}>ir pro início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + Salvar('nameless', 1)} >
            <Text style={styles.text_btn_tiny}>salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + alert("Apagado")} >
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
        <Text style={styles.text}>Seu nome é {GetNome()}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Página 2')} >
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
          <TouchableOpacity style={styles.btn_page} onPress={() => Apagar() + alert("Apagado")} >
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
      <Stack.Screen name="Página 1" component={Page001} options={{ headerShown: false }}/>
      <Stack.Screen name="Página 2" component={Page002} options={{ headerShown: false }}/>
    </Stack.Navigator>
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
      </View>
    </ScrollView>
  )
}

function Galeria() {
  return (
    <View style={styles.container}>
      <Text>a</Text>
    </View>
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
    justifyContent: 'center',
    backgroundColor: '#F8BD2D',
    padding: 5,
    textAlign: 'center'
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
    borderRadius:8,  
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
    margin: 10,
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
    fontSize: 25,
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