import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      This is our fuckin awsome home page
      <Button
        onClick={() => {
          navigate("/login");
        }}
        variant="contained"
      >
        Logout
      </Button>
    </Box>
  );
};

export default Homepage;
