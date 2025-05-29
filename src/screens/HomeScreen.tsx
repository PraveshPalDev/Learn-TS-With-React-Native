import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {
  const navigationHandler = () => {
    navigation.navigate('Settings', {
      email: 'praveshpal@gmail.com',
      name: 'pravesh kumar',
    });
  };

  return (
    <View>
      <Button title="Settings Screen" onPress={navigationHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
