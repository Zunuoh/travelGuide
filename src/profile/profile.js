import React from 'react';
import {View, Text, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';

const ProfileScreen =()=>{
    return(
        <View style={{padding:20}}>
          <View style={{flexDirection:"row", paddingTop:40}}>
              <View style={{}}>
                  <Image source={require('../../assets/pic.jpeg')} style={{width:100, height:100, borderRadius:50}}/>
              </View>
             <View style={{paddingTop:20, paddingLeft:20}}>
             <Text style={{fontSize:20, fontWeight:"bold"}}>Audrey Z</Text>
             <View style={{flexDirection:"row"}}>
             <View style={{paddingTop:10}}>
                  <Text style={{fontSize:20, fontWeight:"bold"}}>120</Text>
                  <Text style={{fontSize:20}}>Followers</Text>
              </View>
              <View style={{paddingTop:10, paddingLeft:30}}>
                  <Text style={{fontSize:20, fontWeight:"bold"}}>100</Text>
                  <Text style={{fontSize:20}}>Following</Text>
              </View>
             </View>
             </View>     
         </View>

         <View>
             {/* <Feather */}

         </View>
        </View>
    )
}

export default ProfileScreen;