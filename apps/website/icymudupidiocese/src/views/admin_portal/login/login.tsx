import React, { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { useAnalytics, useAuth } from "reactfire";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFeedback } from "../../../providers/feedback/feedback";
import LoginLayout from "../../../layouts/login_layout/login_layout";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const TextField = styled(MuiTextField)(({ theme }) => {
  return {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "transparent", // Border color when focused
      },
      "&:hover fieldset": {
        borderColor: "transparent", // Border color on hover
      },
      "& fieldset": {
        borderColor: "transparent", // Default border color
      },
      backgroundColor: "#919eab33",
    },
  };
});

interface Props {}

function Login(props: Props) {
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setErrorMsg] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { showSnackbar } = useFeedback();
  const auth = useAuth();
  const navigate = useNavigate();
  const analytics = useAnalytics();
  const [searchParams, setUrlParam] = useSearchParams();
  const {} = props;

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function _signInWithUSernameAndPassword() {}

  return (
    <LoginLayout>
      <Grid container justifyContent={"center"}>
        <Grid item lg={8} md={10} sm={12} mb={3} width="100%">
          <Box mt={8}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              textAlign={"center"}
            >
              To access the admin portal, please enter your email and password
              below
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography mt={2} textAlign={"start"}>
              Email address
            </Typography>
            <TextField
              placeholder="Enter your email address"
              fullWidth
              value={userEmail}
              sx={{ mt: 1 }}
              onChange={(e) => {
                setUserEmail(e.target.value);
                setErrorMsg({ ...error, email: "" });
              }}
              helperText={error.email}
              FormHelperTextProps={{ sx: { color: "red" } }}
            />
            <Typography mt={2} textAlign={"start"}>
              Password
            </Typography>
            <TextField
              placeholder="Enter  password"
              fullWidth
              value={password}
              sx={{ mt: 1 }}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMsg({ ...error, password: "" });
              }}
              type={showPassword ? "text" : "password"}
              helperText={error.password}
              FormHelperTextProps={{ sx: { color: "red" } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box mt={3}>
            {isLoading ? (
              <Box
                display="flex"
                flexDirection="row"
                justifyContent={"center"}
                alignItems="center"
              >
                <CircularProgress />
              </Box>
            ) : (
              <Button
                disabled={userEmail && password ? false : true}
                variant="contained"
                fullWidth
                size="large"
                onClick={_signInWithUSernameAndPassword}
              >
                Login
              </Button>
            )}
          </Box>
          <Grid item lg={12} md={12} sm={12}>
            <Grid container mt={1}>
              <Grid item lg={12} md={12} sm={12} textAlign={"end"}>
                <Button
                  variant="text"
                  sx={{ m: 0, p: 0 }}
                  onClick={() => navigate("/forgotPassword")}
                >
                  Forgetten Password?
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LoginLayout>
  );
}

export default Login;
