import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./providers/theme";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import {
  AnalyticsProvider,
  FirestoreProvider,
  useFirebaseApp,
  useInitPerformance,
} from "reactfire";
import { getFirestore } from "firebase/firestore";
import FirebaseAuthProvider from "./firebase_auth/firebase_auth_provider";
import LoginLayout from "./layouts/login_layout/login_layout";
import { UserProvider } from "./providers/user_provider/user_provider";
import FeedbackProvide from "./providers/feedback/feedback";
import { getAnalytics } from "firebase/analytics";

function App() {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  // const analytics = useAnalytics();
  const analytics = getAnalytics(app);

  useInitPerformance(async (firebaseApp) => {
    const { getPerformance } = await import("firebase/performance");
    return getPerformance(firebaseApp);
  });
  return (
    <FeedbackProvide>
      <ThemeProvider theme={theme}>
        <AnalyticsProvider sdk={analytics}>
          <FirebaseAuthProvider>
            <FirestoreProvider sdk={firestore}>
              <UserProvider>
                <RouterProvider router={routes} />
              </UserProvider>
            </FirestoreProvider>
          </FirebaseAuthProvider>
        </AnalyticsProvider>
      </ThemeProvider>
    </FeedbackProvide>
  );
}

export default App;
