import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View,StyleSheet,Text,Image } from 'react-native';
import COLORS from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const StartGameBtn = ({title,onPress = ()=>{}}) =>{
return(
   
    <TouchableOpacity activeOpacity={0.8} onPress ={onPress} >
        <LinearGradient colors={['#56AB2F','#A8E063']} style={{borderRadius:ms(15)}}>
            <View style={style.btnContainer}>
                <Text style={style.title}>{title}</Text>
                <Image source = {require('../../assets/icons/arrow.png')} style={{width:ms(20),height:vs(15)}}/>
            </View>
        </LinearGradient>
    </TouchableOpacity>

    
)
}

const style = ScaledSheet.create({
    title:{
        color:COLORS.white,
        fontSize:'18@ms',
        paddingHorizontal:'20@ms'
    },
    btnContainer: {      
        height:'60@vs',       
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
})

export {StartGameBtn}