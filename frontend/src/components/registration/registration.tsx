import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registrationRequested } from "../../redux/silces/auth.silce";
import { IRegistration } from "../../model";

const Registration = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [registrationDetails, setregistrationDetails] = useState<any>({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    phoneNo: "",
    confirmpassword: "",
    address: "",
  });

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

  return (
    <Stack spacing={2} direction="column">
      {/*firstname form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-firstname">
          firstname
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-firstname"
          name="firstname"
          // type={showPassword ? "text" : "firstname" }
          label="firstname"
          onChange={handleinput}
        />
      </FormControl>

      {/* lastname form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-lastname">lastname</InputLabel>
        <OutlinedInput
          id="outlined-adornment-lastname"
          name="lastname"
          label="lastname"
          onChange={handleinput}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-email">Phone</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          name="phoneNo"
          label="phoneNo"
          onChange={handleinput}
        />
      </FormControl>
      {/* email form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-email">email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          name="email"
          label="email"
          onChange={handleinput}
        />
      </FormControl>

      {/* password form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
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
          label="Password"
          onChange={handleinput}
        />
      </FormControl>

      {/* confirm password form */}
      <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-confirmpassword">
          confirm password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-confirmpassword"
          name="confirmpassword"
          type={showPassword ? "text" : "confirmpassword"}
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
          label="confirmpassword"
          onChange={handleinput}
        />
      </FormControl>
      {/* buttons  */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleRegister}>
          REGISTER
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleRegister();
          }}
        >
          BACK TO LOGIN
        </Button>
      </Stack>
    </Stack>
  );
};

export default Registration;
