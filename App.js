import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header, Title, Left, Right} from 'native-base';
import HomeShop from './component/HomeShop';
import Cart from './component/Cart';
import PersonalInformation from './component/PersonalInformation';
import Success from './component/Success';
import Delivery from './component/Delivery';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class App extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate('HomeStack');
  }

  render() {
    return <></>;
  }
}

const HomeStack = createStackNavigator(
  {
    HomeShop: {screen: HomeShop},
    Cart: {screen: Cart},
    PersonalInformation: {screen: PersonalInformation},
    Success: {screen: Success},
    Delivery: {screen: Delivery},
  },
  {
    headerMode: 'none',
  },
);

// const AuthStack = createStackNavigator({

// }, {
//   headerMode: 'none'
// })

export default createAppContainer(
  createSwitchNavigator(
    {
      AppStack: App,
      HomeStack: HomeStack,
      // AuthStack: AuthStack
    },
    {
      initialRouteParams: 'AppStack',
      headerMode: 'none',
    },
  ),
);
