import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Route from './src/Route';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    color: '#FFFFFF',
    backgroundColor: '#0000e6',
  },

  loginText: {
    color: '#FFFFFF',
  },
});
