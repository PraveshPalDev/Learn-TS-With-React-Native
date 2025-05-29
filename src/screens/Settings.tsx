import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigation/StackNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function Settings({route}: Props) {
  const {name, email} = route.params;

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
