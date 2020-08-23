import React from 'react'
import { View, Text, Button, } from 'react-native'
import { IconHome } from '../assets'


export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home creen</Text>
          <Button title="Go to detail screen" onPress={() => navigation.navigate("Details")} />
        </View>
      );
}
