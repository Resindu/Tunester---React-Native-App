import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View,Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const FireIcon = ()=>{
    return(
        <View style = {styles.iconContainer}>          
            <Image source = {require('../../assets/icons/fire.png')} style={{width:ms(25),height:vs(25),}}/>
        </View>
       
    )
}

const styles = ScaledSheet.create({
    iconContainer:{
        backgroundColor:COLORS.iconLightBlue,
        borderColor:COLORS.iconBorder,
        borderWidth:'1@ms',
        borderRadius:'40@ms',
        width:'48@ms',
        height:'48@vs',
        justifyContent:'center',
        alignItems:'center'
}

})
export {FireIcon}