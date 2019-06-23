import * as React from "react";
import { Button, View } from "react-native";
import { ToBuy } from "../data/model/ToBuy";
import ToBuySource from "../data/source/ToBuySource";
import ToBuyList from "../components/ToBuyList";

interface ToBuyListScreenProps {
  navigation: { navigate: (string) => void };
}

interface ToBuyListScreenState {
  toBuys: ToBuy[],
  newToBuy: ToBuy,
  isAddingNew: boolean
}
const getInitialNewToBuy = (): ToBuy => {
  return {id: new Date().getUTCMilliseconds(), name: "", isBought: false}
};

export default class ToBuyListScreen extends React.Component<ToBuyListScreenProps, ToBuyListScreenState> {

  state = {
    toBuys: new Array<ToBuy>(),
    newToBuy: getInitialNewToBuy(),
    isAddingNew: false
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

  handleBoughtChanged = (id: number): void => {
    const newToBuys = this.state.toBuys.map(toBuy => {
      if (toBuy.id === id) {
        return {...toBuy, isBought: !toBuy.isBought};
      } else {
        return toBuy;
      }
    });
    this.updateToBuys(newToBuys);
  };

  handleToBuyRemoved = (id: number): void => {
    const newToBuys = this.state.toBuys.filter(toBuy => toBuy.id !== id);
    this.updateToBuys(newToBuys);
  };

  handleAddNewChange = () => {
    this.setState((prev) => {
      return {isAddingNew: !prev.isAddingNew}
    });
  };

  handleNewToBuyChange = (newToBuy: ToBuy) => {
    this.setState({newToBuy});
  };

  handleAddNew = () => {
    const newToBuys = this.state.toBuys.slice().concat(this.state.newToBuy);
    this.setState({isAddingNew: false, newToBuy: getInitialNewToBuy()});
    this.updateToBuys(newToBuys);
  };

  handleGoToAuthPressed = () => {
    this.props.navigation.navigate('Auth')
  };

  render() {
    const {toBuys, isAddingNew, newToBuy} = this.state;
    return <View>
      <ToBuyList toBuys={toBuys}
                 onBoughtChange={this.handleBoughtChanged}
                 onRemove={this.handleToBuyRemoved}
                 isAddingNew={isAddingNew}
                 newToBuy={newToBuy}
                 onAddNewChange={this.handleAddNewChange}
                 onNewToBuyChange={this.handleNewToBuyChange}
                 onAddNew={this.handleAddNew}
      />
      <Button title="Go to auth" onPress={this.handleGoToAuthPressed}/>
    </View>
  }
}