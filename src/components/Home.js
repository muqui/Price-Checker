import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import CameraComponent from './CameraComponent';
import PermissionRequestComponent from './PermissionRequestComponent';
export default function Home({ navigation }) {
 // Obtener el dispositivo de la cámara trasera
 const device = useCameraDevice('back');
  const { hasPermission } = useCameraPermission();
  //const [device, setDevice] = useState(null);
 // const device = useCameraDevice('back')
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    checkPermission();
  }, []);


  const checkPermission = async () => {
    const permission =
      Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA;
    const result = await check(permission);
    setCameraPermission(result);
    console.log('Estado del permiso de cámara:', result);
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <PermissionRequestComponent setCameraPermission={setCameraPermission} />
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={styles.container}>
        <Text>Cargando dispositivo de cámara...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraComponent device={device} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
});
