import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/colors';
import { LoadingScreenAccountButton } from '../components/Button';
import {GetStartedButton} from '../components/GetStartedButton';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';

const LandingScreen = ({navigation}) => {
    return(
        <SafeAreaView style ={{flex:1 ,backgroundColor:COLORS.backgroundColor}}>
            <View style={{ flex: 3 }} >           
              <Text style={{fontSize:ms(43),color:COLORS.white,textAlign:'center',marginTop:vs(200)}}>Tunester</Text>
              <Text style={{fontSize:ms(18),color:COLORS.white,textAlign:'center'}}>Learn language to your own beat</Text>

            </View>
            <View style={{ flex: 1}}>
                <View style={style.btnView}>
                   <LoadingScreenAccountButton  onPress ={()=>navigation.navigate("Login")} title="I already have an account"></LoadingScreenAccountButton>
                </View>
                <View style={style.btnView}>
                    <GetStartedButton  onPress ={()=>navigation.navigate("Name")} title="Get Started"></GetStartedButton>
                </View>

            </View> 
        </SafeAreaView>
    )
}

const style = ScaledSheet.create({
    btnView:{   
        marginTop:'9@vs',
        paddingLeft:'30@ms', 
        paddingRight:'30@ms'

    }
})
export default LandingScreen;