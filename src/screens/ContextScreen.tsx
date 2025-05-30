import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ContextProvider} from '../navigation/ContextApi';
import Comp from '../components/Comp';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Context'>;

export default function ContextScreen({navigation, route}: Props) {
  return (
    <ContextProvider>
      <Comp />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({});
