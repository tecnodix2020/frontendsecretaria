/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react';
import { fcmService } from './services/FCMService';
import { localNotificationService } from './services/LocalNotificationService';
import Navigator from './routes/homeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './services/api';

export default function App() {
  useEffect(() => {
    fcmService.registerAppWithFCM()
    fcmService.register(onRegister, onNotification, onOpenNotification)
    localNotificationService.configure(onOpenNotification)

    async function onRegister(token) {
      await AsyncStorage.setItem('@fcm_token', token)
      let totemUser = await api.get(`/users/c64c3a05-41c9-460d-8254-c80216195b97`)
      console.log(totemUser.data)

      totemUser.data.appToken = token
      console.log('Novo usuário: ', totemUser.data)
      let updatedUser = await api.put(`/users/c64c3a05-41c9-460d-8254-c80216195b97`, totemUser.data);
      console.log(updatedUser)
    }

    function onNotification(notify) {
      console.log("[App] onNotification: ", notify)
      const options = {
        soundName: 'default',
        playSound: true
      }
      localNotificationService.showNotification(0, notify.title, notify.body, notify, options)          
    }

    function onOpenNotification(notify) {
      console.log("[App] onOpenNotification: ", notify)
      // Realizar update da tela de chats
    }

    return () => {
      console.log("[App] unRegister")
      fcmService.unRegister()
      localNotificationService.unRegister()
    }
  }, []);
  return (
      <Navigator />
  );
}
