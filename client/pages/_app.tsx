import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const digital = localFont({
  src: "../public/fonts/Digital7-rg1mL.ttf",
  variable: "--font-digital",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${digital.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
