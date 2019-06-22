import * as React from "react";
import { ScrollView } from "react-native";
import { ToBuy } from "../data/model/ToBuy";
import ToBuyEntry from "./ToBuyEntry";

interface ToBuyListProps {
  toBuys: ToBuy[],
  onBoughtChange: (number) => void;
  onRemove: (number) => void;
}

export default class ToBuyList extends React.Component<ToBuyListProps> {

  render() {
    const {toBuys, onBoughtChange, onRemove} = this.props;
    return <ScrollView>
      {toBuys.map(toBuy =>
        <ToBuyEntry key={toBuy.id}
                    toBuy={toBuy}
                    onBoughtChange={() => onBoughtChange(toBuy.id)}
                    onRemove={() => onRemove(toBuy.id)}
        />)}
    </ScrollView>;
  }
}