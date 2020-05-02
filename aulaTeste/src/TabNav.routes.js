import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PeoplePage from '../src/pages/PeoplePage';
import Turmas from '../src/pages/turmas';
import Settings from '../src/pages/settings';

const Tab = createMaterialBottomTabNavigator();

export default function Routes(){
    return(
            <Tab.Navigator
            initialRouteName="Home"
            activeColor="#00ace6"
            inactiveColor="#bfbfbf"
            barStyle={{ backgroundColor: 'white' }}
            >
                <Tab.Screen name='Eventos' component={PeoplePage}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="home" color={color} size={26} /> )} } />
                <Tab.Screen name='Turmas' component={Turmas}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="book" color={color} size={26} /> )} } />
                <Tab.Screen name='Settings' component={Settings}
                options={{tabBarIcon: ({ color }) => ( <MaterialCommunityIcons name="settings" color={color} size={26} /> )} } />
            </Tab.Navigator>
    );
}