import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './pages/Login';
import Phrases from './pages/Phrases';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode={"none"} screenOptions={{
        cardStyle: {
      
        }
      }}>
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Phrases" component={Phrases}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;