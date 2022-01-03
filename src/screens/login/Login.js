import * as React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import LoginStyles from './LoginStyles';

export default function Login({navigation}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Liam', value: 'liam'},
    {label: 'Anton', value: 'anton'},
    {label: 'Audrius', value: 'audrius'},
    {label: 'Ramunas', value: 'ramunas'},
    {label: 'Sonny', value: 'sonny'},
    {label: 'Gregorz', value: 'gregorz'},
    {label: 'Hubert', value: 'hubert'},
    {label: 'Z Mikey Office', value: 'z_mikey_office'},
  ]);

  return (
    <View style={LoginStyles.image}>
      <ImageBackground
        source={require('../../assets/images/background.jpeg')}
        style={LoginStyles.image}>
        <View style={LoginStyles.container}>
          <View style={LoginStyles.picker}>
            <RNPickerSelect
              style={LoginStyles.test}
              onValueChange={value => console.log(value)}
              items={items}
            />
          </View>

          <View style={LoginStyles.inputView}>
            <TextInput
              style={LoginStyles.TextInput}
              placeholder="Enter Pin"
              placeholderTextColor="#FFFFFF"
              keyboardType="number-pad"
            />
          </View>

          <TouchableOpacity
            style={LoginStyles.loginBtn}
            onPress={() => navigation.navigate('drawer')}>
            <Text style={LoginStyles.test}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
