import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SubPageLayout from "../../components/layout/SubPageLayout";
import quickItem01 from "../../assets/images/quick-item01.png";
import quickItem02 from "../../assets/images/quick-item02.png";
import quickItem03 from "../../assets/images/quick-item03.png";
import "./Dma.css";

const Dma01 = () => {
  const navigate = useNavigate();
  // 탭 상태 관리 (기본값: "신청안내")
  const [activeTab, setActiveTab] = useState("application-guide");
  const contentRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Breadcrumb 데이터
  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "분쟁조정신청", url: "#" },
    { label: "인터넷신청" },
  ];

  // LNB 메뉴 데이터
  const lnbMenuItems = [
    { id: "application-guide", label: "신청안내", url: "#" },
    { id: "internet-application", label: "인터넷신청", url: "#" },
    { id: "visit-application", label: "방문신청", url: "#" },
    { id: "fee-calculator", label: "수수료계산기", url: "#" },
  ];

  // 탭 데이터
  const tabs = [
    { id: "application-guide", label: "신청안내" },
    { id: "writing-example", label: "작성예시" },
    { id: "apply", label: "신청하기" },
    { id: "required-documents", label: "구비서류안내" },
    { id: "inquiry", label: "신청내역조회" },
  ];

  // 빠른 이동 카드 데이터
  const quickCards = [
    {
      id: "writing-example",
      title: "작성 예시",
      titleHighlight: "예시",
      description: "인터넷 분쟁조정 신청서 작성시 필요한 구비서류를 안내합니다.",
      image: quickItem01,
      onClick: () => setActiveTab("writing-example"),
      ariaLabel: "작성 예시 탭으로 이동",
    },
    {
      id: "online-counsel",
      title: "인터넷 상담",
      titleHighlight: "상담",
      description: "궁금한 사항을 인터넷으로 상담할 수 있습니다.",
      image: quickItem02,
      onClick: () => navigate("/env/counsel"),
      ariaLabel: "인터넷 상담 페이지로 이동",
    },
    {
      id: "internet-apply",
      title: "인터넷 신청",
      titleHighlight: "신청",
      description: "인터넷 신청 통해 분쟁조정신청서를 작성하실 수 있습니다.",
      image: quickItem03,
      onClick: () => setActiveTab("apply"),
      ariaLabel: "신청하기 탭으로 이동",
    },
  ];

  // 타이틀에서 강조할 텍스트를 색칠하는 함수
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

  // 탭 키보드 네비게이션 핸들러
  const handleTabKeyDown = (e: React.KeyboardEvent, tabIndex: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveTab(tabs[tabIndex].id);
    } else if (e.key === "ArrowRight") {
      // 오른쪽 화살표: 다음 탭으로 이동
      e.preventDefault();
      if (tabIndex < tabs.length - 1) {
        setActiveTab(tabs[tabIndex + 1].id);
        // 다음 탭으로 포커스 이동
        tabRefs.current[tabIndex + 1]?.focus();
      }
    } else if (e.key === "ArrowLeft") {
      // 왼쪽 화살표: 이전 탭으로 이동
      e.preventDefault();
      if (tabIndex > 0) {
        setActiveTab(tabs[tabIndex - 1].id);
        // 이전 탭으로 포커스 이동
        tabRefs.current[tabIndex - 1]?.focus();
      }
    }
  };

  // Tab 키 전역 핸들러: 마지막 탭에서 콘텐츠로 이동
  const handleGlobalTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
      // 현재 포커스가 마지막 탭에 있을 때
      if (!e.shiftKey && currentIndex === tabs.length - 1) {
        // 다음 포커스가 탭 리스트 밖으로 나갈 때 콘텐츠로 이동
        const focusedElement = document.activeElement;
        if (focusedElement === tabRefs.current[currentIndex]) {
          e.preventDefault();
          contentRef.current?.focus();
        }
      }
    }
  };

  return (
    <SubPageLayout
      breadcrumbItems={breadcrumbItems}
      lnbTitle="분쟁조정신청"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="internet-application"
    >
      <div className="r-content-wp" onKeyDown={handleGlobalTabKeyDown}>
        {/* 페이지 제목 */}
        <h1 className="page-title">인터넷신청</h1>

        {/* 탭버튼 */}
        <ul 
          className="tabBtns dmaTab"
          role="tablist"
          aria-label="인터넷 신청 콘텐츠 탭"
        >
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
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

        {/* 탭 콘텐츠 */}
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
                  <span className="text-accent">서울특별시 관할구역 안</span>
                  에서 발생한 분쟁의 조정업무를 관장합니다.
                  <p className="indentHyphen">- <span className="text-primary">알선·조정·재정·중재(1억원 이하) 신청사건</span>알선·조정·재정·중재(1억원 이하) 신청사건 (다만,일조방해,통풍방해,조망저해로 인한 분쟁의 재정을 제외합니다.)</p>
                  <p className="indentHyphen">- 국가 또는 지방자치단체를 당사자로 하지 않는 분쟁의 조정</p>
                </li>
                <li>
                  <span className="text-accent">인터넷신청을 통해 분쟁조정신청서를 작성</span>하여, 온라인상으로 구비서류 제출 및 수수료 결재가 가능하며 또한 사건진행과정을 조회하실 수 있습니다.
                </li>
              </ul>
            </div>

            {/* 바로가기 카드 */}
            <section aria-label="빠른 이동 카드">
              <ul className="moveQuickWp">
                {quickCards.map((card) => (
                  <li 
                    key={card.id} 
                    className="cardItem"
                  >
                    <button
                      onClick={card.onClick}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          card.onClick();
                        }
                      }}
                      aria-label={card.ariaLabel}
                      className="card-button"
                      type="button"
                    >
                      <div className="card-image" aria-hidden="true">
                        <img src={card.image} alt="" />
                      </div>
                      <div className="card-content">
                        <h3 className="card-title">{highlightTitle(card.title, card.titleHighlight)}</h3>
                        <p className="card-description">{card.description}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </section>


            <h2 className="deco-title2">분쟁조정 인터넷신청 방법</h2>
            <p>신청안내 내용을 작성해주세요.</p>

            <ul className="num-list">
              <li>1. 신청인이 서울특별시 환경분쟁조정 홈페이지(http:/edc.seoul.go.kr) 인터넷신청을 통하여 접수합니다.  대표자 선정은 최대 3명까지 가능합니다. 추가, 삭제 버튼으로 대표자 선정을 추가 또는 삭제할 수 있습니다.</li>
              <li>2. 신청인은 구비서류 및 피해입증 자료등을 첨부합니다. * 신청인이 다수일 경우 신청인별 피해금액 및 대표자 선정 동의서를 첨부하셔야만 신청이 완료됩니다.</li>
              <li>3. 서울특별시 환경분쟁조정피해구제위원회의 접수 담당자는 신청한 내용을 검토 후 수수료를 신청인 문자메시지로 알려드립니다.</li>
              <li>4. 수수료 납부가 완료된 후 사건이 접수되고 담당자가 배정되며, 접수 후 아래의 순서대로 처리됩니다.</li>
            </ul>
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
            {/* 페이지 설명 BOX */}
            <div className="page-notice" role="region" aria-label="작성예시 설명">
              <ul>
                <li>
                  환경분쟁조정을 <span className="text-accent">인터넷을 통하여 신청하실 때 작성방법</span>
                  을 알려드립니다.
                </li>
              </ul>
            </div>

            <h2 className="deco-title2">작성예시</h2>
            <p>작성예시 내용을 작성해주세요.</p>
          </div>
        )}

        {/* 신청하기 */}
        {activeTab === "apply" && (
          <div 
            className="dma-content"
            id="apply-panel"
            role="tabpanel"
            aria-labelledby="apply"
            ref={contentRef}
            tabIndex={-1}
          >
            {/* 페이지 설명 BOX */}
            <div className="page-notice" role="region" aria-label="신청하기 설명">
              <ul>
                <li>
                  <span className="text-accent">서울특별시 관할구역 안</span>에서 발생한 분쟁의 
                  <span className="text-accent">알선·조정·재정·중재(조정가액 1억원이하) 신청사건 </span>
                  (다만,일조방해,통풍방해,조망저해로 인한 분쟁의 재정을 제외합니다.)
                </li>
                <li>서울특별시 관할구역 안에서 발생한 분쟁의 조정사무 중 국가 또는 지방자치단체를 당사자로 하지 않는 분쟁의 조정</li>
              </ul>
            </div>

            <h2 className="deco-title2">신청하기</h2>
            <p>신청하기 내용을 작성해주세요.</p>
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
            {/* 페이지 설명 BOX */}
            <div className="page-notice" role="region" aria-label="구비서류안내 설명">
              <ul>
                <li>인터넷을 통하여 환경분쟁조정을 신청시에 구비서류를 간편하게 제출하실 수 있습니다.</li>
                <li>환경분쟁조정을
                  <span className="text-accent">인터넷을 통하여 신청하실때 필요한 구비서류</span>
                에 대해 알려드립니다.
                </li>
              </ul>
            </div>

            <h2 className="deco-title2">구비서류안내</h2>
            <p>구비서류안내 내용을 작성해주세요.</p>
          </div>
        )}

        {/* 신청내역조회 */}
        {activeTab === "inquiry" && (
          <div 
            className="dma-content"
            id="inquiry-panel"
            role="tabpanel"
            aria-labelledby="inquiry"
            ref={contentRef}
            tabIndex={-1}
          >
            {/* 페이지 설명 BOX */}
            <div className="page-notice" role="region" aria-label="신청내역조회 설명">
              <ul>
                <li>신청하신 환경분쟁조정 <span className="text-accent">사건의 진행현황</span>을 알려드립니다.</li>
                <li>접수담당자가 신청내용 및 구비서류를 확인한 후 전자지불시스템을 이용하여 수수료 납부가 가능하며, 수수료 납부 후에 정상적으로 <span className="text-accent">사건접수</span>가 됩니다.</li>
              </ul>
            </div>

            <h2 className="deco-title2">신청내역조회</h2>
            <p>신청내역조회 내용을 작성해주세요.</p>
          </div>
        )}
      </div>
    </SubPageLayout>
  );
};

export default Dma01;
