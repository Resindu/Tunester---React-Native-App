import React from 'react';
import { View,Text,Image,ImageBackground,Dimensions ,StyleSheet,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import COLORS from '../../constants/colors';
import {StartGameBtn} from '../components/StartGameBtn';
import {constStyles} from '../../constants/styles';
import {FireIcon} from '../components/FireIcon';
import Icon from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get("screen").width/2;

const Profile = () =>{
    return(
        <SafeAreaView style={constStyles.safeAreaStyles}>
             <View style={constStyles.screenPadding}>
                <View style = {constStyles.tabHeaderIconContainer}>
                    <View style={constStyles.tabHeaderLeft}>
                       <FireIcon/>
                       <Text style={constStyles.tabHeaderLeftText}>2</Text>

                    </View>
                    <View style={constStyles.tabHederRight} >
                       <Image source={require('../../assets/flags/france.png')} style={constStyles.tabHederRightFlag}/>
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <View style={styles.singleItem}>
                        <Text style={styles.label}>Learning</Text>
                        <Text style={styles.userSelection}>French</Text>
                        <Icon name ="chevron-forward-outline" size={20} style={styles.forwardIcon}/>
                    </View>
                    <View style={styles.singleItem}>
                        <Text style={styles.label}>Skill Level</Text>
                        <Text style={styles.userSelection}>New Learner</Text>
                        <Icon name ="chevron-forward-outline" size={20} style={styles.forwardIcon}/>
                    </View>
                    <View style={[styles.singleItem,{borderBottomColor:COLORS.backgroundColor}]}>
                        <Text style={styles.label}>Translation</Text>
                        <Text style={styles.userSelection}>English</Text>
                        <Icon name ="chevron-forward-outline" size={20} style={styles.forwardIcon}/>
                    </View>
                </View>
                <View style={[styles.singleItem,{marginTop:vs(18),backgroundColor:COLORS.containerBlue,borderRadius:ms(14),borderBottomColor:COLORS.backgroundColor}]}>
                        <Text style={styles.label}>Change Password</Text>
                        <Icon name ="chevron-forward-outline" size={20} style={styles.forwardIcon}/>
                </View>
                <View style={[styles.singleItem,{marginTop:vs(18),backgroundColor:COLORS.darkRed,borderRadius:ms(14),borderBottomColor:COLORS.backgroundColor}]}>
                        <Text style={[styles.label,{color:COLORS.lightRed}]}>LogOut</Text>
                        <Icon name ="chevron-forward-outline" size={20} style={[styles.forwardIcon,{color:COLORS.lightRed}]}/>
                </View>
                <Text style={{textAlign:'center',color:COLORS.white,marginTop:vs(10)}}>thomas@gmail.com</Text>
             
            </View>

        </SafeAreaView>
    )
}
const styles = ScaledSheet.create({
    informationContainer:{
        marginTop:'60@vs',
        paddingHorizontal:'13@ms',
        borderRadius:'14@ms',
        backgroundColor:COLORS.containerBlue
    },
    singleItem:{
        flexDirection:'row',
        height:'50@vs',
        paddingHorizontal:'13@ms',
        paddingVertical:'10@vs',
        borderBottomColor:COLORS.grey,
        borderBottomWidth:'1@ms',
    },
    label:{
        color:COLORS.white,
        fontSize:'14@ms',
        fontWeight:'500',
    },
    userSelection:{
        color:COLORS.blue,
        fontSize:'12@ms',
        fontWeight:'500',
        paddingLeft:'150@ms',

        
    },
    forwardIcon:{
        color:COLORS.grey,
        alignItems:'center',
    
    }
})
export default Profile;