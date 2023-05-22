import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Landing from "@/components/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Landing />
    </div>
  );
}
