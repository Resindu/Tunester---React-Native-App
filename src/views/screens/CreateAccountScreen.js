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


const CreateAccount = ({navigation}) =>{

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
                        <Text style={{fontSize:ms(28),color:COLORS.white,fontWeight:'600'}}>Create an account</Text>
                        <Image source={require('../../assets/icons/key-icon.png')} style={constStyles.displayIconStyle}/>
                    </View>
                    <View style={{marginTop:vs(67)}}>
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

                    </View>
                    <View style={{marginTop:vs(170)}}>
                        <PrimaryButton onPress={()=>navigation.navigate("ChooseLanguage")} title="Create Account" ></PrimaryButton>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default CreateAccount;
