import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Component : 현재 페이지 역할을 할 컴포넌트
// pageProps : 페이지에 전달된 props들 
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <header>글로벌 헤더</header>
    <Component {...pageProps} />
  </>;
}
