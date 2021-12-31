import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DamagedStyle from './DamagedStyle';
import Dialog from 'react-native-dialog';

export default function Damaged({navigation}) {
  const [visible, setVisible] = React.useState(false);
  const [visibleSuccess, setVisibleSuccess] = React.useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const selectPhoto = () => {
    setVisible(false);
  };

  const takePicture = () => {
    setVisible(false);
  };

  const showSuccessDialog = () => {
    setVisibleSuccess(true);
  };

  const handleOk = () => {
    navigation.navigate('keys');
    setVisibleSuccess(false);
  };

  return (
    <View style={DamagedStyle.container}>
      <SafeAreaView>
        <View style={DamagedStyle.rowEndContainer}>
          <Text
            onPress={() => navigation.goBack()}
            style={DamagedStyle.textContainer}>
            Home
          </Text>
        </View>

        <Image
          style={DamagedStyle.image}
          source={require('../../assets/images/map.jpeg')}
        />

        <View style={DamagedStyle.row}>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Dent
          </Text>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Broken
          </Text>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Cracked
          </Text>
        </View>

        <View style={DamagedStyle.row}>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Chipped
          </Text>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Scratched
          </Text>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Holed
          </Text>
        </View>

        <View style={DamagedStyle.row}>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Missing
          </Text>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Other
          </Text>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Torn
          </Text>
        </View>

        <View style={DamagedStyle.row}>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            Reset
          </Text>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showSuccessDialog(true)}>
            Recoed & Continue
          </Text>
          <Text
            style={DamagedStyle.textButton}
            onPress={() => showDialog(true)}>
            View Photos
          </Text>
        </View>

        <Dialog.Container visible={visible}>
          <View style={DamagedStyle.dialogContainer}>
            <Text style={DamagedStyle.textTitle}>Take Dent Photo</Text>
            <Text
              style={DamagedStyle.textMessage}
              onPress={() => takePicture(true)}>
              Take a photo
            </Text>
            <Text
              style={DamagedStyle.textMessage}
              onPress={() => selectPhoto(true)}>
              Pick from Gallery
            </Text>
          </View>
        </Dialog.Container>

        <Dialog.Container visible={visibleSuccess}>
          <View style={DamagedStyle.dialogSuccessContainer}>
            <Image source={require('../../assets/images/right.jpeg')}></Image>
            <Text style={DamagedStyle.textSuccess}>Success!</Text>
            <Text style={DamagedStyle.textMessage}>
              New morning successfully
            </Text>

            <TouchableOpacity
              style={DamagedStyle.okButtonContainer}
              onPress={handleOk}>
              <Text style={DamagedStyle.okButton}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Dialog.Container>
      </SafeAreaView>
    </View>
  );
}
