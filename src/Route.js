import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login/Login';
import SlelectTruck from './screens/truck/SlelectTruck';
import MorningCheckScreen from './screens/check/MorningCheckScreen';
import Expenses from './screens/expenses/Expenses';
import SelectPhoto from './screens/photo/SelectPhoto';

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'Login',
          headerBackTitle: '',
          headerTitleAlign: 'center',
          headerBackVisible: true,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="selectTruck"
        component={SlelectTruck}
        options={{
          title: 'Select Truck',
          headerBackTitle: '',
          headerTitleAlign: 'center',
          headerBackVisible: true,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="morningCheck"
        component={MorningCheckScreen}
        options={{
          title: 'Morning Check',
          headerBackTitle: '',
          headerTitleAlign: 'center',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="expenses"
        component={Expenses}
        options={{
          title: 'Expenses',
          headerBackTitle: '',
          headerTitleAlign: 'center',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="selectPhoto"
        component={SelectPhoto}
        options={{
          title: 'Select Photo',
          headerBackTitle: '',
          headerTitleAlign: 'center',
          headerBackVisible: true,
        }}
      />
      {/*  <Stack.Screen
        name="addDetails"
        component={AddDetails}
        options={{
          title: 'Add Details',
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="map"
        component={MapScreen}
        options={{
          title: 'Map',
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="callAPI"
        component={CallAPIScreen}
        options={{
          title: 'API Call',
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      /> */}
    </Stack.Navigator>
  );
}
