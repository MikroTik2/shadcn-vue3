import { createApp } from 'vue';
import { initializeApp } from "firebase/app";

import App from '@/App.vue';
import router from '@/router/index';

import '@/assets/index.css';

const firebaseConfig = {
     apiKey: "AIzaSyD3dS5xeamf444SCY18Ogw6CTimrjYNp30",
     authDomain: "shadcn-dashboard.firebaseapp.com",
     projectId: "shadcn-dashboard",
     storageBucket: "shadcn-dashboard.appspot.com",
     messagingSenderId: "929471421089",
     appId: "1:929471421089:web:6a84411153afc80517eee0",
     measurementId: "G-5YD1RNXC73"
};

initializeApp(firebaseConfig);
createApp(App)

.use(router)

.mount('#app')
