import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export type NavButtonProps = {
  route: string;
  navigationText: string;
};

export function NavButton({ route, navigationText }: NavButtonProps) {
  return (
    <Button variant="outlined" color="inherit" component={Link} to={route}>
      {navigationText}
    </Button>
  );
}
