import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0O5euoSiYqBwWKmkpz-WaO0B1cT6x0iE",
  authDomain: "react-chat-app-38519.firebaseapp.com",
  databaseURL: "https://react-chat-app-38519-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-38519",
  storageBucket: "react-chat-app-38519.appspot.com",
  messagingSenderId: "295987484214",
  appId: "1:295987484214:web:89e48a6588163310366a97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
