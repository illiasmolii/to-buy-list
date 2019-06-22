import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Auth from "./src/sreens/Auth";
import ToBuyList from "./src/sreens/ToBuyList";

const Router = createStackNavigator({
  Auth: {screen: Auth},
  ToBuyList: {screen: ToBuyList }
});

const App = createAppContainer(Router);

export default App;
