import * as React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function MapScreen({navigation}) {
  return (
    <View style={styles.MainContainer}>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 28.57966,
          longitude: 77.32111,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 28.57966, longitude: 77.32111}}
          title={'JavaTpoint'}
          description={'Java Training Institute'}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
