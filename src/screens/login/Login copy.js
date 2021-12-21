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

  const [selectedValue, setSelectedValue] = React.useState('java');

  const [pin, setName] = React.useState('');
  const [email, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={LoginStyles.image}>
      <ImageBackground
        source={require('../../images/background.jpeg')}
        style={LoginStyles.image}>
        <View style={LoginStyles.container}>
          <View style={LoginStyles.container}>
            <Picker
              selectedValue={items}
              style={{height: 50, width: 150}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>

          <View style={LoginStyles.inputView}>
            <TextInput
              style={LoginStyles.TextInput}
              placeholder="Enter Pin"
              placeholderTextColor="#b3b3b3"
              keyboardType="number-pad"
              onChangeText={name => setName(name)}
            />
          </View>

          <View style={LoginStyles.inputView}>
            <TextInput
              style={LoginStyles.TextInput}
              placeholder="Enter your email address"
              placeholderTextColor="#b3b3b3"
              keyboardType="email-address"
              onChangeText={email => setEmailAddress(email)}
            />
          </View>

          <View style={LoginStyles.inputView}>
            <TextInput
              style={LoginStyles.TextInput}
              placeholder="Enter Password"
              placeholderTextColor="#b3b3b3"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
            />
          </View>

          <TouchableOpacity>
            <Text style={LoginStyles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={LoginStyles.loginBtn}
            onPress={() =>
              navigation.navigate('homeScreen', {
                name,
                email,
                password,
              })
            }>
            <Text style={LoginStyles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
