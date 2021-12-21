import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login/Login';
import SlelectTruck from './screens/truck/SlelectTruck';
import MorningCheckScreen from './screens/check/MorningCheckScreen';

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'Login',
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="selectTruck"
        component={SlelectTruck}
        options={{
          title: 'Select Truck',
          headerTitleAlign: 'center',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="morningCheck"
        component={MorningCheckScreen}
        options={{
          title: 'Morning Check',
          headerTitleAlign: 'center',
          headerBackVisible: true,
        }}
      />
      {/* <Stack.Screen
        name="homeScreen"
        component={HomeScreen}
        options={({route}) => ({
          title: route.params.name,
          headerBackVisible: true,
        })}
      />
      <Stack.Screen
        name="listScreen"
        component={ListScreen}
        options={{
          title: 'List of Data',
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
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
