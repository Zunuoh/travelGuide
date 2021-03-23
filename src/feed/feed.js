import React, { useState } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';

const easternList = [{"id":"0", "name":"Hillburi Hotel", "image":require('../../assets/hillburi.jpg')}, {"id":"1", "name":"The Royal Senchi Hotel", "image":require('../../assets/senchi.jpg')}, {"id":"2", "name":"Aburi Botanical Gardens", "image":require('../../assets/aburi.jpg')},
{"id":"3", "name":"Safari Valley", "image":require('../../assets/safari.png')}, {"id":"4", "name":"Landsdown Hotel", "image":require('../../assets/landsdown.jpeg')}, {"id":"5", "name":"Peduase Valley Resort", "image":require('../../assets/peduase.jpg')}, {"id":"5", "name":"Peduase Valley Resort", "image":require('../../assets/peduase.jpg')}]

const Feedpage = () =>{
    const [easts, setEast] = useState(easternList)
    return(
        <View style={{flex:1, paddingLeft:10, paddingRight:10}}>
            <View style={{paddingLeft:20, paddingTop:70}}>
                <Text style={{fontSize:25, fontWeight:"bold"}}>ENJOY!</Text>
            </View>
            <ScrollView>
            {easts.map((east=>{
            return(
            <View style={{borderRadius:10, borderWidth:.5, height:100, width:350, marginTop:20, flexDirection:"row", marginBottom:30}}>
            <View>
            <Image source = {east.image} style={{height:100, width:100, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>  
            </View>
            <View style={{padding:20}}>
            <View >
                <Text style={{fontSize:20, fontWeight:"bold"}}>{east.name}</Text>
            </View>
            <View style={{paddingTop:5}}>
            <Text>Aburi, Eastern Region</Text>
            </View>
            <View style={{paddingTop:5}}>
            <Text>Ghana</Text>
            </View>
            </View>
          </View>
                )
            }))}
          
          </ScrollView>
        </View>
    )
}

export default Feedpage;