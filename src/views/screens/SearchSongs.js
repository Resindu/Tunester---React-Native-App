import React from 'react';
import { View,Text,Image,ImageBackground,Dimensions ,StyleSheet,TextInput} from 'react-native';
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

const SearchSongs = () =>{
    const [query,setQuery] = React.useState();
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
                <View style={styles.searchBoxContaier}>
                    <TouchableOpacity onPress={()=>{}}>
                         <Image source={require('../../assets/icons/search.png')} style={styles.searchIcon}/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        placeholderTextColor={COLORS.grey}
                        onChangeText={(text)=>{
                            setQuery(text)
                        }}
                        value={query}
                    />
                </View>
                <Text style={styles.seachText}>Find your next tune among thousands in our library</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    searchBoxContaier:{
        paddingHorizontal:'13@ms',
        height:'60@vs',
        backgroundColor:COLORS.searchBarBackground,
        flexDirection:'row',
        marginTop:'20@vs',
        borderRadius:'13@ms'
    },

    searchInput:{
        height:'40@vs',
        width:'270@ms',
        marginTop:'10@vs',
        fontSize:'18@ms',
        color:COLORS.grey
    },
    searchIcon:{
        width:'20@ms',
        height:'20@vs',
        marginHorizontal:'19@ms',
        marginVertical:'20@vs'
    },
    seachText:{
        color:COLORS.white,
        fontSize:'19@ms',
        fontWeight:'600',
        textAlign:'center',
        marginTop:'120@vs'
    }

});
export default SearchSongs;