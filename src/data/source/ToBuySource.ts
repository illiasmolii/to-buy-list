import { ToBuy } from "../model/ToBuy";
import { AsyncStorage } from "react-native";

export default class ToBuySource {

  static STORAGE_KEY = "to-buys";

  static getToBuy = (): Promise<ToBuy[]> => {
    return AsyncStorage.getItem(ToBuySource.STORAGE_KEY)
      .then(JSON.parse)
      .then(toBuys => !!toBuys ? toBuys : []);
  };

  static updateToBuys = (toBuys: ToBuy[]): Promise<void> => {
    return AsyncStorage.setItem(ToBuySource.STORAGE_KEY, JSON.stringify(toBuys));
  };
}