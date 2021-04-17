import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

const EditProfileScreen =()=>{
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{justifyContent:"center", alignItems:"center", paddingTop:40}}>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Edit Profile</Text>
            </View>
              <View style={{ justifyContent:"center", alignItems:"center", paddingTop:40}}>
                  <Image source={require('../../assets/profile/pic.jpeg')} style={{width:120, height:120, borderRadius:50}}/>
              </View>
              <View style={{marginTop:20, justifyContent:"center", alignItems:"center"}}>
                  <Text style={{fontSize:20, fontWeight:"bold"}}>@audreyzunuoh</Text>
              </View>

              <View></View>
        </View>
    )
}

export default EditProfileScreen;