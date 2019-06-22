import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import AuthScreen from "./src/sreens/AuthScreen";
import ToBuyListScreen from "./src/sreens/ToBuyListScreen";

const Router = createStackNavigator({
  ToBuyList: {screen: ToBuyListScreen },
  Auth: {screen: AuthScreen}
});

const App = createAppContainer(Router);

export default App;
