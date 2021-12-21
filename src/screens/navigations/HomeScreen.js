import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function HomeScreen({route, navigation}) {
  React.useEffect(() => {
    if (route.params) {
      // navigation.setOptions({
      //   // title: 'Welcome ' + {route.params?.name} + '..!!',
      // });
    }
  }, [route.params]);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.titleTextStyle}></Text>
        <Text>Email : {route.params?.email}</Text>
        <Text>Password : {route.params?.password}</Text>
        <Button
          title="Go to List Screen"
          onPress={() => navigation.navigate('listScreen')}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleTextStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
