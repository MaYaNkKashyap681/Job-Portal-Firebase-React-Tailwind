importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyAz-rqafv4SPC_dvod2EV9X3cc87khaEJ8',
  authDomain: 'jobprotal-b4f19.firebaseapp.com',
  projectId: 'jobprotal-b4f19',
  storageBucket: 'jobprotal-b4f19.appspot.com',
  messagingSenderId: '992597647839',
  appId: '1:992597647839:web:9be3e120ace417ea7d646a',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
