import { Anek_Devanagari, Poppins } from "next/font/google";


export const anek_Devanagari = Anek_Devanagari({
  subsets: ["latin"],
  variable: "--anek_devanagari",
})


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})