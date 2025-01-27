import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { Camera, useCodeScanner } from 'react-native-vision-camera';

const CameraComponent = ({ device, navigation  }) => {
    const [hasScanned, setHasScanned] = useState(false);
   
    const code = useCodeScanner({
        codeTypes: ['qr', 'ean-13', 'ean-8', 'upc-a', 'upc-e'],
        onCodeScanned: (codes, frame) => {
            if (!hasScanned) {
                const codeValues = codes.map(code => code.value).join(', ');
               // Alert.alert('Código Escaneado', codeValues);
                setHasScanned(true);

                // Imprimir cada valor de código individualmente
                codes.forEach((code) => {
                    console.log(code.value);
                });
                // Navegar a la pantalla Products con los códigos escaneados
                navigation.navigate('Products', { scannedCodes: codes });
            }
        }
    });

    if (!device) {
        return <Text>No se ha encontrado un dispositivo de cámara.</Text>;
    }

    return (
        <>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                codeScanner={code}
            />
              <View style={styles.buttonContainer}>
        {hasScanned && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setHasScanned(false)}
          >
            <Text style={styles.buttonText}>Escanear otro código</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('urlApi')} // Navega al componente CambiarUrlApi
        >
          <Text style={styles.buttonText}>Cambiar URL API</Text>
        </TouchableOpacity>
      </View>
           
        </>

    );
};


const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center',
      },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    }
});


export default CameraComponent;
