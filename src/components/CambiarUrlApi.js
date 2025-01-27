import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const CambiarUrlApi = ({ onChangeUrl }) => {
  const [newUrl, setNewUrl] = useState('');

  const handleChangeUrl = () => {
    if (newUrl) {
      onChangeUrl(newUrl); // Llama a la función para cambiar la URL
      setNewUrl(''); // Limpiar el input
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
          width: '80%',
        }}
        placeholder="Nuevo código de producto"
        value={newUrl}
        onChangeText={setNewUrl}
      />
      <Button title="Cambiar URL" onPress={handleChangeUrl} />
    </View>
  );
};

export default CambiarUrlApi;
