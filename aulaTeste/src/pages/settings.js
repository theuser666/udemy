import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Settings() {
  return (
    <View style={{paddingTop:20, justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:45, fontWeight: 'bold',margin:40}}>
            Tela Settings
        </Text>
    </View>
  );
}
