import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Button,
  Stack,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authRequested } from "../../redux/silces/auth.silce";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes.constants";
import { logInTexts } from "../../languages/login";

const Login = () => {
  const { username, password } = logInTexts;
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleRegistrationButtonClick = () => {
    navigate(routes.REGISTRATION);
  };
  const handleLogIn = (e: any) => {
    e.preventDefault();
    dispatch(authRequested({ userName: "sayan", passWord: "sayan" }));
    navigate(routes.DASHBOARD);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack spacing={2} direction="column">
        {/* username form */}
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-username">
            {username.placeHolder}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-username"
            type={"text"}
            label={username.key}
          />
        </FormControl>

        {/* password form */}
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            {password.placeHolder}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={password.key}
          />
        </FormControl>

        <Stack
          spacing={2}
          direction="row"
          display="flex"
          justifyContent="space-between"
        >
          <Button variant="contained" onClick={handleLogIn}>
            Login
          </Button>
          <Button variant="contained" onClick={handleRegistrationButtonClick}>
            Signup
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
