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
  const [truck, setTruck] = React.useState('');

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
    {label: 'param1', value: 0},
    {label: 'param2', value: 1},
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

              <RadioForm formHorizontal={false} animation={true} initial={0}>
                {radio_props.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={setTruck === i}
                      onPress={value => {
                        setTruck({value: value});
                      }}
                      borderWidth={1}
                      buttonInnerColor={'#e7ee3c'}
                      buttonOuterColor={setTruck === i ? '#FF96f3' : '#FF2222'}
                      buttonSize={10}
                      buttonOuterSize={20}
                      buttonStyle={{}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={value => {
                        setTruck({value: value});
                      }}
                      labelStyle={{fontSize: 16, color: '#2ecc71'}}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))}
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
