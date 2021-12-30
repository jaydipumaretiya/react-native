import React, {useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ExpensesStyle from './ExpensesStyle';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Expenses({navigation}) {
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

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

  const requestCameraPermission = async () => {
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

  const requestExternalWritePermission = async () => {
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
        alert('Write permission err', err);
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

  return (
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

          <View style={ExpensesStyle.box}>
            <Text onPress={showDatepicker}>dateeee</Text>
          </View>
        </View>
        <View style={ExpensesStyle.column}>
          <Text style={ExpensesStyle.title}>Time</Text>

          <View style={ExpensesStyle.box}>
            <Text onPress={showTimepicker}>date</Text>
          </View>

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
        {/* <Button
          onPress={() => navigation.navigate('selectPhoto')}
          title="Open Sceen for Select photo"
        /> */}
        <TouchableWithoutFeedback onPress={() => captureImage('photo')}>
          <View style={ExpensesStyle.viewIcons}>
            <Image
              style={ExpensesStyle.icon}
              source={require('../../assets/images/ic_camera.png')}
            />
            <Text>Camera</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => chooseFile('photo')}>
          <View style={ExpensesStyle.viewIcons}>
            <Image
              style={ExpensesStyle.icon}
              source={require('../../assets/images/ic_gallery.png')}
            />
            <Text>Gallery</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('selectTruck')}>
          <View style={ExpensesStyle.viewIcons}>
            <Image
              style={ExpensesStyle.icon}
              source={require('../../assets/images/ic_up_arrow.png')}
            />
            <Text>Submit</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
