import { Box, Snackbar, SnackbarContent } from "@mui/material";
import React, {
  useContext,
  useState,
  createContext,
  FC,
  ReactNode,
} from "react";

interface LayoutProps {
  children: ReactNode;
}
interface SnackbarContextType {
  showSnackbar: (title: string) => void;
}
const FeedbackContext = createContext<SnackbarContextType | undefined>(
  undefined
);

const FeedbackProvide: FC<LayoutProps> = ({ children }) => {
  const [showSnackbarMsg, setShowSnackbar] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const handleClose = () => {
    setShowSnackbar(false);
  };

  const showSnackbar = (title: string) => {
    setTitle(title);
    setShowSnackbar(true);
  };

  return (
    <FeedbackContext.Provider value={{ showSnackbar }}>
      {children}
      <Box display={"flex"}>
        <Snackbar
          open={showSnackbarMsg}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <SnackbarContent
            message={title}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1B001B",
            }}
          />
        </Snackbar>
      </Box>
    </FeedbackContext.Provider>
  );
};

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
}

export default FeedbackProvide;
