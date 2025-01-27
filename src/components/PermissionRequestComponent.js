import React from 'react';
import { Button, Alert, Platform } from 'react-native';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const PermissionRequestComponent = ({ setCameraPermission }) => {
  const requestPermission = async () => {
    const permission =
      Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA;
    const result = await request(permission);
    setCameraPermission(result);
    console.log('Resultado de la solicitud de permiso:', result);
    if (result === RESULTS.GRANTED) {
      Alert.alert('Permiso concedido', 'Ahora puedes usar la cámara');
    } else {
      Alert.alert('Permiso denegado', 'No puedes usar la cámara');
    }
  };

  return (
    <Button title="Solicitar Permiso de Cámara" onPress={requestPermission} />
  );
};

export default PermissionRequestComponent;
