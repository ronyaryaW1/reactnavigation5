import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ExploreScreen() {
    return (
        <View>
            <Text>ExploreScreen</Text>
            <Button title="Click" onPress={() => alert('Button Clicked !')} />
        </View>
    )
}
