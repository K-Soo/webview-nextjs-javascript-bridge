import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = () => {
    if (window?.webkit) {
      window.webkit.messageHandlers.signOutChannel.postMessage({ event: "SIGN_OUT", message: "asd" });
    }
  };

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <button>컨텐츠 페이지</button>

        <button onClick={handleClick}>메세지 보내기</button>
      </main>
    </>
  );
}
