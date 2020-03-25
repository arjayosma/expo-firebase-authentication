import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Authentication from '../screens/Authentication';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const authenticationStack = createStackNavigator(
  {
    LoginScreen: {
      screen: Login
    },
    SignupScreen: {
      screen: Signup
    }
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none'
  }
);

const authenticationSwitch = createSwitchNavigator(
  {
    AuthenticationScreen: {
      screen: Authentication
    },
    HomeScreen: {
      screen: Home
    },
    AuthenticationStack: {
      screen: authenticationStack
    }
  },
  { initialRouteName: 'AuthenticationScreen' }
);

export default createAppContainer(authenticationSwitch);
