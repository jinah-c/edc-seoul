import { ReactNode } from "react";
import Masthead from "./Masthead";
import Header from "./Header";
import Footer from "./Footer";
import FloatingMenu from "./FloatingMenu";
import Lnb from "./Lnb";
import PageHeader from "./PageHeader";
import "./SubPageLayout.css";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface LnbMenuItem {
  id: string;
  label: string;
  url: string;
}

interface SubPageLayoutProps {
  children: ReactNode;
  breadcrumbItems: BreadcrumbItem[];
  lnbTitle: string;
  lnbMenuItems: LnbMenuItem[];
  activeLnbId?: string;
}

const SubPageLayout = ({
  children,
  breadcrumbItems,
  lnbTitle,
  lnbMenuItems,
  activeLnbId,
}: SubPageLayoutProps) => {
  return (
    <div className="subpage-layout">
      {/* 마스터헤드 */}
      <Masthead />

      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <div className="subpage-container">
        <div className="subpage-wrapper">
          {/* LNB (왼쪽 네비게이션) */}
          <Lnb
            title={lnbTitle}
            menuItems={lnbMenuItems}
            activeId={activeLnbId}
          />

          {/* 페이지 콘텐츠 */}
          <main className="subpage-content fade-in">
            <div className="subpage-inner">
              {/* 페이지 헤더 (Breadcrumb + Actions) */}
              <PageHeader breadcrumbItems={breadcrumbItems} />

              {/* 페이지 본문 */}
              <div className="subpage-body">{children}</div>
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

export default SubPageLayout;
