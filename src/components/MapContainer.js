import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { LocationChangedListener } from '../listeners';

const MapContainer = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  LocationChangedListener.subscribe('MapContainer', setLocation);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
        provider={PROVIDER_GOOGLE}
        cacheEnabled={true}
        loadingEnabled={true}
        showsCompass={true}
      >
        <Marker coordinate={location} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapContainer;
