import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface userData {
  name: string;
  email: string;
}

interface data {
  title: string;
  price: number;
  id: string;
}

export default function HomeScreen({navigation}: Props) {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>('vs-code');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // object and arrays create a interface
  const [userData, setUserData] = useState<userData>({name: '', email: ''});
  const [data, setData] = useState<data[]>([]);
  const [details, setDetails] = useState<null>(null);

  // ref
  const ref = useRef<TextInput>(null);

  const navigationHandler = () => {
    navigation.navigate('Settings', {
      email: 'praveshpal@gmail.com',
      name: 'pravesh kumar',
    });
  };

  return (
    <View>
      <Button title="Settings Screen" onPress={navigationHandler} />
      <TextInput ref={ref} />
    </View>
  );
}

const styles = StyleSheet.create({});
