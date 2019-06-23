import * as React from "react";
import { Button, StyleSheet, Switch, TextInput, View } from "react-native";
import { ToBuy } from "../data/model/ToBuy";

interface NewToBuyProps {
  onRemove: () => void;
  onChange: (ToBuy) => void;
  newToBuy: ToBuy;
  onSubmit: () => void;
}

export default class NewToBuy extends React.Component<NewToBuyProps> {

  onBoughtChange = (value: boolean) => {
    const {onChange, newToBuy} = this.props;
    onChange({...newToBuy, isBought : value});
  };

  onNameChange = (name: string) => {
    const {onChange, newToBuy} = this.props;
    onChange({...newToBuy, name});
  };

  render() {
    const {newToBuy: {name, isBought}} = this.props;
    return <View style={style.container}>
      <Switch style={style.switch}
              value={isBought}
              onValueChange={this.onBoughtChange}/>
      <TextInput style={style.name}
                 value={name}
                 onChangeText={this.onNameChange}/>
      <View style={style.controls}>
        <Button title="X" onPress={this.props.onRemove}/>
        <Button title="+" onPress={this.props.onSubmit}/>
      </View>
    </View>;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5
  },
  switch: {
    flex: 2,
  },
  name: {
    flex: 8,
    borderColor: "black"
  },
  controls: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start"
  }
});