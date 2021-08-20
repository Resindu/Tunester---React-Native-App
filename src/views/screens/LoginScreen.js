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


const LoginScreen = ({navigation}) =>{

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
                        <Text style={{fontSize:ms(30),color:COLORS.white,fontWeight:'600'}}>Hello!</Text>
                        <Image source={require('../../assets/icons/key-icon.png')} style={constStyles.displayIconStyle}/>
                    </View>
                    <Text style={{fontSize:ms(22),color:COLORS.white ,fontWeight:'500'}}>Welcome Back!</Text>

                    <View style={{marginTop:vs(47)}}>
                        <View style={constStyles.inputContainer}>
                            <Text style ={constStyles.inputText}>Email</Text>
                                    <TextInput 
                                        style={constStyles.input} 
                                        onChange = {(text)=>setEmail(text)}
                                        value={email}
                                    />

                        </View>
                        <View style={constStyles.inputContainer}>
                            <Text style ={constStyles.inputText}>Password</Text>
                               <View style={constStyles.textInputWithIcon}>
                                        <TextInput 
                                                    style={constStyles.input} 
                                                    onChange = {(text)=>setPassword(text)}
                                                    value={password}
                                                />
                                        <Icon
                                            name='visibility-off'
                                            size={20}
                                            style={constStyles.iconStyle}
                                        />
                               </View>          
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate("ForgotPassword")}>
                            <Text style={{color:COLORS.white,fontSize:14,textAlign:'center'}}>Forgot your password?</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{marginTop:vs(140)}}>
                        <PrimaryButton onPress={()=>navigation.navigate("Playhome")} title="Login" ></PrimaryButton>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default LoginScreen;
