import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import Keys from './screens/key/Keys';
import Submit from './screens/submit/Submit';
import DrawerScreen from './screens/drawer/DrawerScreen';
import SignatureScreen from './screens/submit/SignatureScreen';

const Stack = createNativeStackNavigator();

export default function Route() {
  const mainStack = () => {
    return(
     <Stack.Navigator screenOptions={baseHeaderOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen}/>
     </Stack.Navigator>
  )
}
const secondStack = () => { //Import the other screens you use!
    return(
     <Stack.Navigator screenOptions={baseHeaderOptions}>
      <Stack.Screen name="Other" component={OtherScreen} />
      <Stack.Screen name="Screens" component={DiffScreen}/>
     </Stack.Navigator>
  )
}

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
        name="drawer"
        component={DrawerScreen}
        options={{
          title: 'Submit',
          headerBackVisible: true,
          headerTitleAlign: 'Drawer',
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
      <Stack.Screen
        name="keys"
        component={Keys}
        options={{
          title: 'Keys',
          headerBackVisible: true,
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="submit"
        component={Submit}
        options={{
          title: 'Submit',
          headerBackVisible: true,
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signature"
        component={SignatureScreen}
        options={{
          title: 'SignatureCapture',
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
