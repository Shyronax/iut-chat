import "@/styles/globals.scss";
import { UnifrakturMaguntia } from "next/font/google";
import next from "next";

const fraktur = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={fraktur.className}>
      <Component {...pageProps} />
    </div>
  );
}
