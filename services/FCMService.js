import messaging from '@react-native-firebase/messaging'
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class FCMService {
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister)
    this.createNotificationListeners(onRegister, onNotification, onOpenNotification)
  }

  registerAppWithFCM = async() => {
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true)
    }
  }

  checkPermission = (onRegister) => {
    messaging().hasPermission()
    .then(enabled => {
      if (enabled) {
        this.getToken(onRegister)
      } else {
        this.requestPermission(onRegister)
      }
    }).catch(error => {
      console.log("[FCMService] Permission rejected: ", error)
    })
  }

  getToken = (onRegister) => {
    messaging().getToken()
    .then(async (fcmToken) => {
      if (fcmToken) {
        await AsyncStorage.setItem('@fcm-token', fcmToken)
        onRegister(fcmToken)
      } else {
        console.log("[FCMService] User does not have a device token")
      }
    }).catch(error => {
      console.log("[FCMService] getToken rejected: ", error)
    })
  }

  requestPermission = (onRegister) => {
    messaging().requestPermission()
    .then(() => {
      this.getToken(onRegister)
    }).catch(error => {
      console.log("[FCMService] Request permission rejected: ", error)
    })
  }

  deleteToken = () => {
    console.log("[FCMService] Delete token")
    messaging().deleteToken()
    .catch(error => {
      console.log("[FCMService] Delete token error: ", error)
    })
  }

  createNotificationListeners = (onRegister, onNotification, onOpenNotification) => {
    messaging()
    .onNotificationOpenedApp(remoteMessage => {
      console.log("[FCMService] onNotificationOpenedApp Notification caused app to open from background state: ", remoteMessage)
      if (remoteMessage) {
        const notification = remoteMessage.notification
        onOpenNotification(notification)
      }
    });

    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      console.log("[FCMService] getInitialNotification Notification caused app to open from quit state: ", remoteMessage)

      if (remoteMessage) {
        const notification = remoteMessage.notification
        onOpenNotification(notification)
      }
    });

    this.messageListener = messaging().onMessage(async remoteMessage => {
      console.log("[FCMService] A new FCM message arrived!", remoteMessage);
      if (remoteMessage) {
        let notification = remoteMessage.notification
        onNotification(notification)
      }
    });

    messaging().onTokenRefresh(fcmToken => {
      console.log("[FCMService] New token refresh: ", fcmToken)
      onRegister(fcmToken)
    })
  }

  unRegister = () => {
    this.messageListener()
  }
}

export const fcmService = new FCMService()