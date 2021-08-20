
import React from 'react';
import { View,Text ,Image,TextInput ,StyleSheet,KeyboardAvoidingView,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import COLORS from '../../constants/colors';
import { PrimaryButton } from '../components/PrimaryButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {constStyles} from '../../constants/styles';
import {LeftArrow}  from '../components/LeftArrow';


const PasswordResetSentScreen = ({navigation}) =>{

    const [email,setEmail] = React.useState("Email")
    const [password,setPassword] = React.useState("Password")


    return(
        <SafeAreaView style={constStyles.safeAreaStyles}>
            <KeyboardAvoidingView behavior="padding" enabled={true}>
                <ScrollView style={constStyles.screenPadding}>
                <TouchableOpacity>
                    <LeftArrow onPress ={()=>navigation.goBack()}/>
                </TouchableOpacity>
                    <View style={{marginTop:vs(30),flexDirection:"row"}}>
                        <Text style={{fontSize:ms(22),color:COLORS.white,fontWeight:'600'}}>Check your email</Text>
                        <Image source={require('../../assets/icons/email.png')} style={constStyles.displayIconStyle}/>
                    </View>
                    <Text style={{fontSize:ms(16),color:COLORS.white ,fontWeight:'400',marginTop:vs(10)}}>We've sent you a link to reset your password</Text>

                    <View style={{marginTop:vs(57)}}>
                        <View style={constStyles.inputContainer}>
                            <Text style ={constStyles.inputText}>Email</Text>
                                    <TextInput 
                                        style={constStyles.input} 
                                        onChange = {(text)=>setEmail(text)}
                                        value={email}
                                    />
                        </View>                      
                    </View>
                    <View style={{marginTop:vs(250)}}>
                        <PrimaryButton onPress={()=>navigation.navigate("Home")} title="Return Home" ></PrimaryButton>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default PasswordResetSentScreen;
