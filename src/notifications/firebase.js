
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyAU07IDomqS9N23yNutnxzdEl4XUFj_DnY",
  authDomain: "pushnotification-d55db.firebaseapp.com",
  projectId: "pushnotification-d55db",
  storageBucket: "pushnotification-d55db.firebasestorage.app",
  messagingSenderId: "765899505695",
  appId: "1:765899505695:web:a8c7d050eaf2dc2364952a",
  measurementId: "G-773ZT5RSLK"
};


const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);


export const generateToken = async () => {
    try {
      const permission = await Notification.requestPermission();
      console.log("Notification Permission:", permission);
  
      if (permission !== "granted") {
        throw new Error("Notification permission not granted.");
      }
  
      const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      console.log("✅ Service Worker Registered:", registration);
  
      const token = await getToken(getMessaging(), {
        vapidKey: "BKEwkjHmK0Nnb3I-N2z7DD8bcK0I1vHaLATSeqzYqebDuDGqNPZ64pUdIYEyH0ERvIMBS2e2le2Bht86WQpSAIc",
        serviceWorkerRegistration: registration,
      });
  
      console.log("🎉 FCM Token:", token);
    } catch (err) {
      console.error("🔥 Token Generation Failed:", err);
    }
  };
  