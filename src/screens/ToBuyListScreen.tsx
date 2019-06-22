import * as React from "react";
import { Button, View } from "react-native";
import { ToBuy } from "../data/model/ToBuy";
import ToBuySource from "../data/source/ToBuySource";
import ToBuyList from "../components/ToBuyList";

interface ToBuyListScreenProps {
  navigation: { navigate: (string) => void };
}

interface ToBuyListScreenState {
  toBuys: ToBuy[]
}

export default class ToBuyListScreen extends React.Component<ToBuyListScreenProps, ToBuyListScreenState> {

  state = {
    toBuys: new Array<ToBuy>()
  };

  componentDidMount(): void {
    this.fetchToBuys();
  }

  private fetchToBuys = () => {
    ToBuySource.getToBuy()
      .then(toBuys => this.setState({toBuys}));
  };

  private updateToBuys = (toBuys: ToBuy[]): void => {
    ToBuySource.updateToBuys(toBuys)
      .then(() => this.fetchToBuys());
  };

  onBoughtChanged = (id: number): void => {
    const newToBuys = this.state.toBuys.map(toBuy => {
      if (toBuy.id === id) {
        return {...toBuy, isBought: !toBuy.isBought};
      } else {
        return toBuy;
      }
    });
    this.updateToBuys(newToBuys);
  };

  onRemoved = (id: number): void => {
    const newToBuys = this.state.toBuys.filter(toBuy => toBuy.id !== id);
    this.updateToBuys(newToBuys);
  };

  onGoToAuthPressed = () => {
    this.props.navigation.navigate('Auth')
  };

  render() {
    return <View>
      <ToBuyList toBuys={this.state.toBuys}
                 onBoughtChange={this.onBoughtChanged}
                 onRemove={this.onRemoved}
      />
      <Button title="Go to auth" onPress={this.onGoToAuthPressed}/>
    </View>
  }
}