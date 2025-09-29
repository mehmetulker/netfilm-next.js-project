import "@/style/reset.css";
import "@/style/global.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Netfilm - Watch Movies Online",
  description:
    "Watch Netfilm masterpieces, new releases and favorite movies from all genres online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
