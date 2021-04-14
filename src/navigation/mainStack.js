import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomStackNavigator from './bottomStack';
import Easternpage from '../feed/regions/easternScreen';
const Stack = createStackNavigator();

const MainStackNavigator = () =>{
    return(
        <Fragment>
             <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="main" component={BottomStackNavigator} />
      </Stack.Navigator>
        </Fragment>
    )
}
const regionStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Easternpage" component={Easternpage}/>
    </Stack.Navigator>
  )
}
export default MainStackNavigator;