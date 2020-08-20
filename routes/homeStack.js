import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Option from '../screens/option';
import Guest from '../screens/guest';
import Meeting from '../screens/meeting';
import Delivery from '../screens/delivery';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'TELA INICIAL'
        }
        
    },
    Option: {
        screen: Option,
        navigationOptions: {
            title: 'OPÇÕES DO VISITANTE'
        }
    },
    Guest: {
        screen: Option,
        navigationOptions: {
            title: 'VISITA'
        }
    },
    Meeting: {
        screen: Option,
        navigationOptions: {
            title: 'REUNIÃO ENTREVISTA'
        }
    },
    Delivery: {
        screen: Option,
        navigationOptions: {
            title: 'ENTREGAS'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: '#009FE3'
        }
    }
});

export default createAppContainer(HomeStack);