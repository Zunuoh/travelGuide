import React, {Fragment} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../profile/profile';
import FeedScreen from '../feed/feed';
import Easternpage from '../feed/regions/easternScreen';
import RegionCollection from '../regionCollection/regionCollection';
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";

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
              <Feather name="menu" color="black" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <Feather name="user" color="black" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Easternpage"
          component={Easternpage}
          options={{
            tabBarIcon: () => (
              <Feather name="user" color="black" size={24} />
            ),
          }}
        />
      </Tab.Navigator>

        </Fragment>
    )
}

export default BottomStackNavigator;