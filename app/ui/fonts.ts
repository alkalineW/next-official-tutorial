import { Inter, Lusitana } from "next/font/google";
import FakePearl from "next/font/local";
export const fakePearl = FakePearl({ src: "./fonts/FakePearl-SemiBold.ttf" });
export const inter = Inter({ subsets: ["latin"], weight: ["200", "700"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
