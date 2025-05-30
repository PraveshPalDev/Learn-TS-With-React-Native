import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 36) / 2;

interface DataProps {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

const ProductItemComp: React.FC<DataProps> = ({item}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.rating}>
        ⭐ {item.rating.rate} ({item.rating.count})
      </Text>
    </View>
  );
};

export default ProductItemComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8da9c2',
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 12,
    margin: 4,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  rating: {
    fontSize: 12,
    color: '#888',
  },
});
