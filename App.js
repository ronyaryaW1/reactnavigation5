// In App.js in a new project

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';
import { NavigationContainer } from '@react-navigation/native';






const Drawer = createDrawerNavigator();




function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
      </Drawer.Navigator>
      {/*  */}
    </NavigationContainer>
  );
}

export default App;