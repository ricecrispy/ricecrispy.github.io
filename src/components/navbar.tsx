import { Divider, Grid, Chip, Stack } from "@mui/material";
import NavButton from "./navbutton";

export default function NavBar() {
  const bioText = "About Me";
  const experienceText = "About My Experience";
  const projectText = "About My Projects";

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack
          spacing={2}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <NavButton route="/bio" navigationText={bioText} />
          <NavButton route="/experience" navigationText={experienceText} />
          <NavButton route="/projects" navigationText={projectText} />
        </Stack>
      </Grid>
    </Grid>
  );
}
