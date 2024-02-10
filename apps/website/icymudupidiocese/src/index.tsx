import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyACnkD2FC6gXqpoMCLaD05aP-kxKLXMwK0",
  authDomain: "icymudupi-da525.firebaseapp.com",
  databaseURL: "https://icymudupi-da525-default-rtdb.firebaseio.com",
  projectId: "icymudupi-da525",
  storageBucket: "icymudupi-da525.appspot.com",
  messagingSenderId: "816096023560",
  appId: "1:816096023560:web:ce9bad6affaa20cba5adbd",
  measurementId: "G-35TGDMY5XD",
};
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
reportWebVitals();
