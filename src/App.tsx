import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom'
import { Box, Grid } from "@mui/material";
import Navbar from "./components/navbar";
import Bio from "./components/bio";
import Experience from "./components/experience";
import Projects from "./components/projects";

function App() {
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
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              mx: "10%",
            }}
          >
            <Routes>
              <Route path="/" element={<Bio /> } />
              <Route path="bio" element={<Bio /> } />
              <Route path="experience" element={<Experience /> } />
              <Route path="projects" element={<Projects /> } />
            </Routes>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
