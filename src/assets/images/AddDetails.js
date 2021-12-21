import * as React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  Image,
  TextInput,
  Button,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function AddDetails({route, navigation}) {
  React.useEffect(() => {
    if (route.params) {
      // navigation.setOptions({
      //   // title: 'Welcome ' + {route.params?.name} + '..!!',
      // });
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.row}>Item to give cash credit for:</Text>
        <View style={styles.row}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>From :</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Your name"
              placeholderTextColor="#b3b3b3"
              keyboardType="default"
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.viewStyle}style={styles.viewStyle}>
            <Text style={styles.textStyle}>To :</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Your name"
              placeholderTextColor="#b3b3b3"
              keyboardType="default"
            />
          </View>
        </View>

        <Button
          title="Go to Map"
          onPress={() => navigation.navigate('map')}
        />

        <Button
          title="Call API Screen"
          onPress={() => navigation.navigate('callAPI')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 6,
    alignItems: 'center',
  },
  viewStyle: {
    width: '20%',
  },
  textStyle: {
    padding: 8,
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    width: '80%',
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
});
