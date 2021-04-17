import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomStackNavigator from './bottomStack';
import Easternpage from '../feed/regions/easternScreen';
import EditProfile from '../editProfile/editProfile';
import Centralpage from '../feed/regions/centralScreen';
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
        <Stack.Screen name="Easternpage" component={Easternpage}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>
        <Stack.Screen name="Centralpage" component={Centralpage}/>
      </Stack.Navigator>
        </Fragment>
    )
}
// const regionStack = () =>{
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name="Easternpage" component={Easternpage}/>
//     </Stack.Navigator>
//   )
// }
export default MainStackNavigator;