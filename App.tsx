import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import AuthScreen from "./src/screens/AuthScreen";
import ToBuyListScreen from "./src/screens/ToBuyListScreen";

const Router = createStackNavigator({
  ToBuyList: {screen: ToBuyListScreen },
  Auth: {screen: AuthScreen}
});

const App = createAppContainer(Router);

export default App;
