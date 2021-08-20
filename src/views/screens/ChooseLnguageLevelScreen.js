import React from 'react';
import { View,Text,Image,ImageBackground,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

import {constStyles} from '../../constants/styles';
import {LeftArrow}  from '../components/LeftArrow';
import COLORS from '../../constants/colors';
import languageLevel from '../../constants/languageLevel';
const width = Dimensions.get("screen").width/2;

const ChooseLanguageLevelScreen  = ({route,navigation})=>{


  const Item = ({item,level,text}) => (
    <TouchableOpacity style={styles.languageContainer} onPress={()=> navigation.navigate("ChooseTranslatoinLanguage")}>
      <View style={{paddingHorizontal:ms(20),paddingVertical:vs(10)}}>
        <Text style={{color:COLORS.white,fontWeight:'600',fontSize:ms(18),}}>{level}</Text>
        <Text style={{color:COLORS.fadedWhite,fontWeight:'400',fontSize:ms(13),marginVertical:vs(5)}}>{text}</Text>
      </View>
    </TouchableOpacity>
  )


  const renderItem = ({item})=>{
    return(
      <Item 
        item ={item}
        level={item.level}
        text={item.text}
        
      />
    )

  }

  const data = route.params;

  return (
    <SafeAreaView style={constStyles.safeAreaStyles}>
      <View style={constStyles.screenPadding}>
        <View style = {{flexDirection:"row"}}>
          <TouchableOpacity>
            <LeftArrow onPress ={()=>navigation.goBack()}/>
          </TouchableOpacity>
           <View style={styles.mainContainer}>
            <Text style={styles.languageText}>{data.language}</Text>
            <Image source={data.flag} style={styles.flagImg}/>
          </View>
          
        </View>
        <Text style={{color:COLORS.white,fontSize:ms(24),fontWeight:'600'}}>
          I consider my level in {"\n"}
          <Text style={{color:COLORS.textHighlightBlue}}>
            language
          </Text>
          <Text style={{ backgroundColor: COLORS.backgroundColor, fontSize:ms(18) }}>{'   '}</Text>
           to be        
        </Text>
        <View style={{marginTop:vs(20)}}>
          <FlatList
            data = {languageLevel}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          
          />
        </View>
        <Text style={styles.bottomText}>We'll do our best to give you content that is appropriate for your level.You can always change this later without affecting your progress.</Text>
      </View>
       
      

    </SafeAreaView>
 
  );
  }

  const styles = ScaledSheet.create({
    mainContainer:{
      marginLeft:'180@ms',
      flexDirection:"row",
      marginTop:'5@vs',
      borderColor:COLORS.flagDisplayColor,
      borderWidth:'1@ms',
      borderRadius:'30@ms',
      backgroundColor:COLORS.flagDisplayColor
    },
    languageText:{
      color:COLORS.white,
      paddingVertical:'10@vs',
      paddingHorizontal:'10@ms',
      marginLeft:'5@ms'
    },
    flagImg:{
      width:'40@ms',
      height:'40@vs'
    },
    bottomText:{
      fontSize:'14@ms',
      fontWeight:'400',
      color:COLORS.white,
      textAlign:'center',
      marginTop:'10@vs'
    },
    languageContainer:{
      backgroundColor:COLORS.btnBlueColor,
      marginVertical:'7@vs',
      borderRadius:'14@ms'
    }

  })

export default ChooseLanguageLevelScreen;