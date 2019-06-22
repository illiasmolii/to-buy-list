import * as React from "react";
import { View, Text, Button } from "react-native";

interface AuthScreenProps {
  navigation: { navigate: (string) => void }
}

export default class AuthScreen extends React.Component<AuthScreenProps> {

  onGoToListPressed = () => {
    this.props.navigation.navigate('ToBuyListScreen')
  };

  render() {
    return <View>
      <Text>Auth will be here</Text>
      <Button title="Go to list" onPress={this.onGoToListPressed}/>
    </View>;
  }
}