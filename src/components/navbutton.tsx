import Link from "next/link";
import Button from "@mui/material/Button";

type NavButtonProps = {
  route: string;
  navigationText: string;
};

function NavButton({ route, navigationText }: NavButtonProps) {
  return (
    <Link href={route} passHref>
      <Button variant="outlined" color="inherit">{navigationText}</Button>
    </Link>
  );
}

export { NavButton, NavButtonProps };
