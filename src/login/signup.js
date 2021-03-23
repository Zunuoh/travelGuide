import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesome, Feather} from '@expo/vector-icons';

const SignupScreen =()=>{
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // const handleLogin = ()=>{
    //     if (username == "" ||  password == ""){
    //         alert("Kindly fill all fields")
    //     }else{
    //         alert("Success!")
    //     }
    // }
    return(
        <View style={{padding:20, flex:1, backgroundColor:"white"}}>
            <View style={{padding:20, paddingTop:120}}>
              <Text style={{fontSize:30, fontWeight:"bold"}}>Hello,</Text>  
              <Text style={{fontSize:40, fontWeight:"bold"}}>Sign up</Text>
              {/* <Text style={{fontSize:30}}>Welcome back.</Text>
              <Text style={{fontSize:30}}>You've been missed!</Text> */}
            </View>

            <View>
            <View style={{ borderBottomWidth:1, padding:16, height:50, marginTop:10, borderColor:"black"}}>
                    <TextInput
                    placeholder="Email"
                    // onChange={(e)=>setUsername(e)}
                    // value={username}
                    clearTextOnFocus={true}
                    />
                </View>
                <View style={{ borderBottomWidth:1, padding:16, height:50, marginTop:30, borderColor:"black"}}>
                    <TextInput
                    placeholder="Username"
                    // onChange={(e)=>setUsername(e)}
                    // value={username}
                    clearTextOnFocus={true}
                    />
                </View>

                <View style={{ borderBottomWidth:1, padding:16, height:50, marginTop:30, borderColor:"black"}}>
                    <TextInput
                    placeholder="Password"
                    // onChange={(e)=>setPassword(e)}
                    // value={password}
                    clearTextOnFocus={true}
                    />
                </View>
                <View style={{ borderBottomWidth:1, padding:16, height:50, marginTop:30, borderColor:"black"}}>
                    <TextInput
                    placeholder="Retype password"
                    // onChange={(e)=>setPassword(e)}
                    // value={password}
                    clearTextOnFocus={true}
                    />
                </View>
            </View>

            <TouchableOpacity style={{marginTop:40, width:130, height:50, backgroundColor:"#77A7A7", justifyContent:"center", alignItems:"center",  borderRadius:10, marginLeft:100}} onPress={()=>handleLogin()}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>SIGN UP</Text>
            </TouchableOpacity>

            <View style={{paddingTop:30, fontSize:20}}>
                <Text>Already have an account?</Text>
            </View>

            <View style={{paddingTop:20, flexDirection:"row"}}>
            <View style={{paddingTop:2}}>
            <Text style={{color:"#77A7A7", fontWeight:"bold", fontSize:20}}>Sign in </Text>
            </View>
            <View style={{paddingTop:2, paddingLeft:10}}>
            <Feather
            name= "chevron-right"
            size={20}
            color="#77A7A7"/>
            </View>
            
            </View>

          
         
        </View>
    )
}

export default SignupScreen;