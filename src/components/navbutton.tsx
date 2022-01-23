import Link from 'next/link';
import Button from '@mui/material/Button';

type NavButtonProps = {
    route: string,
    navigationText: string,
}

export default function NavButton({ route, navigationText }: NavButtonProps) {
    return (
    <Link href={route} passHref>
    <Button variant="outlined">
      {navigationText}
    </Button>
  </Link>)
}