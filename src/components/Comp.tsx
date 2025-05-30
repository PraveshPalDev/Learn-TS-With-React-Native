import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MyContext} from '../navigation/ContextApi';

const Comp: React.FC = () => {
  const value = useContext(MyContext);

  return (
    <View style={{...styles.container, backgroundColor: value.bg}}>
      <Text style={{color: value.color}}>
        Use Context Api to this components.
      </Text>
    </View>
  );
};

export default Comp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
