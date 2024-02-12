import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = () => {
    // window?.signOutChannel?.postMessage(JSON.stringify({ event: "asd", message: "SIGN_OUT" }));
    window.webkit?.signOutChannel.postMessage({ event: "SIGN_OUT", message: "asd" });
  };

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <button>컨텐츠 페이지</button>

        <button onClick={handleClick}>메세지 보내기</button>
      </main>
    </>
  );
}
