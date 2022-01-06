import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SubmitStyles from './SubmitStyles';
import SignatureCapture from 'react-native-signature-capture';

export default function SignatureScreen({navigation}) {
  return (
    <View style={SubmitStyles.container}>
        <SignatureCapture
          style={[{flex: 1}, styles.signature]}
          // onSaveEvent={_onSaveEvent}
          // onDragEvent={_onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={true}
        />
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
