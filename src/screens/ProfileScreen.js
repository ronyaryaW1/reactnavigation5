import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ProfileScreen() {
    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button title="Click" onPress={() => alert('Button Clicked !')} />
        </View>
    )
}
