import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Products from './src/components/Products';
import Home from './src/components/Home';
import CameraComponent from './src/components/CameraComponent';
import CambiarUrlApi from './src/components/CambiarUrlApi';
const App = () => {
  const Stack = createNativeStackNavigator();
  // Establecer el estado de la URL de la API
  const [apiUrl, setApiUrl] = useState('http://192.168.1.75:3000/products/'); 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={CameraComponent} />

        <Stack.Screen name="Products" options={{title: 'Productos'}}>
          {props => <Products {...props} apiUrl={apiUrl} />}
        </Stack.Screen>

        <Stack.Screen name="urlApi" options={{title: 'Cambiar URL'}}>
          {props => <CambiarUrlApi {...props} onChangeUrl={setApiUrl} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default App;