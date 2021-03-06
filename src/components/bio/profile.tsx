import { Box, Typography } from "@mui/material";
import PasswordField from "./passwordfield";

export default function Profile() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom component="div">
        Hello, I'm Jeffrey
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        A full stack software engineer
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Based in Maryland
      </Typography>
      <Typography variant="body1" gutterBottom component="div" sx={{ mt: '10%'}}>
        COMING SOON...
      </Typography>
      <PasswordField />
    </Box>
  );
}
