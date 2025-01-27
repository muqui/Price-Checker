import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import axios from 'axios';

const Products = ({ route, apiUrl  }) => {
    const { scannedCodes } = route.params || {};
    const [product, setProduct] = useState(null); // Para almacenar los datos del producto
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
 
 console.log(`codigo escaneado: ${scannedCodes[0].value}`)
 const fullApiUrl = `${apiUrl}${scannedCodes[0].value}`; // Concatenar la URL base con el código de barras

console.log(`Api url: ${apiUrl}`)
  useEffect(() => {
    // Función para obtener datos de la API
    const fetchProduct = async () => {
      
      try {
        const response = await axios.get(fullApiUrl);
        setProduct(response.data); // Almacenar los datos en el estado
        console.log(response.data)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false); // Cambiar el estado de carga
      }
    };

    fetchProduct(); // Llamar a la función al cargar el componente
  }, [fullApiUrl]);

   

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cargando...</Text>
      </View>
    );
  }
  
  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No se encontró el producto o el código de barras es inválido.</Text>
      </View>
    );
  }
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
        
    <Image source={{ uri: product.imgUrl }} style={styles.image} />
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.description}>{product.description}</Text>
    <Text style={styles.label}>Código de barras: {product.barcode}</Text>
    <Text style={styles.label}>Precio: ${product.price}</Text>
    <Text style={styles.label}>Stock: {product.stock}</Text>
    <Text style={styles.label}>Categoría: {product.categoryId}</Text>
    <Text style={styles.label}>Cómo vender: {product.howToSell}</Text>
    <Text style={styles.label}>Precio de compra: ${product.purchasePrice}</Text>
    <Text style={styles.label}>Precio mayorista: ${product.wholesalePrice}</Text>
    <Text style={styles.label}>Stock mínimo: {product.minimumStock}</Text>
    <Text style={styles.label}>Activo: {product.isActive ? 'Sí' : 'No'}</Text>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    image: {
        width: 200, // Ancho de la imagen
        height: 200, // Alto de la imagen
        resizeMode: 'cover', // Ajustar la imagen al contenedor
        borderRadius: 10, // Opcional: esquinas redondeadas
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Products;
