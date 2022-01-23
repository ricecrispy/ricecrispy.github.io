import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Profile from "./profile";
import Navbar from "./navbar";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              mx: "10%",
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
