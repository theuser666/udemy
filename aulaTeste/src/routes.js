import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNav from './TabNav.routes';
import PeopleDetail from './pages/PeopleDatail';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Eventos' component={TabNav} options={{title:null, headerTransparent: true}}/>
                <Stack.Screen name='PeopleDetail' component={PeopleDetail} options={{title:null, headerTransparent: true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}