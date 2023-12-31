import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registrationRequested } from "../../redux/silces/auth.silce";
// import { IRegistration } from "../../model";
// import { RootState } from "../../redux/silces";
import { routes } from "../../routes.constants";
import { IRegistration } from "../../model";
import { registrationTexts } from "../../languages/registration";

const Registration = () => {
  const {
    firstname,
    lastname,
    buttons,
    phoneNo,
    email,
    password,
    confirmPassword,
  } = registrationTexts;
  //  const { isLoading } = useSelector((state: RootState) => state.auth);
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const [registrationDetails, setregistrationDetails] = useState<IRegistration>(
    {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      phoneNo: "",
      confirmPassword: "",
      address: "",
    }
  );

  const handleinput = (event: any) => {
    const { name, value } = event.target;

    setregistrationDetails({ ...registrationDetails, [name]: value });
  };
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = () => {
    dispatch(registrationRequested(registrationDetails));
    // navigate("/");
  };

  const backToLoginClickHandler = () => {
    navigate(routes.LOGIN);
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
        {/*firstname form */}
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-firstname">
            {firstname.placeHolder}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-firstname"
            name={firstname.name}
            // type={showPassword ? "text" : "firstname" }
            label={firstname.label}
            onChange={handleinput}
          />
        </FormControl>

        {/* lastname form */}
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-lastname">
            {lastname.placeHolder}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-lastname"
            name={lastname.name}
            label={lastname.label}
            onChange={handleinput}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">
            {phoneNo.placeHolder}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            name={phoneNo.name}
            label={phoneNo.label}
            onChange={handleinput}
          />
        </FormControl>
        {/* email form */}
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">
            {email.placeHolder}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            name={email.name}
            label={email.label}
            onChange={handleinput}
          />
        </FormControl>

        {/* password form */}
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            {password.placeHolder}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name={password.name}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={password.label}
            onChange={handleinput}
          />
        </FormControl>

        {/* confirm password form */}
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirmpassword">
            {confirmPassword.placeHolder}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirmpassword"
            name={confirmPassword.name}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={confirmPassword.label}
            onChange={handleinput}
          />
        </FormControl>
        {/* buttons  */}
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleRegister}>
            {buttons.register}
          </Button>
          <Button variant="contained" onClick={backToLoginClickHandler}>
            {buttons.backToLogIn}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Registration;
