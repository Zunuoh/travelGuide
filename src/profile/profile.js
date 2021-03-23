import React from 'react';
import {View, Text, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';

const ProfileScreen =()=>{
    return(
        <View style={{padding:20}}>
              <View style={{ justifyContent:"center", alignItems:"center", paddingTop:50}}>
                  <Image source={require('../../assets/pic.jpeg')} style={{width:120, height:120, borderRadius:50}}/>
              </View>
          

         <View style={{marginTop:30, height:40, flexDirection:"row", justifyContent:"space-evenly" }}>
         <View >
         <Text style={{fontSize:20}}>Followers</Text>
         </View>
         <View >
         <Text style={{fontSize:20}}>Following</Text>
         </View>      
         </View>

      <View style={{justifyContent:"space-evenly", flexDirection:"row"}}>
          <View>
              <Text style={{fontWeight:"bold", fontSize:20}}>990</Text>
          </View>
          <View>
              <Text style={{fontWeight:"bold", fontSize:20}}>90</Text>
          </View>
      </View>

      









        </View>
    )
}

export default ProfileScreen;