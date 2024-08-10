import { Box, CircularProgress } from "@mui/material";
import { User } from "firebase/auth";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "reactfire";

interface UserContextInterface {
  fullName: string | null;
  setFullName: (val: string) => void;
  email: string | null;
  setEmail: (val: string) => void;
  profilePic: string | null;
  setProfilePic: (val: string) => void;
  accessToken: string | null;
  setAccessToken: (val: string) => void;
  setIsActiveUser: (val: boolean) => void;
  isActiveUser: boolean;
  uid: string | null;
  mobileNumber: string | null;
  setMobileNumber: (val: string | null) => void;
}

const UserContext = createContext<UserContextInterface>({
  fullName: null,
  setFullName: () => {},
  email: null,
  setEmail: () => {},
  profilePic: null,
  setProfilePic: () => {},
  accessToken: null,
  setAccessToken: () => {},
  setIsActiveUser: () => {},
  isActiveUser: false,
  uid: null,
  mobileNumber: null,
  setMobileNumber: () => {},
});

export function UserProvider({ children }: PropsWithChildren) {
  const [fullName, setFullName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [profilePic, setProfilePic] = useState<string | null>("");
  const [accessToken, setAccessToken] = useState<string | null>("");
  const [isActiveUser, setIsActiveUser] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [uid, setUID] = useState<string | null>(null);
  const [mobileNumber, setMobileNumber] = useState<string | null>(null);
  const auth = useAuth();

  function authStateChanged(user: User | null) {
    if (isLoading) {
      setIsLoading(false);
    }
    if (user) {
      setUID(user.uid);
      setFullName(user?.displayName || "");
      setEmail(user?.email || "");
      setProfilePic(user?.photoURL || "");
      setIsActiveUser(auth?.currentUser ? true : false);
      user?.getIdToken().then((token) => {
        setAccessToken(token);
      });
    } else {
      setFullName(null);
      setEmail(null);
      setProfilePic(null);
      setIsActiveUser(false);
      setAccessToken(null);
      setUID(null);
    }
  }

  useEffect(() => {
    auth?.onAuthStateChanged(authStateChanged);
  }, [auth]);
  return (
    <UserContext.Provider
      value={{
        fullName,
        setFullName,
        email,
        setEmail,
        profilePic,
        setProfilePic,
        accessToken,
        setAccessToken,
        isActiveUser,
        setIsActiveUser,
        mobileNumber,
        setMobileNumber,
        uid,
      }}
    >
      {isLoading ? (
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
}
export default function useUser() {
  return useContext(UserContext);
}
