import { Box, Divider, Chip, Grid } from "@mui/material";

type ContentProps = {
    ChipLabel: string,
    Content: JSX.Element
}

export default function Content({ChipLabel, Content}: ContentProps) {
  return (
    <Box
      sx={{
        mt: "2%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider>
            <Chip label={ChipLabel}></Chip>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          {Content}
        </Grid>
      </Grid>
    </Box>
  );
}
