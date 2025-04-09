
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAU07IDomqS9N23yNutnxzdEl4XUFj_DnY",
    authDomain: "pushnotification-d55db.firebaseapp.com",
    projectId: "pushnotification-d55db",
    storageBucket: "pushnotification-d55db.firebasestorage.app",
    messagingSenderId: "765899505695",
    appId: "1:765899505695:web:a8c7d050eaf2dc2364952a",
    measurementId: "G-773ZT5RSLK"
});


const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = 'payload.notification.title';
    const notificationOptions = {
      body: 'payload.notification.body',
      icon: 'payload.notification.image',
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });
  