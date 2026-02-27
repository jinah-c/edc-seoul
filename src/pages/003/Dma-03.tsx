import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SubPageLayout from "../../components/layout/SubPageLayout";
import quickItem04 from "../../assets/images/quick-item04.png";
import quickItem05 from "../../assets/images/quick-item05.png";
import quickItem06 from "../../assets/images/quick-item06.png";
import dmaImg01 from "../../assets/images/Dma-img01.png";
import dmaImg02 from "../../assets/images/Dma-img02.png";
import dmaImg03 from "../../assets/images/Dma-img03.png";

import "./Dma.css";

const Dma03 = () => {
  const [activeTab, setActiveTab] = useState("application-guide");
  const contentRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    document.title = "방문신청 | 서울특별시 환경분쟁조정위원회";
  }, []);

  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "분쟁조정신청", url: "#" },
    { label: "방문신청" },
  ];

  const lnbMenuItems = [
    { id: "internet-application", label: "인터넷신청", url: "/dispute/internet-apply" },
    { id: "visit-application", label: "방문신청", url: "/dispute/visit-apply" },
    { id: "fee-calculator", label: "수수료계산기", url: "#" },
  ];

  const tabs = [
    { id: "application-guide", label: "신청안내" },
    { id: "writing-example", label: "작성예시" },
    { id: "required-documents", label: "구비서류안내" },
  ];

  const quickCards = [
    {
      id: "writing-example",
      title: "작성 예시",
      titleHighlight: "예시",
      description: "방문신청서 필요한 분쟁조정신청서 작성 요령을 예시와 함께 안내합니다.",
      image: quickItem04,
      onClick: () => setActiveTab("writing-example"),
      ariaLabel: "작성 예시 탭으로 이동",
    },
    {
      id: "required-documents",
      title: "구비서류 안내",
      titleHighlight: "안내",
      description: "신청서와 함께 제출해야 하는 서류를 안내합니다.",
      image: quickItem05,
      onClick: () => setActiveTab("required-documents"),
      ariaLabel: "구비서류 안내 탭으로 이동",
    },
    {
      id: "visit-counsel",
      title: "방문상담 예약",
      titleHighlight: "예약",
      description: "방문하여 상담을 원하실 경우 방문상담 예약을 신청합니다.",
      image: quickItem06,
      onClick: () => window.open("#", "_blank"),
      ariaLabel: "방문상담 예약 페이지로 이동",
    },
  ];

  const highlightTitle = (title: string, highlight: string) => {
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <em>{highlight}</em>
        {parts[1]}
      </>
    );
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, tabIndex: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (tabIndex < tabs.length - 1) {
        setActiveTab(tabs[tabIndex + 1].id);
        tabRefs.current[tabIndex + 1]?.focus();
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (tabIndex > 0) {
        setActiveTab(tabs[tabIndex - 1].id);
        tabRefs.current[tabIndex - 1]?.focus();
      }
    }
  };


  return (
    <SubPageLayout
      breadcrumbItems={breadcrumbItems}
      lnbTitle="분쟁조정신청"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="visit-application"
    >
      <div className="r-content-wp">
        <h1 className="page-title">방문신청</h1>

        {/* 탭버튼 */}
        <ul
          className="tabBtns dmaTab"
          role="tablist"
          aria-label="방문신청 콘텐츠 탭"
        >
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el; }}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleTabKeyDown(e, index)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              tabIndex={0}
            >
              <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
              {tab.label}
            </li>
          ))}
        </ul>

        {/* 신청안내 */}
        {activeTab === "application-guide" && (
          <div
            className="dma-content"
            id="application-guide-panel"
            role="tabpanel"
            aria-labelledby="application-guide"
            ref={contentRef}
            tabIndex={-1}
          >
            {/* 페이지 설명 BOX */}
            <div className="page-notice" role="region" aria-label="신청안내 설명">
              <ul>
                <li>
                  <span className="text-accent">서울특별시 관할구역 안</span>에서 발생한 분쟁의 조정업무를 관장합니다.
                  <p className="indentHyphen">
                    - <span className="text-primary">알선·조정·재정·중재(1억원 이하) 신청사건</span>
                    (다만,일조방해,통풍방해,조망저해로 인한 분쟁의 재정을 제외합니다.)
                  </p>
                  <p className="indentHyphen">
                    - 국가 또는 지방자치단체를 당사자로 하지 않는 분쟁의 조정
                  </p>
                </li>
                <li>
                  서울특별시 환경분쟁조정피해구제위원회를{" "}
                  <span className="text-accent">방문하여 신청</span>하는 방법을 안내합니다
                </li>
              </ul>
            </div>

            {/* 바로가기 카드 */}
            <section aria-label="빠른 이동 카드">
              <ul className="moveQuickWp">
                {quickCards.map((card) => (
                  <li key={card.id} className="cardItem">
                    <button
                      onClick={card.onClick}
                      aria-label={card.ariaLabel}
                      className="card-button"
                      type="button"
                    >
                      <div className="card-image" aria-hidden="true">
                        <img src={card.image} alt="" />
                      </div>
                      <div className="card-content">
                        <h3 className="card-title">
                          {highlightTitle(card.title, card.titleHighlight)}
                        </h3>
                        <p className="card-description">{card.description}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            {/* 방문신청 접수처 */}
            <div className="visit-location-section">
              <p className="visit-location-label">방문신청 접수처</p>
              <div className="visit-location-row">
                <strong className="visit-location-name">
                  서울시청 서소문청사 1동 12층 생활환경과
                </strong>
                <Link
                  to="#"
                  className="visit-location-btn"
                  aria-label="찾아오시는 길 안내 페이지로 이동"
                >
                  찾아오시는 길
                  <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* 방문신청 방법 */}
            <div className="txt-section">
              <ul className="list-con">
                <li className="num-li">
                  1. 신청인은 방문접수 → 신청서다운로드를 통해 신청서를 다운로드 받습니다.
                </li>
                <li className="num-li">
                  2. 신청인은 작성예시 및 분야별 작성예시를 참조하여 신청서를 작성합니다.
                </li>
                <li className="num-li">
                  3. 환경피해 청구액(조정가액)에 따라 수수료를 납부하고 접수합니다.
                  <p className="indentHyphen">※ 수수료는 신용카드 및 현금으로 납부가능합니다.</p>
                </li>
                <li className="num-li">
                  4. 접수 후 아래의 순서대로 처리됩니다.
                </li>
                <li className="img-li">
                  <picture className="dmaImg01">
                    <source media="(max-width: 620px)" srcSet={dmaImg03} />
                    <source media="(max-width: 1023px)" srcSet={dmaImg02} />
                    <img src={dmaImg01} alt="방문신청 처리 절차: 접수 → 조사관 조정위원 지명 → 신청인 피신청인 통보 → 조사관 예비조사 → 전문가 현장조사 → 심사보고서 작성 → 당사자 심문 → 결정" />
                  </picture>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* 작성예시 */}
        {activeTab === "writing-example" && (
          <div
            className="dma-content"
            id="writing-example-panel"
            role="tabpanel"
            aria-labelledby="writing-example"
            ref={contentRef}
            tabIndex={-1}
          >
            <div className="page-notice" role="region" aria-label="작성예시 설명">
              <ul>
                <li>
                  방문신청서 작성 시 필요한{" "}
                  <span className="text-accent">분쟁조정신청서 작성 요령</span>을
                  예시와 함께 안내합니다.
                </li>
              </ul>
            </div>
            <div className="txt-section">
              <h2 className="deco-title2">작성예시</h2>
              <p className="page-notice">준비 중입니다.</p>
            </div>
          </div>
        )}

        {/* 구비서류안내 */}
        {activeTab === "required-documents" && (
          <div
            className="dma-content"
            id="required-documents-panel"
            role="tabpanel"
            aria-labelledby="required-documents"
            ref={contentRef}
            tabIndex={-1}
          >
            <div className="page-notice" role="region" aria-label="구비서류안내 설명">
              <ul>
                <li>
                  방문신청 시{" "}
                  <span className="text-accent">신청서와 함께 제출해야 하는 서류</span>를
                  안내합니다.
                </li>
              </ul>
            </div>
            <div className="txt-section">
              <h2 className="deco-title2">구비서류안내</h2>
              <p className="page-notice">준비 중입니다.</p>
            </div>
          </div>
        )}
      </div>
    </SubPageLayout>
  );
};

export default Dma03;
