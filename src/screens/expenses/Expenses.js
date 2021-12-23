import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import ExpensesStyle from './ExpensesStyle';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Expenses({navigation}) {
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

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
    <View style={ExpensesStyle.container}>
      <Text style={ExpensesStyle.title}>Expense Type</Text>

      <View style={ExpensesStyle.box}>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={items}
        />
      </View>

      <Text style={ExpensesStyle.title}>Expense Description</Text>

      <View style={ExpensesStyle.box}>
        <TextInput
          style={ExpensesStyle.textInput}
          placeholder="Expense Description"
          placeholderTextColor="#808080"
          keyboardType="default"
        />
      </View>

      <Text style={ExpensesStyle.title}>Amount</Text>

      <View style={ExpensesStyle.box}>
        <TextInput
          style={ExpensesStyle.textInput}
          placeholder="Amount"
          placeholderTextColor="#808080"
          keyboardType="numeric"
        />
      </View>

      <View style={ExpensesStyle.row}>
        <View style={ExpensesStyle.column}>
          <Text style={ExpensesStyle.title}>Date</Text>

          <View style={ExpensesStyle.box}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
            {/* <Text onPress={showDatepicker}>Select Date</Text> */}
          </View>
        </View>
        <View style={ExpensesStyle.column}>
          <Text style={ExpensesStyle.title}>Time</Text>

          <View style={ExpensesStyle.box}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
            {/* <Text onPress={showTimepicker}>
              Select Time
            </Text> */}
          </View>
        </View>
      </View>

      <View style={ExpensesStyle.row}>
        <Button
          onPress={() => navigation.navigator('')}
          title="Open Sceen for Select photo"
        />
      </View>
    </View>
  );
}
