import Content from "../components/content";
import Image from "next/image";
import { Typography, Box } from "@mui/material";

function GetContent() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom component="div">
        COMING SOON...
      </Typography>
      <Image
        alt="shocked"
        src="/images/barbie-shocked.gif"
        layout="fixed"
        width={250}
        height={250}
      />
    </Box>
  );
}

export default function Experience() {
  return <Content ChipLabel="About My Experience" Content={GetContent()} />;
}
