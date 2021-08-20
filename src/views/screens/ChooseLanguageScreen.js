import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { View,Text ,Image,TextInput ,StyleSheet,KeyboardAvoidingView,ScrollView, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import COLORS from '../../constants/colors';
import { PrimaryButton } from '../components/PrimaryButton';
import Icons from 'react-native-vector-icons/Ionicons';
import {constStyles} from '../../constants/styles';
import languages from '../../constants/languages';
import {LeftArrow}  from '../components/LeftArrow';
const width = Dimensions.get("screen").width/2-27-25;



const Item = ({ item, onPress, backgroundColor, textColor,flag,image }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor},{marginRight:ms(0),marginLeft:ms(20)}]}>
      <View style={{width:ms(130),height:vs(70),backgroundColor:COLORS.btnBlueColor,borderTopLeftRadius:ms(21),borderTopRightRadius:ms(21)}}>
          <Image source={image} style={{width:ms(60),height:vs(60),alignSelf:'center'}}/>
      </View>
      <View style={{width:ms(30),height:vs(30),borderRadius:ms(10),marginHorizontal:ms(65),marginTop:vs(-20),alignSelf:'center'}}>
          <Image source={flag} style={{width:ms(30),height:vs(30),borderColor:'white',borderWidth:ms(3),borderRadius:30}}/>
      </View>

      <Text style={[styles.title, textColor]}>{item.language}</Text>
    </TouchableOpacity>
  );

const ChooseLanguageScreen = ({navigation}) => {

    const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            backgroundColor= {item.color}
            textColor={{ color:COLORS.black }}
            flag = {item.flag}
            image={item.image}
            onPress={() => navigation.push("ChooseLnguageLevel",item)}
          />
        );
      };


    return(
        <SafeAreaView style={constStyles.safeAreaStyles}>
            <View style={constStyles.screenPadding}>
                <TouchableOpacity>
                  <LeftArrow onPress ={()=>navigation.goBack()}/>
                </TouchableOpacity>
                <View style={{marginTop:vs(15)}}>
                    <Text style={{fontSize:ms(24),color:COLORS.white}}>I want to speak</Text>
                </View>
                <View style={{marginTop:vs(20),}}>
                        <FlatList 
                        numColumns={2}
                        data={languages}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>

            </View>
           
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
  
    item: {
      padding: '0@s',
      marginVertical: '8@vs',
      width:'120@s',
      height:'120@vs',
      borderRadius:'21@s'
    },
    title: {
      fontSize:'16@ms',
      textAlign:'center',
      fontWeight:'500'
    },
  });
export default ChooseLanguageScreen;