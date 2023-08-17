import { Box, Container, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#f3a617", height: "100vh" }}>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "rgba(0, 0, 0, 0.5)",
              height: "50vh",
              borderRadius: "15px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "32px",
                textAlign: "center",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Login Dulu Bang!
            </Typography>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="With sx"
                  variant="standard"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
