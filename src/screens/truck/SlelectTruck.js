import * as React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import TruckStyles from './TruckStyles';
import Dialog from 'react-native-dialog';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default function SlelectTruck({navigation}) {
  const [visible, setVisible] = React.useState(false);
  const [value3Index, setvalue3Index] = React.useState(0);
  const [value3, setvalue3] = React.useState(0);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  var radio_props = [
    {label: 'GJ 05 2525', value: 0},
    {label: 'GJ 05 2222', value: 1},
    {label: 'GJ 01 9458', value: 2},
    {label: 'GJ 05 8547', value: 3},
    {label: 'GJ 03 6471', value: 4},
  ];

  // var RadioButtonProject = React.createClass({
  //   getInitialState: function() {
  //     return {
  //       value: 0,
  //     }
  //   },
  //   render: function() {
  //     return (
  //       <View>
  //         <RadioForm
  //           radio_props={radio_props}
  //           initial={0}
  //           onPress={(value) => {this.setState({value:value})}}
  //         />
  //       </View>
  //     );
  //   }
  // });

  return (
    <View style={TruckStyles.image}>
      <ImageBackground
        source={require('../../assets/images/background.jpeg')}
        style={TruckStyles.image}>
        <View style={TruckStyles.container}>
          <TouchableOpacity style={TruckStyles.loginBtn} onPress={setVisible}>
            <Text style={TruckStyles.loginText}>Morning Checks</Text>
          </TouchableOpacity>

          <Dialog.Container visible={visible}>
            <View style={TruckStyles.dialogContainer}>
              <TouchableOpacity
                style={TruckStyles.selectTruckButton}
                onPress={handleCancel}>
                <Text>Select Truck</Text>
              </TouchableOpacity>

              <RadioForm formHorizontal={false} animation={true}>
                {radio_props.map((obj, i) => {
                  var onPress = (value, index) => {
                    setvalue3Index(index);
                    setvalue3(value);
                  };
                  return (
                    <RadioButton labelHorizontal={true} key={i}>
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={value3Index === i}
                        onPress={onPress}
                        buttonInnerColor={'#f39c12'}
                        buttonOuterColor={
                          value3Index === i ? '#2196f3' : '#000'
                        }
                        buttonSize={10}
                        buttonStyle={{}}
                        buttonWrapStyle={{}}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        onPress={onPress}
                        labelStyle={{fontWeight: 'bold', color: '#2ecc71'}}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  );
                })}
              </RadioForm>
            </View>
          </Dialog.Container>

          <TouchableOpacity
            style={TruckStyles.loginBtn}
            onPress={() => navigation.navigate('morningCheck')}>
            <Text style={TruckStyles.lightText}>Jobs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={TruckStyles.loginBtn}>
            <Text style={TruckStyles.lightText}>Expenses</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
