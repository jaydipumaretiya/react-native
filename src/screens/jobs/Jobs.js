import * as React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';
import JobsStyle from './JobsStyle';

export default function Jobs({navigation}) {
  state = {
    tableHead: ['CUSTOMER', 'MODEL', 'REG', 'COLLECTION ADDRESS', 'LANE'],
    tableData: [['9645', 'Scropio', '123456', 'Goa', '4']],
  };

  return (
    <View style={JobsStyle.image}>
      <ImageBackground
        source={require('../../assets/images/background.jpeg')}
        style={JobsStyle.image}>
        <SafeAreaView>
          <View style={JobsStyle.rowEndContainer}>
            <Text
              onPress={() => navigation.navigate('drawer')}
              style={JobsStyle.textContainer}>
              Home
            </Text>
          </View>

          <View style={JobsStyle.tableContainer}>
            <Table borderStyle={JobsStyle.tableBorderStyle}>
              <Row
                data={state.tableHead}
                textStyle={JobsStyle.tableTextTitle}
              />
              <Rows
                onPress={() => navigation.navigate('jobs_details')}
                data={state.tableData}
                textStyle={JobsStyle.tableText}
              />
            </Table>
          </View>

          <View style={JobsStyle.textContainerr}>
            <Text
              style={JobsStyle.text}
              onPress={() => navigation.navigate('damaged')}>
              Load collected
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
