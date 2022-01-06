import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SubmitStyles from './SubmitStyles';
import Dialog from 'react-native-dialog';
import MorningCheckStyle from '../check/MorningCheckStyle';

export default function Submit({navigation}) {
  const [visibleSuccess, setVisibleSuccess] = React.useState(false);

  const showSuccessDialog = () => {
    setVisibleSuccess(true);
  };

  const handleOk = () => {
    navigation.navigate('jobs');
    setVisibleSuccess(false);
  };

  return (
    <View style={SubmitStyles.container}>
      <SafeAreaView>
        <Text style={SubmitStyles.title}>Name</Text>
        <View style={SubmitStyles.box}>
          <TextInput
            style={SubmitStyles.textInput}
            placeholder="Enter name"
            placeholderTextColor="#808080"
            keyboardType="default"
          />
        </View>
        <Text style={SubmitStyles.title}>Email Address</Text>
        <View style={SubmitStyles.box}>
          <TextInput
            style={SubmitStyles.textInput}
            placeholder="Enter email"
            placeholderTextColor="#808080"
            keyboardType="default"
          />
        </View>
        <Text style={SubmitStyles.title}>Note</Text>
        <View style={SubmitStyles.box}>
          <TextInput
            style={SubmitStyles.textBigInput}
            placeholder="Enter notes"
            placeholderTextColor="#808080"
            keyboardType="default"
          />
        </View>
        <Text style={SubmitStyles.title}>Signature</Text>
        <View style={SubmitStyles.box}>
          <Text
            style={SubmitStyles.textCenter}
            onPress={() => navigation.navigate('signature')}>
            Tap for Signature
          </Text>
        </View>

        <Text style={SubmitStyles.textNext} onPress={showSuccessDialog}>
          Next
        </Text>

        <Dialog.Container visible={visibleSuccess}>
          <View style={SubmitStyles.dialogSuccessContainer}>
            <Image source={require('../../assets/images/right.jpeg')}></Image>
            <Text style={MorningCheckStyle.textSuccess}>Success!</Text>
            <TouchableOpacity
              style={MorningCheckStyle.okButtonContainer}
              onPress={handleOk}>
              <Text style={MorningCheckStyle.okButton}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Dialog.Container>
      </SafeAreaView>
    </View>
  );
}
