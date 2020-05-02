import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function pages({ route}) {
  const { nome } = route.params;
  const { otherParam } = route.params;

  return (
    <View style={styles.container}>
        <Text style={{fontSize:30}}>
            People {JSON.stringify(nome)}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    paddingTop:80
  }
})