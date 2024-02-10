import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./providers/theme";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { FirestoreProvider, useFirebaseApp } from "reactfire";
import { getFirestore } from "firebase/firestore";
import FirebaseAuthProvider from "./firebase_auth/firebase_auth_provider";

function App() {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  return (
    <ThemeProvider theme={theme}>
      <FirebaseAuthProvider>
        <FirestoreProvider sdk={firestore}>
          <RouterProvider router={routes} />
        </FirestoreProvider>
      </FirebaseAuthProvider>
    </ThemeProvider>
  );
}

export default App;
