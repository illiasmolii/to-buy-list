import { ToBuy } from "../model/ToBuy";

export default class ToBuySource {

  static mockToBuys = [
    {id: 1, name: "Bread", isBought: false },
    {id: 2, name: "Eggs", isBought: false },
    {id: 3, name: "Apple", isBought: false },
    {id: 4, name: "Orange", isBought: true },
    {id: 5, name: "Meat", isBought: false },
    {id: 6, name: "Milk", isBought: false },
    {id: 7, name: "Coffee", isBought: true },
    {id: 8, name: "Cookies", isBought: true },
    {id: 9, name: "Sugar", isBought: true },
    {id: 10, name: "Salt", isBought: false },
    {id: 11, name: "Tea", isBought: true }
  ];

  static getToBuy = (): Promise<ToBuy[]> => {
    return Promise.resolve(ToBuySource.mockToBuys);
  };

  static updateToBuys = (toBuys: ToBuy[]): Promise<void> => {
    ToBuySource.mockToBuys = toBuys;
    return Promise.resolve();
  };
}