import { ReactNode } from "react";
import Masthead from "./Masthead";
import Header from "./Header";
import Footer from "./Footer";
import FloatingMenu from "./FloatingMenu";
import PageHeader from "./PageHeader";
import "./SimplePageLayout.css";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface SimplePageLayoutProps {
  children: ReactNode;
  breadcrumbItems: BreadcrumbItem[];
}

const SimplePageLayout = ({
  children,
  breadcrumbItems,
}: SimplePageLayoutProps) => {
  return (
    <div className="simple-page-layout">
      {/* 마스터헤드 */}
      <Masthead />

      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <div className="simple-page-container">
        <div className="simple-page-wrapper">
          {/* 페이지 콘텐츠 */}
          <main className="simple-page-content fade-in">
            <div className="simple-page-inner">
              {/* 페이지 헤더 (Breadcrumb + Actions) */}
              <PageHeader breadcrumbItems={breadcrumbItems} />

              {/* 페이지 본문 */}
              <div className="simple-page-body">{children}</div>
            </div>
          </main>
        </div>
      </div>

      {/* 푸터 */}
      <Footer />

      {/* 플로팅 메뉴 */}
      <FloatingMenu />
    </div>
  );
};

export default SimplePageLayout;
