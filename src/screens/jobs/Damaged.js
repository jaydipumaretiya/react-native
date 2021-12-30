import * as React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DamagedStyle from './DamagedStyle';

export default function Damaged({navigation}) {
  return (
    <View style={DamagedStyle.container}>
      <SafeAreaView>
        <View style={DamagedStyle.rowEndContainer}>
          <Text
            onPress={() => navigation.goBack()}
            style={DamagedStyle.textContainer}>
            Home
          </Text>
        </View>

        <Image
          style={DamagedStyle.image}
          source={require('../../assets/images/map.jpeg')}
        />

        <View style={DamagedStyle.row}>
          <Text style={DamagedStyle.textButton}>Dent</Text>
          <Text style={DamagedStyle.textButton}>Broken</Text>
          <Text style={DamagedStyle.textButton}>Cracked</Text>
        </View>

        <View style={DamagedStyle.row}>
          <Text style={DamagedStyle.textButton}>Chipped</Text>
          <Text style={DamagedStyle.textButton}>Scratched</Text>
          <Text style={DamagedStyle.textButton}>Holed</Text>
        </View>

        <View style={DamagedStyle.row}>
          <Text style={DamagedStyle.textButton}>Missing</Text>
          <Text style={DamagedStyle.textButton}>Other</Text>
          <Text style={DamagedStyle.textButton}>Torn</Text>
        </View>

        <View style={DamagedStyle.row}>
          <Text style={DamagedStyle.textButton}>Reset</Text>
          <Text style={DamagedStyle.textButton}>Recoed & Continue</Text>
          <Text style={DamagedStyle.textButton}>View Photos</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
