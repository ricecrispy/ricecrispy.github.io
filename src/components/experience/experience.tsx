import Content from "../common/content";
import { Typography, Box } from "@mui/material";

function GetContent() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom component="div">
        COMING SOON...
      </Typography>
      <img
        alt="shocked"
        src="https://c.tenor.com/wXyvmX1gAy0AAAAC/omg-barbie.gif"
        loading="lazy"
      />
    </Box>
  );
}

export default function Experience() {
  return <Content ChipLabel="About My Experience" Content={GetContent()} />;
}
