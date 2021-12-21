import * as React from 'react';
import {Text, View} from 'react-native';
import MorningCheckStyle from './MorningCheckStyle';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

export default function MorningCheckScreen({navigation}) {
  state = {
    tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
    tableData: [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
      ['1', '2', '3', '456\n789'],
      ['a', 'b', 'c', 'd'],
    ],
  };

  return (
    <View style={MorningCheckStyle.container}>
      <View style={MorningCheckStyle.row}>
        <Text style={MorningCheckStyle.textStyle}>GJ 05 2525</Text>
      </View>
      <View style={MorningCheckStyle.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={state.tableHead}
            style={MorningCheckStyle.head}
            textStyle={MorningCheckStyle.text}
          />
          <Rows data={state.tableData} textStyle={MorningCheckStyle.text} />
        </Table>
      </View>
    </View>
  );
}
