import * as React from 'react';
import {Text, TextInput, View} from 'react-native';
import ExpensesStyle from './ExpensesStyle';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';

export default function Expenses({navigation}) {
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

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
            <Text onPress={() => setOpen(true)}>Select Date</Text>
          </View>

          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <View style={ExpensesStyle.column}>
          <Text style={ExpensesStyle.title}>Time</Text>

          <View style={ExpensesStyle.box}>
            <Text onPress={() => setOpen(true)}>Select Time</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
