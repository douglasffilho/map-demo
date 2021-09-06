import * as Location from 'expo-location';
import React, { useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import MapContainer from './src/components/MapContainer';
import { LocationChangedListener } from './src/listeners';

const checkLocationServiceIsEnabled = async () => {
  const enabled = await Location.hasServicesEnabledAsync();
  if (!enabled) {
    Alert.alert(
      'Location Service Disabled',
      'Please, enable your location service on Settings',
      [{ text: 'Ok' }],
      {
        cancelable: false,
      },
    );

    return false;
  }
  return true;
};

const requestLocationPermission = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Location Permission Error',
        `Permission ${status}`,
        [{ text: 'Ok' }],
        {
          cancelable: false,
        },
      );

      return false;
    }
    return true;
  } catch (error) {
    Alert.alert(
      'Location Permission Error',
      error?.message ??
        'Error trying to obtain permission for location, close app then try again',
      [{ text: 'Ok' }],
      {
        cancelable: false,
      },
    );

    return false;
  }
};

const getCurrentPosition = async () => {
  try {
    await Location.watchPositionAsync(
      { accuracy: Location.LocationAccuracy.Balanced },
      (info) => {
        const latitude = info?.coords?.latitude ?? 0;
        const longitude = info?.coords?.longitude ?? 0;
        const location = { latitude, longitude };
        LocationChangedListener.publish(location);
      },
    );
  } catch (error) {
    Alert.alert(
      'Location Permission Error',
      error?.message ??
        'error trying to obtain permission for location, close app then try again',
      [{ text: 'Ok' }],
      {
        cancelable: false,
      },
    );
  }
};

const refreshLocation = async () => {
  const serviceEnabled = await checkLocationServiceIsEnabled();
  if (serviceEnabled) {
    const permissionGranted = await requestLocationPermission();
    if (permissionGranted) return getCurrentPosition();
  }
};

const App = () => {
  useEffect(() => {
    refreshLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapContainer />
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
});

export default App;
