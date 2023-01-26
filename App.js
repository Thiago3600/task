// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login'
import Task from './src/pages/Task'
import NewTask from './src/pages/NewTask'
import Details from './src/pages/Details'

const optionsStack = {
  headerTintColor: '#f92e6a'
}

const {Screen, Navigator} = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator options={optionsStack}>
        <Screen 
          name="Login" 
          component={Login} 
          
        />
        <Screen 
          name="Task" 
          component={Task} 
          
        />
        <Screen 
          name="NewTask" 
          component={NewTask} 

        />
        <Screen 
          name="Details" 
          component={Details} 
  
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;

