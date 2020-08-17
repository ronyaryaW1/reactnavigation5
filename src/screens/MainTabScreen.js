import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'magenta',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: 'orange',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: 'green',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

);
export default MainTabScreen;

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
        backgroundColor: 'orange',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
          
        headerLeft: () => (
          <Icon.Button 
          name="facebook" 
          size={25} 
          backgroundColor="orange" 
          onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )  
  
      }} />
    </DetailsStack.Navigator>


  
  );