import 'react-native-gesture-handler';
import React from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlayHomeScreenFor from '../screens/PlayHome';
import SearchSongsScreen from '../screens/SearchSongs';
import ProfileScreen from '../screens/Profile';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { BackgroundColor } from 'chalk';
import COLORS from '../../constants/colors';

const Tab  = createBottomTabNavigator();

const BottomNavigator = () => {
    
    return(
      
        <Tab.Navigator 
            tabBarOptions={{
                style:{
                backgroundColor:COLORS.backgroundColor
                },
                showLabel: false

            }}
         >
            <Tab.Screen name = "PlayHomeFor"
             component = {PlayHomeScreenFor}
             options={{
                 tabBarIcon:({focused}) =>(
                     focused
                    ? <Image source={require('../../assets/icons/game-selected.png')} style={styles.iconStyle} />
                    : <Image source={require('../../assets/icons/game.png')} style={styles.iconStyle}  /> 
                 ),

             }}
             
             />
            <Tab.Screen name = "SearchSongs" 
            component = {SearchSongsScreen}
            options={{
                tabBarIcon:({focused}) =>(
                    focused
                   ? <Image source={require('../../assets/icons/music-selected.png')} style={styles.iconStyle} />
                   : <Image source={require('../../assets/icons/music.png')} style={styles.iconStyle}  /> 
                )
            }}
            />
            <Tab.Screen name = "Profile" 
            component = {ProfileScreen}
            options={{
                tabBarIcon:({focused}) =>(
                    focused
                   ? <Image source={require('../../assets/icons/user-selected.png')} style={styles.iconStyle} />
                   : <Image source={require('../../assets/icons/user.png')} style={styles.iconStyle}  /> 
                )
            }}
            />

        </Tab.Navigator>
    )
}

const styles = ScaledSheet.create({
    iconStyle:{
        width:'20@ms',
        height:'20@vs'
    }
})
export default BottomNavigator;