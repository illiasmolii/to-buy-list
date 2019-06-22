import * as React from "react";
import { View, Text, Button } from "react-native";

interface ToBuyListProps {
  navigation: { navigate };
}

export default class ToBuyList extends React.Component<ToBuyListProps> {

  onGoToAuthPressed = () => {
    this.props.navigation.navigate('Auth')
  };

  render() {
    return <View>
      <Text>To buy list will be here</Text>
      <Button title="Go to auth" onPress={this.onGoToAuthPressed}/>
    </View>
  }
}