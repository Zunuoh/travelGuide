import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Easternpage from '../feed/regions/easternScreen';
import Centralpage from '../feed/regions/centralScreen';

const regionList = [{"id":"0", "name":"Greater Accra Region"}, {"id":"1", "name":"Eastern Region"}, {"id":"2", "name":"Central Region"}, {"id":"3", "name":"Ashanti Region"},{"id":"4", "name":"Western Region"},
{"id":"5", "name":"Western North Region"}, {"id":"6", "name":"Volta  Region"}, {"id":"7", "name":"Oti Region"}, {"id":"8", "name":"Bono Region"}, {"id":"9", "name":"Bono East Region"}, {"id":"10", "name":"Ahafo Region"},
{"id":"11", "name":"North East Region"}, {"id":"12", "name":"Savannah Region"}, {"id":"13", "name":"Northern Region"}, {"id":"14", "name":"Upper East Region"}, {"id":"15", "name":"Upper West Region"}]

const RegionCollection =({navigation})=>{
    const[regions, setRegions] = useState(regionList);
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{paddingTop:60}}>
                <Text>Below are the 16 regions of Ghana. Explore!</Text>
            </View>
            <ScrollView>
                <TouchableOpacity style={{height:60, backgroundColor:"#E8E8E8",  borderWidth:.1, border:1, marginTop:20, padding:20, shadowColor: "black",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.3,shadowRadius: 3.84,elevation: 5,borderRadius:5}}>
                    <Text style={{fontSize:20}}>Greater Accra Region</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60, backgroundColor:"#E8E8E8",  borderWidth:.1, border:1, marginTop:20, padding:20, shadowColor: "black",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.3,shadowRadius: 3.84,elevation: 5,}} onPress={()=>{navigation.navigate('Easternpage')}}>
                    <Text style={{fontSize:20}}>Eastern Region</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60, backgroundColor:"#E8E8E8",  borderWidth:.1, border:1, marginTop:20, padding:20, shadowColor: "black",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.3,shadowRadius: 3.84,elevation: 5,}} onPress={()=>{navigation.navigate('Centralpage')}}>
                    <Text style={{fontSize:20}}>Central Region</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60, backgroundColor:"#E8E8E8",  borderWidth:.1, marginTop:20, padding:20, shadowColor: "black",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.3,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{fontSize:20}}>Western Region</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60, backgroundColor:"#E8E8E8",  borderWidth:.1, border:1, marginTop:20, padding:20, shadowColor: "black",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.3,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{fontSize:20}}>Savannah Region</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60, backgroundColor:"#E8E8E8",  borderWidth:.1, border:1, marginTop:20, padding:20, shadowColor: "black",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.3,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{fontSize:20}}>Volta Region</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:60, backgroundColor:"#E8E8E8",  borderWidth:.1, border:1, marginTop:20, padding:20, shadowColor: "black",shadowOffset: {width: 0,height: 2},shadowOpacity: 0.3,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{fontSize:20}}>Ashanti Region</Text>
                </TouchableOpacity>
        
            </ScrollView>
        




        </View>
    )
}

export default RegionCollection;