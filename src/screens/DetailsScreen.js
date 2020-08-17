import * as React from 'react';
import { View, Text, Button } from 'react-native';
function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button 
        title="Go to details again"
        onPress={() => navigation.push("Details")}
        />
        <Button 
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
        />
        <Button 
        title="Go back"
        onPress={()=> navigation.goBack()}
        />
        <Button 
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

  export default DetailsScreen;