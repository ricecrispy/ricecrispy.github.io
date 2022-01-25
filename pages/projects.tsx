import Content from "../components/content";
import {Box, Typography, Link } from "@mui/material"
import Image from 'next/image';

function GetContent() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom component="div">
        Please visit my github to see all the things I attempt to build over the weekends.
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        <Link href="https://github.com/ricecrispy" color="inherit" target="_blank">
          {/* <Image alt="gh-logo" src="/images/gh-logo.png" layout="fixed" width={100} height={100}/> */}
          G I T H U B
        </Link>
      </Typography>
    </Box>
  );
}

export default function Project() {
  return <Content ChipLabel="About My Projects" Content={GetContent()} />;
}
