import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import COLORS from './colors';

const constStyles =  ScaledSheet.create({

    safeAreaStyles:{
        flex:1,
        backgroundColor:COLORS.backgroundColor
    },
    screenPadding:{
        paddingHorizontal:'27@ms',
    },
    input:{
        height:"57@vs",
        borderColor:COLORS.btnBorderColor,
        borderRadius:'15@ms',
        backgroundColor:COLORS.btnBlueColor,
        padding:'15@ms',
        color:COLORS.grey,
        fontSize:'15@ms',
        marginBottom:'20@vs'
        
    },
    inputText:{
        fontSize:'16@ms',
        color:COLORS.white,
        paddingBottom:'5@vs'
    },
    inputContainer:{
        marginBottom:'20@vs'
    },
    textInputWithIcon:{
        flexDirection:'row',
        backgroundColor:COLORS.btnBlueColor,
        height:'57@vs',
        borderRadius:'15@ms'
    },
    iconStyle:{
        paddingLeft:'170@ms',
        marginTop:'20@vs',
        color:COLORS.grey
    },
    tabHeaderIconContainer:{
        flexDirection:"row",
        marginTop:'10@vs'
    },
    tabHeaderLeft:{
        flexDirection:'row',
        backgroundColor:COLORS.iconDarkBlue,
        height:'48@vs',
        width:'100@ms',
        borderRadius:'40@ms'
    },
    tabHeaderLeftText:{
        color:COLORS.white,
        marginHorizontal:'10@ms',
        marginVertical:'15@vs'
    },
    tabHederRight:{
        marginLeft:'160@ms',
        height:'45@vs',
        
    },
    tabHederRightFlag:{
        width:'40@ms',
        height:'40@vs'
    },
    displayIconStyle:{
        width:'27@ms',
        height:'27@vs',
        marginLeft:'19@ms',
        marginTop:'10@vs'
    }

})
export {constStyles}
