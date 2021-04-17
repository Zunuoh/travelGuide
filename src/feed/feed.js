import React, { useState } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { FlatList } from 'react-native-gesture-handler';

const easternList = [{"id":"0", "name":"@theaudrey", "image":require('../../assets/eastern/hillburi.jpg')}, {"id":"1", "name":"@kofiau", "image":require('../../assets/eastern/senchi.jpg')}, {"id":"2", "name":"@imohemaa", "image":require('../../assets/central/kakum.jpeg')},
{"id":"3", "name":"@kofiwis", "image":require('../../assets/central/coconut.jpeg')}, {"id":"4", "name":"@likdom", "image":require('../../assets/eastern/landsdown.jpeg')}, {"id":"5", "name":"@kwameal", "image":require('../../assets/eastern/peduase.jpg')}, {"id":"5", "name":"@kioma", "image":require('../../assets/central/whitesand.jpeg')}]

const Feedpage = () =>{
    const [easts, setEast] = useState(easternList)
    return(
        <View style={{flex:1, padding:20}}>
            <View>
                <FlatList
                data={easternList}
                renderItem={({item}) => 
                <View>
                     <View style={{flexDirection:"row", paddingTop:30}}>
                    <View style={{}}>
                    {/* <Image source={require('../../assets/aburi.jpg')} style={{width:40, height:40}}/> */}
                    <Ionicons
                    name="person-circle-outline"
                    size={40}
                    color="black"
                    />
                    </View>
                    <View style={{paddingTop:10}}>
                        <Text style={{fontSize:20, paddingLeft:10}}>{item.name}</Text>
                    </View>
                </View>
                <View style={{paddingTop:20, shadowColor: "black",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.3,shadowRadius: 3.84,elevation: 5,borderRadius:5 }}>
                    <Image source={item.image} style={{height:200, width:330,borderRadius:10}}/>
                </View>
                <View style={{paddingTop:10, flexDirection:"row"}}>
                    <Ionicons
                    name="heart"
                    size={30}/>
                    <Ionicons
                    name="chatbubble-outline"
                    size={28} style={{paddingLeft:10}}/>
                    <Ionicons
                    name="navigate-outline"
                    size={30} style={{paddingLeft:10}}/>
                    <Ionicons
                    name="bookmark-outline"
                    size={30} style={{paddingLeft:190}}/>
                </View>
                <View style={{paddingTop:10}}>
                    <Text style={{fontWeight:"bold"}}>123 likes</Text>
                </View>
                    </View>
                    }
                />
               
            </View>









        </View>
    )
}

export default Feedpage;