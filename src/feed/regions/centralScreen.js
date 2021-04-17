import React, { useState } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RegionCollection from '../../regionCollection/regionCollection'

const centralList = [{"id":"0", "name":"Cape Coast Castle", "image":require('../../../assets/central/cccastle.jpeg')}, {"id":"1", "name":"Coconut Grove Hotel", "image":require('../../../assets/central/coconut.jpeg')}, {"id":"2", "name":"Elmina Resort", "image":require('../../../assets/central/elminabe.jpeg')},
{"id":"3", "name":"Kakum National Park", "image":require('../../../assets/central/kakum.jpeg')}, {"id":"4", "name":"Oasis Beach Resort", "image":require('../../../assets/central/oasis.jpg')}, {"id":"5", "name":"White Sands Beach", "image":require('../../../assets/central/whitesand.jpeg')}, {"id":"5", "name":"Peduase Valley Resort", "image":require('../../../assets/eastern/peduase.jpg')}]

const Centralpage = ({navigation}) =>{
    const [cents, setCents] = useState(centralList)
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
            {cents.map((cent=>{
            return(
            <View style={{borderRadius:10, borderWidth:.5, height:100, width:350, marginTop:20, flexDirection:"row", marginBottom:30}}>
            <View>
            <Image source = {cent.image} style={{height:100, width:100, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>  
            </View>
            <View style={{padding:20}}>
            <View >
                <Text style={{fontSize:20, fontWeight:"bold"}}>{cent.name}</Text>
            </View>
            <View style={{paddingTop:5}}>
            <Text>Central Region</Text>
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

export default Centralpage;