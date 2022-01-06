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
import LoadsStyle from './LoadsStyle';

export default function Loads({navigation}) {
  return (
    <View style={LoadsStyle.image}>
      <ImageBackground
        source={require('../../assets/images/background.jpeg')}
        style={LoadsStyle.image}>
        <SafeAreaView>
          <View style={LoadsStyle.rowEndContainer}>
            <Text
              onPress={() => navigation.navigate('drawer')}
              style={LoadsStyle.textContainer}>
              Home
            </Text>
          </View>

          <View style={LoadsStyle.container}>
            <TouchableOpacity
              style={LoadsStyle.button}
              onPress={() => navigation.navigate('jobs')}>
              <Text style={LoadsStyle.buttonText}>DEMO LOAD</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
