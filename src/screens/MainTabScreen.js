import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

import {Image} from 'react-native'


import { Button } from 'react-native-paper';
import { IconProfile, IconHome, IconMaps } from '../assets';

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
          // <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          // <IconMaps />
           <MaterialIcons 
                        name="home"
                        color={color}
                        size={20}
                    />
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
          // <MaterialCommunityIcons name="bell" color={color} size={26} />
          // <IconHome color={color} />
          <MaterialIcons 
                        name="build"
                        color={color}
                        size={20}
                    />
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
          // <MaterialCommunityIcons name="account" color={color} size={26} />
          // <IconProfile color={color} />
          <MaterialIcons 
                        name="person"
                        color={color}
                        size={20}
                    />

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
          // <MaterialCommunityIcons name="account" color={color} size={26} />
          // <IconProfile color={color} />
          <MaterialIcons 
                        name="navigation"
                        color={color}
                        size={20}
                    />
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
        <Button  onPress={() => navigation.openDrawer()}>
         {/* <Image source={require('../assets/images/bar.png')} style={{width: 25, height:25}} /> */}
         <MaterialIcons 
                        name="menu"
                        color='#fff'
                        size={20}
                    />
        </Button>
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
        <Button  onPress={() => navigation.openDrawer()}>
         {/* <Image source={require('../assets/images/bar.png')} style={{width: 25, height:25}} /> */}
         <MaterialIcons 
                        name="menu"
                        color='#fff'
                        size={20}
                    />
        </Button>
      )
    }} />
  </DetailsStack.Navigator>



);