import Link from "next/link";
import Button from "@mui/material/Button";

export type NavButtonProps = {
  route: string;
  navigationText: string;
};

export function NavButton({ route, navigationText }: NavButtonProps) {
  return (
    <Link href={route} passHref>
      <Button variant="outlined" color="inherit">{navigationText}</Button>
    </Link>
  );
}
