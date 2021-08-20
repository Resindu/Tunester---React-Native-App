import React from 'react';
import { View,Text,Image,ImageBackground,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import {constStyles} from '../../constants/styles';
import {LeftArrow}  from '../components/LeftArrow';
import COLORS from '../../constants/colors';
import languages from '../../constants/languages';
const width = Dimensions.get("screen").width-27-25;

const ChooseTranslatoinLanguage = ({navigation}) =>{

    const Item = ({item,country,flag})=>(
        <TouchableOpacity style={styles.translationLangContainer} onPress={()=> navigation.navigate("OnboardingComplete")}>
            <View style={styles.languageBox}>
                <Image source={flag} style={styles.translationIcon}/>
                <Text style={styles.countryName}>{country}</Text>

                
            </View>
        </TouchableOpacity>
    )

    const renderItem = ({item})=>{
        return(
            <Item
                item = {item}
                country={item.language}
                flag={item.flag}
            
            />
        )
    }
    return(
        <SafeAreaView style={constStyles.safeAreaStyles}>
        <View style={constStyles.screenPadding}>
          <View style = {{flexDirection:"row"}}>
            <TouchableOpacity>
              <LeftArrow onPress ={()=>navigation.goBack()}/>
            </TouchableOpacity>                    
          </View>
          <Text style={{color:COLORS.white,fontSize:ms(22),fontWeight:'600',marginTop:vs(10)}}>
            I want to learn  
            <Text style={{ backgroundColor: COLORS.backgroundColor, fontSize:ms(18)}}>{'   '}</Text>

            <Text style={{color:COLORS.textHighlightBlue}}>
              language{"\n"}
            </Text>
             with translations in      
          </Text>
          <View style={{marginTop:vs(20)}}>
            <FlatList
              data = {languages}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}           
            />
          </View>
          <Text style={{fontSize:ms(14),fontWeight:'400',color:COLORS.white,textAlign:'center',marginTop:vs(3)}}>You can always change this later without afecting your progress</Text>
        </View>              
      </SafeAreaView>
    )
}
const styles = ScaledSheet.create({
  translationLangContainer:{
    backgroundColor:COLORS.btnBlueColor,
    marginVertical:'5@vs',
    borderRadius:'14@ms'
  },
  languageBox:{
    flexDirection:'row',
    paddingHorizontal:'10@ms',
    paddingVertical:'8@vs'
  },
  translationIcon:{
    width:'30@ms',
    height:'30@vs',
    marginLeft:'20@ms',
    marginRight:'80@ms'
  },
  countryName:{
    color:COLORS.white,
    paddingVertical:'4@vs',
    fontSize:'18@ms',
    fontWeight:'600'
  }

})
export default ChooseTranslatoinLanguage;