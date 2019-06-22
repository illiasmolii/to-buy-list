import * as React from "react";
import { Switch, View, Text, Button, StyleSheet } from "react-native";
import { ToBuy } from "../data/model/ToBuy";

interface ToBuyEntryProps {
  toBuy: ToBuy,
  onBoughtChange: () => void,
  onRemove: () => void
}

export default class ToBuyEntry extends React.Component<ToBuyEntryProps> {

  render() {
    const {toBuy, onBoughtChange, onRemove} = this.props;
    return <View style={style.container}>
      <Switch style={style.switch}
              value={toBuy.isBought}
              onValueChange={onBoughtChange}/>
      <Text style={style.name}>{toBuy.name}</Text>
      <View style={style.remove}>
        <Button title="X" onPress={onRemove}/>
      </View>
    </View>
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  switch: {
    flex: 1
  },
  name: {
    flex: 3
  },
  remove: {
    flex: 1
  }
});