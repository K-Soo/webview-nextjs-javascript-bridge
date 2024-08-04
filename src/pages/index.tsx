import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useWebView from "@/hooks/useWebView";
import { styled } from "styled-components";
import useAppRouter from "@/hooks/useAppRouter";

export default function Home() {
  const router = useAppRouter();
  const { isWebView, device } = useWebView();
  const [isSwift, setIsSwift] = useState(false);

  const handleClick = () => {
    // window.webkit.messageHandlers.signOutChannel.postMessage({ event: "SIGN_OUT", message: "asd" });
    window.webkit?.messageHandlers.IOSbridge.postMessage(JSON.stringify({ age: "3" }));
  };

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
      </Head>

      <Main>
        <button onClick={() => router.push("/content")}>컨텐츠 페이지</button>
        <button onClick={() => window.open("https://www.example.com", "_blank")}>새창</button>

        <Box>
          <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer">
            네이버로 이동
          </a>
          <a href="http://www.prefinc.com/html/main/main" target="_blank" rel="noopener noreferrer">
            프래프
          </a>
        </Box>
        {isWebView && <div>ref swift 입니다.</div>}
        <div>{device}</div>

        <button onClick={handleClick}>메세지 보내기</button>
      </Main>
    </>
  );
}

const Box = styled.div`
  display: flex;
  a {
    margin-right: 20px;
  }
`;

const Main = styled.main`
  border: 1px solid red;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;
