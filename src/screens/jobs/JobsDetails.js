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
import Dialog from 'react-native-dialog';
import JobsStyle from './JobsStyle';
import MorningCheckStyle from '../check/MorningCheckStyle';

export default function JobsDetails({navigation}) {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleYes = () => {
    setVisible(false);
    navigation.goBack();
  };

  return (
    <View style={JobsStyle.image}>
      <ImageBackground
        source={require('../../assets/images/background.jpeg')}
        style={JobsStyle.image}>
        <SafeAreaView>
          <View style={JobsStyle.rowEndContainer}>
            <Text
              onPress={() => navigation.goBack()}
              style={JobsStyle.textContainer}>
              Home
            </Text>
          </View>

          <View style={JobsStyle.row}>
            <View style={JobsStyle.viewStyle}>
              <Text style={JobsStyle.textNormal}>From :</Text>
            </View>
            <View style={JobsStyle.inputView}>
              <TextInput
                style={JobsStyle.TextInput}
                placeholder="From Address"
                placeholderTextColor="#b3b3b3"
                keyboardType="default"
              />
            </View>
          </View>
          <View style={JobsStyle.row}>
            <View style={JobsStyle.viewStyle} style={JobsStyle.viewStyle}>
              <Text style={JobsStyle.textNormal}>To :</Text>
            </View>
            <View style={JobsStyle.inputView}>
              <TextInput
                style={JobsStyle.TextInput}
                placeholder="To Address"
                placeholderTextColor="#b3b3b3"
                keyboardType="default"
              />
            </View>
          </View>
          <ImageBackground
            style={JobsStyle.map}
            source={require('../../assets/images/map.jpeg')}>
            <Text
              style={JobsStyle.mapText}
              onPress={() => navigation.navigate('map')}>
              Tap here for goto map
            </Text>
          </ImageBackground>

          <View style={JobsStyle.dataContainor}>
            <View style={JobsStyle.emptyRedBand}></View>
            <View style={JobsStyle.insideContainor}>
              <Text style={JobsStyle.yellowBgText}>12540</Text>
              <Text style={JobsStyle.titleText}>Post Code : </Text>
              <Text style={JobsStyle.titleText}>Collection Address : </Text>
              <Text style={JobsStyle.titleText}>Delivery Address : </Text>
              <Text style={JobsStyle.titleText}>Contact : </Text>
              <View style={JobsStyle.descriptionBox}>
                <TextInput style={JobsStyle.TextInput} />
              </View>
            </View>
          </View>

          <View style={JobsStyle.statusContainor}>
            <Text style={JobsStyle.textTitle}>Job Status</Text>
            <View style={JobsStyle.row}>
              <Text style={JobsStyle.button} onPress={setVisible}>
                Collected
              </Text>
              <Text style={JobsStyle.button}>Not Collected</Text>
            </View>
          </View>

          <Dialog.Container visible={visible}>
            <View style={JobsStyle.dialogContainer}>
              <Image source={require('../../assets/images/right.jpeg')}></Image>
              <Text style={MorningCheckStyle.textSuccess}>Are you sure?</Text>
              <Text style={MorningCheckStyle.textMessage}>
                You want to collect?
              </Text>
              <View style={JobsStyle.row}>
                <Text style={JobsStyle.cancelButton} onPress={handleCancel}>
                  Cancel
                </Text>
                <Text style={JobsStyle.successButton} onPress={handleYes}>
                  Yes
                </Text>
              </View>
            </View>
          </Dialog.Container>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
