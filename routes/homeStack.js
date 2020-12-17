import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Option from '../screens/option';
import Guest from '../screens/guest';
import Meeting from '../screens/meeting';
import Meetings from '../screens/meetings';
import Delivery from '../screens/delivery';
import Chat from '../screens/chat';

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
        screen: Guest,
        navigationOptions: {
            title: 'VISITA'
        },
    },
    Meeting: {
        screen: Meeting,
        navigationOptions: {
            title: 'CHAT FINAL'
        }
    },
    Meetings: {
        screen: Meetings,
        navigationOptions: {
            title: 'REUNIÃO ENTREVISTA'
        }
    },
    Delivery: {
        screen: Delivery,
        navigationOptions: {
            title: 'ENTREGAS'
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            title: 'CHAT'
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: '#009FE3'
        },
        headerShown: false
    }
});

export default createAppContainer(HomeStack);