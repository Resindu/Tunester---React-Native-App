import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { View,Text ,Image,TextInput ,StyleSheet,KeyboardAvoidingView,ScrollView, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import COLORS from '../../constants/colors';
import {StartGameBtn} from '../components/StartGameBtn';
import {constStyles} from '../../constants/styles';

const width = Dimensions.get("screen").width;

const OnboardingCompleteScreen = ({navigation}) => {
    return(
        <SafeAreaView style={constStyles.safeAreaStyles}>
            <View style={{marginTop:vs(60)}}>
                <Text style={styles.mainText}> Congratulations !</Text>
                <Text style={styles.subText}>You are ready for the Tunester experience.</Text>
            </View>
            <View style={{marginTop:vs(40)}}>
                <Image source={require('../../assets/illustrations/confetti.png')}style={{width:width,height:vs(300)}}/>
                <Image source={require('../../assets/illustrations/celebrate.png')} style={{width:ms(250),height:vs(170),marginTop:vs(-170),marginLeft:ms(80)}}/>
            </View>
            <View style={[constStyles.screenPadding,styles.imageStyle]}>
                <StartGameBtn title ="Start Game" onPress={()=>navigation.navigate("Playhome")}/>
            </View>
           
        </SafeAreaView>
    )
}
export default OnboardingCompleteScreen;

const styles =ScaledSheet.create({
    imageStyle:{
        marginTop:'100@vs'
    },
    mainText:{
        fontSize:'24@ms',
        color:COLORS.white,
        textAlign:'center',
        fontWeight:'600',
        marginBottom:'20@vs'
    },
    subText:{
        fontSize:'17@ms',
        textAlign:'center',
        color:COLORS.white
    },

})