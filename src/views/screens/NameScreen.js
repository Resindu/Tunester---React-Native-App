import React from 'react';
import { View,Text ,Image,TextInput ,StyleSheet,KeyboardAvoidingView,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/colors';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import { PrimaryButton } from '../components/PrimaryButton';
import Icons from 'react-native-vector-icons/Ionicons';
import {LeftArrow}  from '../components/LeftArrow';
import {constStyles} from '../../constants/styles';


const NameScreen = ({navigation}) =>{

    const [inputText,setInputText] = React.useState("Rocky")

    return(
        <SafeAreaView style={constStyles.safeAreaStyles}>
            <KeyboardAvoidingView behavior="padding" enabled={true}>
                <ScrollView style={constStyles.screenPadding}>
                    <TouchableOpacity>
                        <LeftArrow onPress ={()=>navigation.goBack()}/>
                    </TouchableOpacity>

                    <View style={{marginTop:vs(30),flexDirection:'row'}}>
                        <Text style={{fontSize:ms(29),color:COLORS.white,fontWeight:'600'}}>Hello!</Text>
                        <Image source={require('../../assets/icons/hand-wave.png')} style={constStyles.displayIconStyle}/>
                    </View>  
                    
                    <Text style={{fontSize:ms(23),color:COLORS.white ,fontWeight:'500'}}>Welcome to Tunester</Text>

                    <View style={{marginTop:vs(77)}}>
                        <Text style ={{fontSize:ms(18),color:COLORS.white,marginBottom:vs(20)}}>What should we call you?</Text>
                                <TextInput 
                                    style={constStyles.input} 
                                    onChange = {(text)=>setInputText(text)}
                                    value={inputText}
                              />
                    </View>
                    <View style={{marginTop:vs(230)}}>
                        <PrimaryButton onPress={()=>navigation.navigate("CreateAccount")} title="Continue" ></PrimaryButton>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


export default NameScreen;
