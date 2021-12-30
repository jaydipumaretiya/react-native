import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login/Login';
import SlelectTruck from './screens/truck/SlelectTruck';
import MorningCheckScreen from './screens/check/MorningCheckScreen';
import Expenses from './screens/expenses/Expenses';
import SelectPhoto from './screens/photo/SelectPhoto';
import Jobs from './screens/jobs/Jobs';
import Loads from './screens/loads/Loads';
import JobsDetails from './screens/jobs/JobsDetails';
import MapScreen from './screens/jobs/MapScreen';
import Damaged from './screens/jobs/Damaged';

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
          headerShown: false,
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
          headerShown: false,
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
      <Stack.Screen
        name="jobs"
        component={Jobs}
        options={{
          title: 'Jobs',
          headerBackVisible: true,
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="loads"
        component={Loads}
        options={{
          title: 'Loads',
          headerBackVisible: true,
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="jobs_details"
        component={JobsDetails}
        options={{
          title: 'Jobs Details',
          headerBackVisible: true,
          headerTitleAlign: 'center',
          headerShown: false,
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
        name="damaged"
        component={Damaged}
        options={{
          title: 'Damaged',
          headerBackVisible: true,
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
