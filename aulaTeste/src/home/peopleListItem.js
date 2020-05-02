import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

import { capitalizeFirstLetter } from '../util'

const PeopleListItem = props => {

  const { people, navigationToPeopleDetail } = props;
  const { title, first, last } = people.name;

  return (
      <TouchableOpacity onPress={ () => { Alert.alert(first, 'Você clicou em mim'), navigationToPeopleDetail( { people } )}}>
        <View style={styles.line}>

            <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />

            <Text style={styles.lineTxt}> 
            { `${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`} 
            </Text>

        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
      line:{
        alignItems:'center',
        flexDirection: 'row',
        height:80,
        width:350,
        borderBottomWidth:1,        // define uma liniha entre os eventos
        borderBottomColor:'#BBB',   //
        },

        lineTxt: {
            fontSize:20,
            paddingLeft:15,
            flex:4,
        },

        avatar: {
          aspectRatio: 1,
          flex: 1,
          marginLeft:5,
          borderRadius:50
        }
})

export default PeopleListItem;