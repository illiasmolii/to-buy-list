import * as React from "react";
import { View, Text, Button } from "react-native";

interface AuthProps {
  navigation: { navigate }
}

export default class Auth extends React.Component<AuthProps> {

  onGoToListPressed = () => {
    this.props.navigation.navigate('ToBuyList')
  };

  render() {
    return <View>
      <Text>Auth will be here</Text>
      <Button title="Go to list" onPress={this.onGoToListPressed}/>
    </View>;
  }
}