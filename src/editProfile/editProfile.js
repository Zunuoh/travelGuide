import React from 'react';
import {View, Text, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
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

              <View >
                  <View style={{marginTop:20}}>
                  <Text>First Name</Text>
                  <View style={{padding:15, borderWidth:.5, marginTop:10, borderRadius:10}}>
                  <TextInput
                  placeholder="First name"
                  />
                  </View>
                  </View>
                 

                  <View style={{marginTop:20}}>
                  <Text>Last Name</Text>
                  <View style={{padding:15, borderWidth:.5, marginTop:10, borderRadius:10}}>
                  <TextInput
                  placeholder="Last name"
                  />
                  </View>
                  </View>

                  <View style={{marginTop:20}}>
                  <Text>E-mail</Text>
                  <View style={{padding:15, borderWidth:.5, marginTop:10, borderRadius:10}}>
                  <TextInput
                  placeholder="E-mail"
                  />
                  </View>
                  </View>

                  <View style={{marginTop:20}}>
                  <Text>Phone Number</Text>
                  <View style={{padding:15, borderWidth:.5, marginTop:10, borderRadius:10}}>
                  <TextInput
                  placeholder="Phone Number"
                  />
                  </View>
                  </View>

                  <TouchableOpacity style={{marginTop:30, width:330, height:50, backgroundColor:"blue",  borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                      <Text style={{fontSize:20, fontWeight:"bold"}}>UPDATE</Text>
                  </TouchableOpacity>
                  
              </View>
        </View>
    )
}

export default EditProfileScreen;