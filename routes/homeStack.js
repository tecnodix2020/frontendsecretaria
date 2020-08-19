import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Option from '../screens/option';

const screens = {
    Home: {
        screen: Home
    },
    Option: {
        screen: Option
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);