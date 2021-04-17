import React, { useState } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RegionCollection from '../../regionCollection/regionCollection'

const easternList = [{"id":"0", "name":"Hillburi Hotel", "image":require('../../../assets/eastern/hillburi.jpg')}, {"id":"1", "name":"The Royal Senchi Hotel", "image":require('../../../assets/eastern/senchi.jpg')}, {"id":"2", "name":"Aburi Botanical Gardens", "image":require('../../../assets/eastern/aburi.jpg')},
{"id":"3", "name":"Safari Valley", "image":require('../../../assets/eastern/safari.png')}, {"id":"4", "name":"Landsdown Hotel", "image":require('../../../assets/eastern/landsdown.jpeg')}, {"id":"5", "name":"Peduase Valley Resort", "image":require('../../../assets/eastern/peduase.jpg')}, {"id":"5", "name":"Peduase Valley Resort", "image":require('../../../assets/eastern/peduase.jpg')}]

const Easternpage = ({navigation}) =>{
    const [easts, setEast] = useState(easternList)
    return(
        <View style={{flex:1, paddingLeft:10, paddingRight:10}}>
            <View style={{flexDirection:"row", paddingLeft:20, paddingTop:70}}>
            <TouchableOpacity>
                <Feather
                name="arrow-left"
                size={24}
                color="black"
                />
            </TouchableOpacity>
            <View style={{marginLeft:20}}>
                <Text style={{fontSize:25, fontWeight:"bold"}}>ENJOY!</Text>
            </View>
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

export default Easternpage;