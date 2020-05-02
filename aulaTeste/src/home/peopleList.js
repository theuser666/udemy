import React from 'react';
import { View, StyleSheet } from 'react-native';

import PeopleListItem from './peopleListItem'

const PeopleList = props => {

    const { peoples, onPressItem } = props;

    const items = peoples.map( people => 
        < PeopleListItem 
            key={people.name.first} 
            people={people} 
            navigationToPeopleDetail={ onPressItem }
            />
    );
    

  return(
    <View style={styles.container}>
        { items } 
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e2f9ff'
    },
})

export default PeopleList;
