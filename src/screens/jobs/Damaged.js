import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DamagedStyle from './DamagedStyle';
import Dialog from 'react-native-dialog';
import MorningCheckStyle from '../check/MorningCheckStyle';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {captureScreen} from 'react-native-view-shot';

export default function Damaged({navigation}) {
  const [visible, setVisible] = React.useState(false);
  const [visibleSuccess, setVisibleSuccess] = React.useState(false);
  const [showImage, setShowImage] = React.useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const selectPhoto = () => {
    setVisible(false);
    chooseFile('photo');
  };

  const takePicture = () => {
    setVisible(false);
    chooseFileCamera();
  };

  const showSuccessDialog = () => {
    setVisibleSuccess(true);
  };

  const handleOk = () => {
    navigation.navigate('keys');
    setVisibleSuccess(false);
  };

  const [filePath, setFilePath] = React.useState({});

  requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        // alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  chooseFileCamera = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    let isCameraPermitted = this.requestCameraPermission();
    let isStoragePermitted = this.requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setVisible(false);
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  const [imageURI, setImageURI] = React.useState(
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
  );
  const [savedImagePath, setSavedImagePath] = React.useState('');

  const takeScreenShot = () => {
    // To capture Screenshot
    captureScreen({
      // Either png or jpg (or webm Android Only), Defaults: png
      format: 'jpg',
      // Quality 0.0 - 1.0 (only available for jpg)
      quality: 0.8,
    }).then(
      //callback function to get the result URL of the screnshot
      uri => {
        setSavedImagePath(uri);
        setImageURI(uri);
        setShowImage(true);
      },
      error => console.error('Oops, Something Went Wrong', error),
    );
  };

  return (
    <View style={DamagedStyle.container}>
      <SafeAreaView>
        <View style={DamagedStyle.rowEndContainer}>
          <Text
            onPress={() => navigation.navigate('drawer')}
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

        <Text>
          {savedImagePath ? `Saved Image Path\n ${savedImagePath}` : ''}
        </Text>

        <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
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

        <Dialog.Container visible={showImage}>
          {/* <Image source={require(savedImagePath)}></Image> */}
          <TouchableOpacity
            style={MorningCheckStyle.okButtonContainer}
            onPress={showSuccessDialog}>
            <Text style={MorningCheckStyle.okButton}>Ok</Text>
          </TouchableOpacity>
        </Dialog.Container>
      </SafeAreaView>
    </View>
  );
}
