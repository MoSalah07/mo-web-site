import HireMe from "../../components/HireMe/HireMe";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import StaticBar from "../../components/staticBar/StaticBar";
import TransitionProvider from "../../components/transitionPage/TransitionProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoSalah-WebSite",
  description: "Generated by Mohamed Salah",
  manifest: "/manifest.webmanifest",
  icons: { apple: "/icon.png" },
  themeColor: "#333",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-landing main">
          <div className="overlay" />
          <section className="relative z-50 section-layout">
            <Nav />
            <StaticBar />
            <HireMe />
            {children}
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
