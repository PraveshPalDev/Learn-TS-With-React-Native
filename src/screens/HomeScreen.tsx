import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useReducer, useRef, useState} from 'react';
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

// use reducer hooks code
type MyState = {
  count: number;
};

const initialState: MyState = {
  count: 0,
};

type Action = {
  type: 'INCREMENT' | 'DECREMENT';
};

const reducer = (state: MyState, action: Action): MyState => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};

    default:
      return state;
  }
};

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

  const contextHandler = () => {
    navigation.navigate('Context');
  };

  // hooks to useReducer and useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Button title="Settings Screen" onPress={navigationHandler} />
      {/* <TextInput ref={ref} /> */}
      <Text style={{color: '#000'}}>{state.count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => {
            dispatch({type: 'INCREMENT'});
          }}>
          <Text style={{color: '#fff'}}>Add (+)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => {
            dispatch({type: 'DECREMENT'});
          }}>
          <Text style={{color: '#fff'}}>Sub (-)</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginBottom: 80}}>
        <Button title="Context_With_TS" onPress={contextHandler} />
        <Button
          title="ProductPage_With_TS"
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyles: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
