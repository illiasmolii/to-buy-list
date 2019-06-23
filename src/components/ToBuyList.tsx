import * as React from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { ToBuy } from "../data/model/ToBuy";
import ToBuyEntry from "./ToBuyEntry";
import NewToBuy from "./NewToBuy";

interface ToBuyListProps {
  toBuys: ToBuy[],
  onBoughtChange: (number) => void;
  onRemove: (number) => void;
  isAddingNew: boolean;
  newToBuy: ToBuy;
  onAddNewChange: () => void;
  onNewToBuyChange: (ToBuy) => void;
  onAddNew: () => void;
}

export default class ToBuyList extends React.Component<ToBuyListProps> {

  render() {
    const {toBuys, onBoughtChange, onRemove} = this.props;
    return <ScrollView style={style.container}>
      {toBuys.map(toBuy =>
        <ToBuyEntry key={toBuy.id}
                    toBuy={toBuy}
                    onBoughtChange={() => onBoughtChange(toBuy.id)}
                    onRemove={() => onRemove(toBuy.id)}
        />)}
      {this.renderNewToBuy()}
    </ScrollView>;
  }

  private renderNewToBuy() {
    const {isAddingNew, newToBuy, onAddNewChange, onNewToBuyChange, onAddNew} = this.props;
    return <View>
      {isAddingNew
      && <NewToBuy onRemove={onAddNewChange}
                   onChange={onNewToBuyChange}
                   newToBuy={newToBuy}
                   onSubmit={onAddNew}/>}
      {!isAddingNew
      && <Button title={"Add new"}
                 onPress={onAddNewChange}/>}
    </View>
  }
}

const style = StyleSheet.create({
  container: {
    marginBottom: 5
  }
});