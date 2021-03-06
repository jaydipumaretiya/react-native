import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Touchable,
} from 'react-native';
import ExpensesStyle from './ExpensesStyle';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MorningCheckStyle from '../check/MorningCheckStyle';
import Dialog from 'react-native-dialog';

export default function Expenses({navigation}) {
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const handleOk = () => {
    navigation.goBack();
    setVisible(false);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const [items, setItems] = React.useState([
    {label: 'Liam', value: 'liam'},
    {label: 'Anton', value: 'anton'},
    {label: 'Audrius', value: 'audrius'},
    {label: 'Ramunas', value: 'ramunas'},
    {label: 'Sonny', value: 'sonny'},
    {label: 'Gregorz', value: 'gregorz'},
    {label: 'Hubert', value: 'hubert'},
    {label: 'Z Mikey Office', value: 'z_mikey_office'},
  ]);

  const [filePath, setFilePath] = useState({});

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

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
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
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
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
    // let isCameraPermitted = this.requestCameraPermission();
    let isStoragePermitted = this.requestExternalWritePermission();
    if (isStoragePermitted) {
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

  formatDate = date => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  formatTime = date => {
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={ExpensesStyle.container}>
        <Text style={ExpensesStyle.title}>Expense Type</Text>

        <View style={ExpensesStyle.box}>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={items}
          />
        </View>

        <Text style={ExpensesStyle.title}>Expense Description</Text>

        <View style={ExpensesStyle.box}>
          <TextInput
            style={ExpensesStyle.textInput}
            placeholder="Expense Description"
            placeholderTextColor="#808080"
            keyboardType="default"
          />
        </View>

        <Text style={ExpensesStyle.title}>Amount</Text>

        <View style={ExpensesStyle.box}>
          <TextInput
            style={ExpensesStyle.textInput}
            placeholder="Amount"
            placeholderTextColor="#808080"
            keyboardType="numeric"
          />
        </View>

        <View style={ExpensesStyle.row}>
          <View style={ExpensesStyle.column}>
            <Text style={ExpensesStyle.title}>Date</Text>

            <TouchableOpacity
              style={ExpensesStyle.boxDate}
              onPress={showDatepicker}>
              <Text style={ExpensesStyle.dateTimeText}>{formatDate(date)}</Text>
              <Image
                style={ExpensesStyle.smallIcon}
                source={require('../../assets/images/calendar.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={ExpensesStyle.column}>
            <Text style={ExpensesStyle.title}>Time</Text>

            <TouchableOpacity
              style={ExpensesStyle.boxDate}
              onPress={showTimepicker}>
              <Text style={ExpensesStyle.dateTimeText}>{formatTime(date)}</Text>
              <Image
                style={ExpensesStyle.smallIcon}
                source={require('../../assets/images/clock.png')}
              />
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View style={ExpensesStyle.row}>
          <TouchableOpacity
            style={ExpensesStyle.viewIcons}
            onPress={() => {
              chooseFileCamera();
            }}>
            <Image
              style={ExpensesStyle.icon}
              source={require('../../assets/images/ic_camera.png')}
            />
            <Text>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ExpensesStyle.viewIcons}
            onPress={() => {
              chooseFile('photo');
            }}>
            <Image
              style={ExpensesStyle.icon}
              source={require('../../assets/images/ic_gallery.png')}
            />
            <Text>Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ExpensesStyle.viewIcons}
            onPress={setVisible}>
            <Image
              style={ExpensesStyle.icon}
              source={require('../../assets/images/ic_up_arrow.png')}
            />
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>

        <Dialog.Container visible={visible}>
          <View style={MorningCheckStyle.dialogContainer}>
            <Image
              style={MorningCheckStyle.icon}
              source={require('../../assets/images/right.jpeg')}></Image>
            <Text style={MorningCheckStyle.textSuccess}>Success!</Text>

            <TouchableOpacity
              style={MorningCheckStyle.okButtonContainer}
              onPress={handleOk}>
              <Text style={MorningCheckStyle.okButton}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Dialog.Container>
      </View>
    </SafeAreaView>
  );
}
