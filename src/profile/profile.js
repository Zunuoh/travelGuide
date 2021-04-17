import React from 'react';
import {View, Text, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useState } from 'react/cjs/react.development';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EditProfile from '../editProfile/editProfile';

const profileList = [{"id":"0", "image":require('../../assets/profile/one.jpg')}, {"id":"1", "image":require('../../assets/profile/two.jpg')}, {"id":"2", "image":require('../../assets/profile/pic.jpeg')},
{"id":"3", "image":require('../../assets/profile/one.jpg')}, {"id":"4", "image":require('../../assets/profile/one.jpg')}, {"id":"5", "image":require('../../assets/profile/one.jpg')}, {"id":"6", "image":require('../../assets/profile/one.jpg')},
{"id":"7", "image":require('../../assets/profile/one.jpg')}, {"id":"8", "image":require('../../assets/profile/one.jpg')}]
const ProfileScreen =({navigation})=>{
    const [profiles, setProfiles] = useState(profileList);
    return(
        <View style={{padding:20}}>
              <TouchableOpacity style={{paddingTop:20, paddingLeft:300}} onPress={()=>{navigation.navigate('EditProfile')}}>
                  <Feather
                  name="more-vertical"
                  size={24}/>
              </TouchableOpacity>
              <View style={{ justifyContent:"center", alignItems:"center", paddingTop:10}}>
                  <Image source={require('../../assets/profile/pic.jpeg')} style={{width:120, height:120, borderRadius:50}}/>
              </View>
              <View style={{marginTop:20, justifyContent:"center", alignItems:"center"}}>
                  <Text style={{fontSize:20, fontWeight:"bold"}}>@audreyzunuoh</Text>
              </View>
          

         <View style={{marginTop:20, height:40, flexDirection:"row", justifyContent:"space-evenly", borderTopWidth:.5, paddingTop:10}}>
         <View >
         <Text style={{fontSize:20}}>Followers</Text>
         </View>
         <View >
         <Text style={{fontSize:20}}>Following</Text>
         </View>      
         </View>

      <View style={{justifyContent:"space-evenly", flexDirection:"row", borderBottomWidth:.5, paddingBottom:10}}>
          <View>
              <Text style={{fontWeight:"bold", fontSize:20}}>990</Text>
          </View>
          <View>
              <Text style={{fontWeight:"bold", fontSize:20}}>90</Text>
          </View>
      </View>

     <View style={{flexWrap:"wrap", flexDirection:"row", marginTop:30, marginLeft:5, }}>
         {profiles && profiles.map(profile=>{
             return(
                <View >
                <Image source={profile.image} style={{width:100, height:100, marginRight:10,marginTop:10, borderRadius:5 }}/>
               
            </View>
             )
         })}
        
      </View>
      









        </View>
    )
}

export default ProfileScreen;