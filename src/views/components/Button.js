import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View,StyleSheet,Text } from 'react-native';
import COLORS from '../../constants/colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';



const LoadingScreenAccountButton = ({title,onPress = ()=>{}}) =>{
return(
    <TouchableOpacity activeOpacity={0.8} onPress ={onPress} borderColor>
        <View style={style.btnContainer}>
            <Text style={style.title}>{title}</Text>

        </View>
    </TouchableOpacity>
)
}

const style = ScaledSheet.create({
    title:{
        color:COLORS.white,
        fontSize:'20@ms',
    },
    btnContainer: {
        backgroundColor:COLORS.btnBlueColor,
        height:'60@vs',
        borderRadius:'15@ms',
        borderColor:COLORS.grey,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
})

export {LoadingScreenAccountButton}