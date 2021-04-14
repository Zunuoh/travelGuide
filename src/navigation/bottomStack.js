import React, {Fragment} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../profile/profile';
import FeedScreen from '../feed/feed';
import Easternpage from '../feed/regions/easternScreen';
import RegionCollection from '../regionCollection/regionCollection';
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomStackNavigator = () =>{
    return(
        <Fragment>
             <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: "#ccc",
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" color="black" size={24} />
            ),
          }}
        />
         <Tab.Screen
          name="RegionCollection"
          component={RegionCollection}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" color="black" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="logo-buffer" color="black" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Easternpage"
          component={Easternpage}
          options={{
            tabBarIcon: () => (
              <Ionicons name="ios-cart" color="black" size={24} />
            ),
          }}
        />
      </Tab.Navigator>

        </Fragment>
    )
}

export default BottomStackNavigator;