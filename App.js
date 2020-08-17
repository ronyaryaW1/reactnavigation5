// In App.js in a new project

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

import Icon from 'react-native-vector-icons/FontAwesome';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: 'magenta',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: "Overview",
      headerLeft: () => (
        <Icon.Button 
        name="facebook" 
        size={25} 
        backgroundColor="magenta" 
        onPress={() => {navigation.openDrawer()}}></Icon.Button>
      )  

    }} />
  </HomeStack.Navigator>

);
const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: 'magenta',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      // headerLeft: () => (
      //   <Icon.Button 
      //   name="facebook" 
      //   size={25} 
      //   backgroundColor="magenta" 
      //   onPress={() => {navigation.openDrawer()}}></Icon.Button>
      // )  

    }} />
  </DetailsStack.Navigator>

);


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
      {/*  */}
    </NavigationContainer>
  );
}

export default App;