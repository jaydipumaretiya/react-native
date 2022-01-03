import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Expenses from '../expenses/Expenses'
import 'react-native-gesture-handler';
import SlelectTruck from '../truck/SlelectTruck';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={SlelectTruck} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Expenses" component={Expenses} />
        <Drawer.Screen name="Contact Us" component={NotificationsScreen} />
        <Drawer.Screen name="About Us" component={NotificationsScreen} />
        <Drawer.Screen name="Terms & Condition" component={NotificationsScreen} />
        {/* <DrawerItem name="Logout" onPress={() => navigation.goBack()} /> */}
      </Drawer.Navigator>
  );
}