import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Rows, Table} from 'react-native-table-component';
import KeysStyle from './KeysStyle';

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

  return (
    <View style={KeysStyle.image}>
      <ImageBackground
        source={require('../../assets/images/background.jpeg')}
        style={KeysStyle.image}>
        <SafeAreaView>
          <View style={KeysStyle.rowEndContainer}>
            <Text
              onPress={() => navigation.goBack()}
              style={KeysStyle.textContainer}>
              Home
            </Text>
          </View>

          <Text style={KeysStyle.textPadding}>NUMBER OF KEYS :</Text>

          <View style={KeysStyle.tableContainer}>
            <Table borderStyle={KeysStyle.borderStyle}>
              <Rows data={state.tableData} textStyle={KeysStyle.text} />
            </Table>
          </View>

          <Text style={KeysStyle.textButton} onPress={() => navigation.navigate('submit')}>Next</Text>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
