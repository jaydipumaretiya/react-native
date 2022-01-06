import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Rows, Table} from 'react-native-table-component';
import KeysStyle from './KeysStyle';
import RNPickerSelect from 'react-native-picker-select';

export default function Keys({navigation}) {
  state = {
    tableData: [
      ['Description', ''],
      ['V5', ''],
      ['SERVICE BOOK', ''],
      ['HANDBOOK', ''],
      ['SEALED ENVELOPE', ''],
      ['SD CARD', ''],
      ['SPARE WHEEL', ''],
      ['PARCEL SHELF', ''],
      ['SPARE WHEEL TOOL KIT', ''],
      ['CHARGING CABLE', ''],
    ],
  };

   const [items, setItems] = React.useState([
    {label: '0', value: '0'},
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
   ]);
  
  return (
    <View style={KeysStyle.image}>
      <ImageBackground
        source={require('../../assets/images/background.jpeg')}
        style={KeysStyle.image}>
        <SafeAreaView>
          <View style={KeysStyle.rowEndContainer}>
            <Text
              onPress={() => navigation.navigate('drawer')}
              style={KeysStyle.textContainer}>
              Home
            </Text>
          </View>

          <View style={KeysStyle.row}>
            <View>
              <Text style={KeysStyle.textPadding}>NUMBER OF KEYS :</Text>
            </View>
            <View style={KeysStyle.spinner}>
              <RNPickerSelect
                onValueChange={value => console.log(value)}
                items={items}
              />
            </View>
          </View>
          <View style={KeysStyle.tableContainer}>
            <Table borderStyle={KeysStyle.borderStyle}>
              <Rows data={state.tableData} textStyle={KeysStyle.text} />
            </Table>
          </View>

          <Text
            style={KeysStyle.textButton}
            onPress={() => navigation.navigate('submit')}>
            Next
          </Text>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
