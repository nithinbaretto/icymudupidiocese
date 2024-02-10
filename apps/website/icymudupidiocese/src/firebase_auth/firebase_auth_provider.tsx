import { Box } from "@mui/material";
import { getAuth } from "firebase/auth";
import React, { PropsWithChildren } from "react";
import { AuthProvider, useFirebaseApp } from "reactfire";

export default function FirebaseAuthProvider({ children }: PropsWithChildren) {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
}
