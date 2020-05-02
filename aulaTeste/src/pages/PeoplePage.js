import React from 'react';
import { View, Text } from 'react-native';

import PeopleList from '../home/peopleList'

import axios from 'axios';

export default class PeoplePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            peoples: []
        };
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?nat=br&results=7')
            .then(Response => {
                const { results } = Response.data;
                this.setState({
                    peoples: results
                });
        })
    }

    render(){
        
    return (
        <View style={{paddingTop:20, justifyContent:'center',alignItems:'center'}}>
            
            <Text style={{fontSize:45, fontWeight: 'bold',margin:40}}>
                Eventos
            </Text>
 
            < PeopleList peoples = {this.state.peoples} onPressItem={ () => { this.props.navigation.navigate('PeopleDetail', nome: this.state.peoples.name) }}/>
            
        </View>
      );
  }
}
