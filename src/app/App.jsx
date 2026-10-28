import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Index({ navigation }) {
  return (
    <View>
      <Text>Shift</Text>
    </View>
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

function Test_1({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste</Text>
      <Image source={require('./../../assets/test/test_1.png')} style={{width: 300, height: 200}} />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Test_2')} >
        <Text>proximo</Text>
      </TouchableOpacity>
    </View>
  )
}

function Test_2({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste</Text>
      <Image source={require('./../../assets/test/test_2.png')} style={{width: 300, height: 200}} />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Test_3')} >
        <Text>proximo</Text>
      </TouchableOpacity>
    </View>
  )
}

function Test_3({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste</Text>
      <Image source={require('./../../assets/test/test_3.gif')} style={{width: 300, height: 200}} />
    </View>
  )
}

function Test(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Test_1" component={Test_1} />
      <Stack.Screen name="Test_2" component={Test_2} />
      <Stack.Screen name="Test_3" component={Test_3} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Index" component={Index} />
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
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 20
  },
  btn: { 
    backgroundColor:'#F8BD2D', 
    padding:12, 
    borderRadius:8,  
    alignItems:'end',
    margin: 10 
  },
});

export default App;