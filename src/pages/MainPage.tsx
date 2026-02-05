import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Masthead from "../components/layout/Masthead";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingMenu from "../components/layout/FloatingMenu";
import Partners from "../components/sections/Partners";
import FAQ from "../components/sections/FAQ";
import Cases from "../components/sections/Cases";
import Notices from "../components/sections/Notices";
import QuickMenu from "../components/sections/QuickMenu";
import Search from "../components/sections/Search";
import MainVisual from "../components/sections/MainVisual";

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="main-page">
      {/* 마스터헤드 */}
      <Masthead />

      {/* 헤더 (GNB 포함) */}
      <Header />

      <main className="fade-in">
        <MainVisual />
        <Search />
        <QuickMenu />
        <Notices />
        <Cases />
        <FAQ />
        <Partners />
      </main>

      <Footer />

      {/* 플로팅 메뉴 */}
      <FloatingMenu />
    </div>
  );
};

export default MainPage;
