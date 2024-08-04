// import '@/styles/globals.css'
import useWebView from "@/hooks/useWebView";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
