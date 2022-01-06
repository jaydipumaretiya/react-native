import React, {createRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SubmitStyles from './SubmitStyles';
import SignatureCapture from 'react-native-signature-capture';

export default function SignatureScreen({navigation}) {
  const sign = createRef();

  const saveSign = () => {
    sign.current.saveImage();
  };

  const resetSign = () => {
    sign.current.resetImage();
  };

  const _onSaveEvent = result => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    alert('Signature Captured Successfully');
    console.log(result.encoded);
  };

  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
  };

  return (
    <View style={SubmitStyles.container}>
      <SignatureCapture
        style={styles.signature}
        ref={sign}
        onSaveEvent={_onSaveEvent}
        onDragEvent={_onDragEvent}
        showNativeButtons={false}
        showTitleLabel={false}
        viewMode={'portrait'}
      />

      <View style={SubmitStyles.row}>
        <Text
          style={SubmitStyles.clearButtonContainer}
          onPress={() => {
            resetSign();
          }}>
          Clear
        </Text>
        <Text
          style={SubmitStyles.okButtonContainer}
          onPress={() => navigation.goBack()}>
          Ok
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});
