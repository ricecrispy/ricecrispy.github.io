import Layout from "../components/layout";
import Bio from "./bio";
import type { ReactElement } from "react";

export default function Home() {
  return <Bio />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
