import React from 'react';
import { View,Text,Image,ImageBackground,Dimensions ,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import COLORS from '../../constants/colors';
import {StartGameBtn} from '../components/StartGameBtn';
import {constStyles} from '../../constants/styles';
import {FireIcon} from '../components/FireIcon';
const width = Dimensions.get("screen").width/2;

const PlayHome = () =>{
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
                <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:vs(20)}}>
                    <View style={styles.smallContainer}>
                           <View style={[styles.smallContainerImgBox,{backgroundColor:COLORS.yellow}]}>
                              <Image source={require('../../assets/icons/dictionary.png')} style={[styles.smallContainerImg,{height:vs(50)}]}/>
                           </View>
                            <Text style={styles.smallContainerText}>24 words Learned</Text>
                    </View>
                    <View style={styles.smallContainer}>
                            <View style={[styles.smallContainerImgBox,{backgroundColor:COLORS.purple}]}>
                                    <Image source={require('../../assets/icons/refresh.png')} style={[styles.smallContainerImg,{height:vs(40)}]}/>
                            </View>  
                            <Text style={styles.smallContainerText}>24 words Learned</Text>
                    </View>

                </View>
                <View style={[styles.largeContainer,{backgroundColor:COLORS.pink}]}>
                    <Text style={styles.largeContainerHeading}>Daily Goal</Text>
                    <Slider
                        style={styles.sliderStyles}
                        minimumValue={0}
                        maximumValue={50}
                        minimumTrackTintColor="#1F1F32"
                        maximumTrackTintColor="#FFFFFF"
                    />
                    <Text style={styles.largeContainerText}>You've met your daily goal 12 times!</Text> 
                </View>
                <View style={[styles.largeContainer,{backgroundColor:COLORS.blue}]}>
                    <Text style={styles.largeContainerHeading}>Level 9</Text>
                    <Slider
                        style={styles.sliderStyles}
                        minimumValue={0}
                        maximumValue={50}
                        minimumTrackTintColor="#1F1F32"
                        maximumTrackTintColor="#FFFFFF"
                    />
                    <Text style={styles.largeContainerText}>476 XP to the next level,keep it up!</Text> 
                </View>
                <View style={styles.btnContainer}>
                   <StartGameBtn title="Start Game"/>
                </View>
               
            </View>

        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    smallContainer:{
        width:'155@ms',
        height:'160@vs',
        backgroundColor:COLORS.containerBlue,
        marginTop:'10@ms',
        alignItems:'center',
        marginHorizontal:'0@ms',
        marginVertical:'10@vs',
        borderRadius:'28@ms',
    
    },
    smallContainerImg:{
        width:'40@ms',
        marginVertical:'20@vs'
    },
    smallContainerImgBox:{
        width:'90@ms',
        height:'90@vs',
        marginTop:'15@vs',
        alignItems:'center',
        borderRadius:'15@ms'


    },
    smallContainerText:{
        color:COLORS.white,
        fontSize:'20@ms',
        fontWeight:'400',
        marginTop:'1@vs'
    },
    largeContainer:{
        paddingHorizontal:'13@ms',
        height:'100@vs',
        marginVertical:'5@vs',
        borderRadius:'20@ms',
        alignItems:'center'
    },
    largeContainerHeading:{
        color:COLORS.white,
        fontSize:'20@ms',
        fontWeight:'600',
        marginTop:'10@vs'

    },
    sliderStyles:{
        width: '300@ms',
        height: '30@vs',
        marginTop:'5@vs'

    },
    largeContainerText:{
        color:COLORS.white,
        fontSize:'16@ms',
        fontWeight:'500',
        marginTop:'-5@vs'
        
        
    },
    btnContainer:{
        marginTop:'30@vs'
    }
})
export default PlayHome;
