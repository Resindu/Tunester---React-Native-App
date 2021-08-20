import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View,Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';


const LeftArrow = ()=>{
    return(
        <View style = {{marginTop:vs(10)}}>
            <Image source = {require('../../assets/icons/arrow-left.png')} style={{width:ms(30),height:vs(20)}}/>
        </View>      
    )
}
export {LeftArrow}