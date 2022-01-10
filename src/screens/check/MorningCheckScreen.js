import * as React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MorningCheckStyle from './MorningCheckStyle';
import {Table, Rows} from 'react-native-table-component';
import Dialog from 'react-native-dialog';

export default function MorningCheckScreen({navigation}) {
  const [isChecked, setChecked] = React.useState(true);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    navigation.goBack();
    setVisible(false);
  };

  const elementInput = value => (
    <TouchableOpacity>
      <View style={MorningCheckStyle.inputTable}>
        <TextInput
          style={MorningCheckStyle.textInput}
          placeholder="Enter Value"
          keyboardType="default"
        />
      </View>
    </TouchableOpacity>
  );

  state = {
    tableData: [
      ['Tyers & Wheel Fixing', '', elementInput('1')],
      ['Suppy Suppression', '', elementInput('1')],
      ['Steering', '', elementInput('1')],
      ['Security of Load', '', elementInput('1')],
      ['Garage', '', elementInput('1')],
    ],
  };

  return (
    <View style={MorningCheckStyle.image}>
      <View style={MorningCheckStyle.rowEnd}>
        <Text style={MorningCheckStyle.textStyle}>GJ 05 2525</Text>
      </View>

      <View style={MorningCheckStyle.tableContainer}>
        <Table borderStyle={MorningCheckStyle.borderStyle}>
          <Rows data={state.tableData} textStyle={MorningCheckStyle.text} />
        </Table>
      </View>

      <View style={MorningCheckStyle.row}>
        <View style={MorningCheckStyle.viewFlex}>
          <Text style={MorningCheckStyle.textNormal}>General Remarks</Text>
        </View>
        <View style={MorningCheckStyle.inputView}>
          <TextInput
            style={MorningCheckStyle.textInput}
            placeholder="Enter General Remarks"
            keyboardType="default"
          />
        </View>
      </View>

      <View style={MorningCheckStyle.row}>
        <View style={MorningCheckStyle.viewFlex}>
          <Text style={MorningCheckStyle.textNormal}>Triler Id</Text>
        </View>
        <View style={MorningCheckStyle.inputView2}>
          <TextInput
            style={MorningCheckStyle.textInput}
            placeholder="Triler Id"
            keyboardType="default"
          />
        </View>
        <TouchableOpacity
          style={
            (MorningCheckStyle.checkBoxed,
            {flexDirection: 'row', alignItems: 'center', paddingLeft: 10})
          }
          onPress={() => {
            setChecked(!isChecked);
          }}>
          <Text style={MorningCheckStyle.textNormal}>Nil Defects</Text>
          <Image
            source={
              isChecked
                ? require('../../assets/images/ic_complete.png')
                : require('../../assets/images/ic_uncheck.png')
            }
            resizeMode="contain"
            style={{
              height: 20,
              width: 20,
              marginLeft: 10,
            }}
            activeOpacity={0.6}
          />
        </TouchableOpacity>
      </View>

      <View style={MorningCheckStyle.row}>
        <View style={MorningCheckStyle.viewFlex}>
          <Text style={MorningCheckStyle.textNormal}>Milage</Text>
        </View>
        <View style={MorningCheckStyle.inputView2}>
          <TextInput
            style={MorningCheckStyle.textInput}
            placeholder="0"
            keyboardType="numeric"
          />
        </View>
        <View style={MorningCheckStyle.buttonText}>
          <Text onPress={setVisible} style={MorningCheckStyle.textNormal}>
            Accept & Finalise
          </Text>

          <Dialog.Container visible={visible}>
            <View style={MorningCheckStyle.dialogContainer}>
              <Image
                style={MorningCheckStyle.icon}
                source={require('../../assets/images/right.jpeg')}></Image>
              <Text style={MorningCheckStyle.textSuccess}>Success!</Text>
              <Text style={MorningCheckStyle.textMessage}>
                New morning successfully
              </Text>

              <TouchableOpacity
                style={MorningCheckStyle.okButtonContainer}
                onPress={handleOk}>
                <Text style={MorningCheckStyle.okButton}>Ok</Text>
              </TouchableOpacity>
            </View>
          </Dialog.Container>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  singleHead: {width: 80, height: 40, backgroundColor: '#c8e1ff'},
  head: {flex: 1, backgroundColor: '#c8e1ff'},
  title: {flex: 2, backgroundColor: '#f6f8fa'},
  titleText: {marginRight: 6, textAlign: 'right'},
  text: {textAlign: 'center'},
  btn: {},
  btnText: {textAlign: 'center'},
});
