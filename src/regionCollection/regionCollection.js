import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Easternpage from '../feed/regions/easternScreen';

const regionList = [{"id":"0", "name":"Greater Accra Region"}, {"id":"1", "name":"Eastern Region"}, {"id":"2", "name":"Central Region"}, {"id":"3", "name":"Ashanti Region"},{"id":"4", "name":"Western Region"},
{"id":"5", "name":"Western North Region"}, {"id":"6", "name":"Volta  Region"}, {"id":"7", "name":"Oti Region"}, {"id":"8", "name":"Bono Region"}, {"id":"9", "name":"Bono East Region"}, {"id":"10", "name":"Ahafo Region"},
{"id":"11", "name":"North East Region"}, {"id":"12", "name":"Savannah Region"}, {"id":"13", "name":"Northern Region"}, {"id":"14", "name":"Upper East Region"}, {"id":"15", "name":"Upper West Region"}]

const RegionCollection =(props)=>{
    const[regions, setRegions] = useState(regionList);
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{paddingTop:40}}>
                <Text>Below are the 16 regions of Ghana. Explore!</Text>
            </View>
            <ScrollView>
            {regions && regions.map(region=>{
                return(
                <TouchableOpacity style={{height:60, backgroundColor:"red", border:1, marginTop:20, padding:20}} onPress={props.navigation.push('Easternpage')}>
                    <Text style={{fontSize:20}}>{region.name}</Text>
                </TouchableOpacity>
                )
            })}
           
            </ScrollView>
            

       {/* <View style={{width:30, height:60, backgroundColor:"blue"}}>
           <Text>klm,s</Text>
           </View> */}











        </View>
    )
}

export default RegionCollection;