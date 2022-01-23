import Image from "next/image";

export default function Profile() {
  return (
    <Image
      src="/images/headshot.jpg"
      height={144}
      width={144}
      alt="Jeffrey Siu profile image"
    />
  );
}
