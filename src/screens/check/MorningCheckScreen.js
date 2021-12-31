import * as React from 'react';
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MorningCheckStyle from './MorningCheckStyle';
import {Table, Rows} from 'react-native-table-component';
import Dialog from 'react-native-dialog';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from 'react-native-check-box';

export default function MorningCheckScreen({navigation}) {
  const [isChecked, setChecked] = React.useState(false);
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

  state = {
    tableData: [
      ['Tyers & Wheel Fixing', '', '', ''],
      ['Suppy Suppression', '', '', ''],
      ['Steering', '', '', ''],
      ['Security of Load', '', '', ''],
      ['Garage', '', '', ''],
    ],
  };

  return (
    <View style={MorningCheckStyle.image}>
      {/* <ImageBackground
        source={require('../../assets/images/background.jpeg')}
        style={MorningCheckStyle.image}> */}
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
          <Text>General Remarks</Text>
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
          <Text>Triler Id</Text>
        </View>
        <View style={MorningCheckStyle.inputView2}>
          <TextInput
            style={MorningCheckStyle.textInput}
            placeholder="Triler Id"
            keyboardType="default"
          />
        </View>
        <CheckBox
          style={MorningCheckStyle.checkBoxed}
          onClick={() => {
            setChecked({
              isChecked: !state.isChecked,
            });
          }}
          isChecked={state.isChecked}
          leftText={'Nil Defects'}
        />
      </View>

      <View style={MorningCheckStyle.row}>
        <View style={MorningCheckStyle.viewFlex}>
          <Text>Milage</Text>
        </View>
        <View style={MorningCheckStyle.inputView2}>
          <TextInput
            style={MorningCheckStyle.textInput}
            placeholder="0"
            keyboardType="numeric"
          />
        </View>
        <View style={MorningCheckStyle.buttonText}>
          <Text onPress={setVisible}>Accept & Finalise</Text>

          <Dialog.Container visible={visible}>
            <View style={MorningCheckStyle.dialogContainer}>
              <Image source={require('../../assets/images/right.jpeg')}></Image>
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
      {/* </ImageBackground> */}
    </View>
  );
}
