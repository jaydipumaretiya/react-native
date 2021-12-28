import * as React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import JobsStyle from './JobsStyle';

export default function JobsDetails({navigation}) {
  return (
    <View style={JobsStyle.image}>
      <ImageBackground
        source={require('../../assets/images/background.jpeg')}
        style={JobsStyle.image}>
        <SafeAreaView>
          <View style={JobsStyle.rowEndContainer}>
            <Text
              onPress={() => navigation.goBack()}
              style={JobsStyle.textContainer}>
              Home
            </Text>
          </View>

          <View style={JobsStyle.row}>
            <View style={JobsStyle.viewStyle}>
              <Text>From :</Text>
            </View>
            <View style={JobsStyle.inputView}>
              <TextInput
                style={JobsStyle.TextInput}
                placeholder="From Address"
                placeholderTextColor="#b3b3b3"
                keyboardType="default"
              />
            </View>
          </View>
          <View style={JobsStyle.row}>
            <View style={JobsStyle.viewStyle} style={JobsStyle.viewStyle}>
              <Text>To :</Text>
            </View>
            <View style={JobsStyle.inputView}>
              <TextInput
                style={JobsStyle.TextInput}
                placeholder="To Address"
                placeholderTextColor="#b3b3b3"
                keyboardType="default"
              />
            </View>
          </View>
          <ImageBackground
            style={JobsStyle.map}
            source={require('../../assets/images/map.jpeg')}>
            <Text
              style={JobsStyle.mapText}
              onPress={() => navigation.navigate('map')}>
              Tap here for goto map
            </Text>
          </ImageBackground>

          <View style={JobsStyle.dataContainor}>
            <View style={JobsStyle.emptyRedBand}></View>
            <View style={JobsStyle.insideContainor}>
              <Text style={JobsStyle.yellowBgText}>12540</Text>
              <Text style={JobsStyle.titleText}>Post Code : </Text>
              <Text style={JobsStyle.titleText}>Collection Address : </Text>
              <Text style={JobsStyle.titleText}>Delivery Address : </Text>
              <Text style={JobsStyle.titleText}>Contact : </Text>
              <View style={JobsStyle.descriptionBox}>
                <TextInput style={JobsStyle.TextInput} />
              </View>
            </View>
          </View>

          <View style={JobsStyle.statusContainor}>
            <Text style={JobsStyle.textTitle}>Job Status</Text>
            <View style={JobsStyle.row}>
              <Text style={JobsStyle.button}>Collected</Text>
              <Text style={JobsStyle.button}>Not Collected</Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
