import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const LoginScreen =()=>{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return(
        <View style={{padding:20, flex:1, backgroundColor:"white"}}>
            <View style={{padding:20, paddingTop:100}}>
              <Text style={{fontSize:40, fontWeight:"bold"}}>Lets sign you in.</Text>
              <Text style={{fontSize:30}}>Welcome back.</Text>
              <Text style={{fontSize:30}}>You've been missed!</Text>
            </View>

            <View>
                <View style={{ borderRadius:10, borderWidth:1, padding:16, height:50, marginTop:30, borderColor:"black"}}>
                    <TextInput
                    placeholder="Username"
                    onChange={(e)=>setUsername(e)}
                    value={username}
                    clearTextOnFocus={true}
                    />
                </View>

                <View style={{ borderRadius:10, borderWidth:1, padding:16, height:50, marginTop:30, borderColor:"black"}}>
                    <TextInput
                    placeholder="Password"
                    onChange={(e)=>setPassword(e)}
                    value={password}
                    clearTextOnFocus={true}
                    />
                </View>
            </View>

            <TouchableOpacity style={{marginTop:40, width:330, height:50, backgroundColor:"#77A7A7", justifyContent:"center", alignItems:"center",  borderRadius:10}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>LOG IN</Text>
            </TouchableOpacity>

            <View style={{paddingTop:30, fontSize:20}}>
                <Text>Don't have an account? <Text style={{color:"#77A7A7", fontWeight:"bold"}}>Sign up</Text></Text>
            </View>

            <TouchableOpacity style={{marginTop:40, width:330, height:50, alignItems:"center",  justifyContent:"center",borderRadius:10, flexDirection:"row",backgroundColor:"#77A7A7"}}>
                <View style={{paddingRight:10}}>
                    <FontAwesome
                    name="google"
                    size={24}
                    color="black"/>
                </View>
                <View >
                <Text style={{fontSize:20, fontWeight:"bold"}}>Login with Google </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop:40, width:330, height:50, alignItems:"center",  justifyContent:"center",borderRadius:10, flexDirection:"row", backgroundColor:"#77A7A7"}}>
                <View style={{paddingRight:10}}>
                    <FontAwesome
                    name="facebook"
                    size={24}
                    color="black"/>
                </View>
                <View >
                <Text style={{fontSize:20, fontWeight:"bold"}}>Login with Facebook </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;