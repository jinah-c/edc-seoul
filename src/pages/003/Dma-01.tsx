import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronUp,
  faChevronDown,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import SubPageLayout from "../../components/layout/SubPageLayout";
import quickItem01 from "../../assets/images/quick-item01.png";
import quickItem02 from "../../assets/images/quick-item02.png";
import quickItem03 from "../../assets/images/quick-item03.png";
import dmaImg01 from "../../assets/images/Dma-img01.png";
import dmaImg02 from "../../assets/images/Dma-img02.png";
import dmaImg03 from "../../assets/images/Dma-img03.png";
import dmaImg04 from "../../assets/images/Dma-img04.png";
import dmaImg05 from "../../assets/images/Dma-img05.png";
import dmaImg06 from "../../assets/images/Dma-img06.png";
import exImg from "../../assets/images/ex-img.png";
import loginIcon from "../../assets/images/login-icon.png";
import "../001/login.css";

import "./Dma.css";

const Dma01 = () => {
  const navigate = useNavigate();
  // 탭 상태 관리 (기본값: "신청안내")
  const [activeTab, setActiveTab] = useState("application-guide");
  const [activeInnerTab, setActiveInnerTab] = useState("individual");
  // 아코디언 열림 상태 (STEP 1 기본 열림)
  const [openSteps, setOpenSteps] = useState<Record<string, boolean>>({
    step1: false,
    step2: false,
    step3: false,
  });
  const allOpen = Object.values(openSteps).every(Boolean);

  // 내부 탭이 변경될 때 아코디언 초기화
  useEffect(() => {
    setOpenSteps({
      step1: false,
      step2: false,
      step3: false,
    });
  }, [activeInnerTab]);

  const toggleStep = (key: string) =>
    setOpenSteps((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleAll = () => {
    const next = !allOpen;
    setOpenSteps({ step1: next, step2: next, step3: next });
  };
  const contentRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);
  const innerTabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 아코디언 이미지 에러 처리: .accordion-img-placeholder 내부 이미지만 대체
  const handleAccordionImageError = (
    e: React.SyntheticEvent<HTMLImageElement>,
  ) => {
    const img = e.currentTarget;
    const parent = img.closest(".accordion-img-placeholder");

    // .accordion-img-placeholder 내부의 이미지인 경우에만 대체 이미지 적용
    if (parent) {
      img.src = exImg;
    }
  };

  // Breadcrumb 데이터
  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "분쟁조정신청", url: "#" },
    { label: "인터넷신청" },
  ];

  // LNB 메뉴 데이터
  const lnbMenuItems = [
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

  // 작성예시 내부 탭 데이터
  const innerTabs = [
    { id: "individual", label: "신청인이 개인일 경우" },
    { id: "multi-single", label: "신청인이 다수일 경우", sub: "1가구일 경우" },
    {
      id: "multi-multi",
      label: "신청인이 다수일 경우",
      sub: "2가구 이상일 경우",
    },
  ];

  // 작성예시 내부 탭 키보드 네비게이션
  const handleInnerTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % innerTabs.length;
      setActiveInnerTab(innerTabs[next].id);
      innerTabRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + innerTabs.length) % innerTabs.length;
      setActiveInnerTab(innerTabs[prev].id);
      innerTabRefs.current[prev]?.focus();
    }
  };

  // 빠른 이동 카드 데이터
  const quickCards = [
    {
      id: "writing-example",
      title: "작성 예시",
      titleHighlight: "예시",
      description:
        "인터넷 분쟁조정 신청서 작성시 필요한 구비서류를 안내합니다.",
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
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
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
            <div
              className="page-notice"
              role="region"
              aria-label="신청안내 설명"
            >
              <ul>
                <li>
                  <span className="text-accent">서울특별시 관할구역 안</span>
                  에서 발생한 분쟁의 조정업무를 관장합니다.
                  <p className="indentHyphen">
                    -{" "}
                    <span className="text-primary">
                      알선·조정·재정·중재(1억원 이하) 신청사건
                    </span>
                    알선·조정·재정·중재(1억원 이하) 신청사건
                    (다만,일조방해,통풍방해,조망저해로 인한 분쟁의 재정을
                    제외합니다.)
                  </p>
                  <p className="indentHyphen">
                    - 국가 또는 지방자치단체를 당사자로 하지 않는 분쟁의 조정
                  </p>
                </li>
                <li>
                  <span className="text-accent">
                    인터넷신청을 통해 분쟁조정신청서를 작성
                  </span>
                  하여, 온라인상으로 구비서류 제출 및 수수료 결재가 가능하며
                  또한 사건진행과정을 조회하실 수 있습니다.
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

            <div className="txt-section">
              <h2 className="deco-title2">분쟁조정 인터넷신청 방법</h2>

              <ul className="list-con">
                <li className="num-li">
                  1. 신청인이 서울특별시 환경분쟁조정 홈페이지(
                  <a
                    href="http://edc.seoul.go.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="서울특별시 환경분쟁조정 홈페이지 (새 창으로 열림)"
                  >
                    http://edc.seoul.go.kr
                  </a>
                  ) 인터넷신청을 통하여 접수합니다. 대표자 선정은 최대 3명까지
                  가능합니다. 추가, 삭제 버튼으로 대표자 선정을 추가 또는 삭제할
                  수 있습니다.
                </li>
                <li className="num-li">
                  2. 신청인은 구비서류 및 피해입증 자료등을 첨부합니다. *
                  신청인이 다수일 경우 신청인별 피해금액 및 대표자 선정 동의서를
                  첨부하셔야만 신청이 완료됩니다.
                </li>
                <li className="num-li">
                  3. 서울특별시 환경분쟁조정피해구제위원회의 접수 담당자는
                  신청한 내용을 검토 후 수수료를 신청인 문자메시지로
                  알려드립니다.
                </li>
                <li className="num-li">
                  4. 수수료 납부가 완료된 후 사건이 접수되고 담당자가 배정되며,
                  접수 후 아래의 순서대로 처리됩니다.
                </li>
                <li className="img-li">
                  <picture className="dmaImg01">
                    <source media="(max-width: 620px)" srcSet={dmaImg03} />
                    <source media="(max-width: 1023px)" srcSet={dmaImg02} />
                    <img src={dmaImg01} alt="분쟁조정 인터넷신청 방법" />
                  </picture>
                </li>
                <li className="num-li">
                  5. 서울특별시 환경분쟁조정피해구제위원회는 신청인에게 결정문을
                  송달하며, 서울특별시 전자민원 서비스를 통하여 접수확인서를
                  발급받을수 있습니다.
                </li>

                <li className="img-li">
                  <picture className="dmaImg01">
                    <source media="(max-width: 620px)" srcSet={dmaImg06} />
                    <source media="(max-width: 1023px)" srcSet={dmaImg05} />
                    <img src={dmaImg04} alt="분쟁조정 인터넷신청 방법" />
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
            {/* 페이지 설명 BOX */}
            <div
              className="page-notice"
              role="region"
              aria-label="작성예시 설명"
            >
              <ul>
                <li>
                  환경분쟁조정을{" "}
                  <span className="text-accent">
                    인터넷을 통하여 신청하실 때 작성방법
                  </span>
                  을 알려드립니다.
                </li>
              </ul>
            </div>

            {/* 작성예시 내부 탭 */}
            <div className="inner-tab-section">
              <div
                className="inner-tab-list"
                role="tablist"
                aria-label="작성예시 항목"
              >
                {innerTabs.map((itab, idx) => (
                  <button
                    key={itab.id}
                    ref={(el) => {
                      innerTabRefs.current[idx] = el;
                    }}
                    id={`inner-tab-${itab.id}`}
                    className={`inner-tab-btn${activeInnerTab === itab.id ? " active" : ""}`}
                    role="tab"
                    aria-selected={activeInnerTab === itab.id}
                    aria-controls={`inner-panel-${itab.id}`}
                    tabIndex={activeInnerTab === itab.id ? 0 : -1}
                    onClick={() => setActiveInnerTab(itab.id)}
                    onKeyDown={(e) => handleInnerTabKeyDown(e, idx)}
                    type="button"
                  >
                    {itab.label}
                    {itab.sub && (
                      <span className="inner-tab-sub">({itab.sub})</span>
                    )}
                  </button>
                ))}
              </div>

              {/* 신청인이 개인일 경우 */}
              {activeInnerTab === "individual" && (
                <div
                  id="inner-panel-individual"
                  role="tabpanel"
                  aria-labelledby="inner-tab-individual"
                  className="inner-tab-panel"
                >
                  {/* 전체 열기/닫기 버튼 */}
                  <div className="accordion-toolbar">
                    <button
                      type="button"
                      className="accordion-toggle-all"
                      onClick={toggleAll}
                      aria-expanded={allOpen}
                    >
                      전체 STEP {allOpen ? "닫기" : "열기"}
                      <FontAwesomeIcon
                        icon={allOpen ? faMinus : faPlus}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* STEP 1 */}
                  <div
                    className={`accordion-item${openSteps.step1 ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => toggleStep("step1")}
                      aria-expanded={openSteps.step1}
                      aria-controls="acc-panel-step1"
                      id="acc-btn-step1"
                    >
                      <span className="accordion-step-label">
                        <em>*</em> STEP 1
                      </span>
                      <span className="accordion-title">신청인 정보</span>
                      <span className="faq-toggle-btn" aria-hidden="true">
                        <FontAwesomeIcon
                          icon={openSteps.step1 ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </button>
                    <div
                      id="acc-panel-step1"
                      role="region"
                      aria-labelledby="acc-btn-step1"
                      className={`accordion-body${openSteps.step1 ? " open" : ""}`}
                    >
                      <p className="">
                        신청인 정보 입력 예시화면입니다.{" "}
                        <span className="text-accent stxt">
                          * 표시는 필수 입력사항 입니다.
                        </span>
                      </p>
                      <div
                        className="accordion-img-placeholder"
                        aria-label="예시 이미지 영역"
                      >
                        <img
                          src=""
                          alt="예시 이미지"
                          onError={handleAccordionImageError}
                        />
                      </div>
                      <ol className="accordion-list">
                        <li>
                          <strong className="ltxt">
                            1. 개인정보 수집에 동의
                          </strong>
                          <p>개인정보 수집에 동의의 체크를 합니다.</p>
                        </li>
                        <li>
                          <strong className="ltxt">2. 신청인 구분 선택</strong>
                          <p>
                            신청인이 개인일 경우와 1가구 또는 3가구 이상일
                            경우에 따라 신청인 구분을 선택합니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">3. 신청인</strong>
                          <p>신청인 필수 정보를 입력합니다.</p>
                          <p>
                            → 신청인 이름, 주민등록번호, 휴대전화 또는 유선전화,
                            주소
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">4. 버튼</strong>
                          <p>
                            다음 → 다음버튼으로 피신청인/피해내역 입력페이지로
                            이동합니다.
                          </p>
                          <p>취소 → 취소버튼으로 사건신청을 취소합니다.</p>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div
                    className={`accordion-item${openSteps.step2 ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => toggleStep("step2")}
                      aria-expanded={openSteps.step2}
                      aria-controls="acc-panel-step2"
                      id="acc-btn-step2"
                    >
                      <span className="accordion-step-label">
                        <em>*</em> STEP 2
                      </span>
                      <span className="accordion-title">
                        피신청인 / 피해내역
                      </span>
                      <span className="faq-toggle-btn" aria-hidden="true">
                        <FontAwesomeIcon
                          icon={openSteps.step2 ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </button>
                    <div
                      id="acc-panel-step2"
                      role="region"
                      aria-labelledby="acc-btn-step2"
                      className={`accordion-body${openSteps.step2 ? " open" : ""}`}
                    >
                      <p className="">
                        피신청인 / 피해내역 예시화면입니다.{" "}
                        <span className="text-accent stxt">
                          * 표시는 필수 입력사항 입니다.
                        </span>
                      </p>
                      <div
                        className="accordion-img-placeholder"
                        aria-label="예시 이미지 영역"
                      >
                        <img
                          src=""
                          alt="예시 이미지"
                          onError={handleAccordionImageError}
                        />
                      </div>
                      <ol className="accordion-list">
                        <li>
                          <strong className="ltxt">1. 피신청인 명단</strong>
                          <p>
                            추가,삭제버튼 : 추가,삭제 버튼으로 피신청인을
                            추가/삭제할 수 있습니다.
                          </p>
                          <p>신청인 필수 정보를 입력합니다.</p>
                          <p>
                            - 사업자의 경우(상호(명칭), 주소), 개인의 경우(성명,
                            주소)
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">2. 세부 피해내역</strong>
                          <p>
                            추가,삭제버튼 : 추가,삭제 버튼으로 세부피해내역을
                            추가/삭제할 수 있습니다.
                          </p>
                          <p>
                            합계 :피해내역과 금액을 입력하면 피해(예상)금액이
                            자동 합산됩니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">3. 예상수수료 계산</strong>
                          <p>
                            피해내역 및 피해액을 입력후에 예상수수료 버튼을
                            클릭하면 피해(예상)금액을 기준하여 예상수수료를
                            검색합니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">4. 버튼</strong>
                          <p>
                            다음 → 다음버튼으로 피신청인/피해내역 입력페이지로
                            이동합니다.
                          </p>
                          <p>취소 → 취소버튼으로 사건신청을 취소합니다.</p>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div
                    className={`accordion-item${openSteps.step3 ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => toggleStep("step3")}
                      aria-expanded={openSteps.step3}
                      aria-controls="acc-panel-step3"
                      id="acc-btn-step3"
                    >
                      <span className="accordion-step-label">
                        <em>*</em> STEP 3
                      </span>
                      <span className="accordion-title">분쟁내용 입력</span>
                      <span className="faq-toggle-btn" aria-hidden="true">
                        <FontAwesomeIcon
                          icon={openSteps.step3 ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </button>
                    <div
                      id="acc-panel-step3"
                      role="region"
                      aria-labelledby="acc-btn-step3"
                      className={`accordion-body${openSteps.step3 ? " open" : ""}`}
                    >
                      <p className="">
                        분쟁조정 입력 예시화면입니다.{" "}
                        <span className="text-accent stxt">
                          * 표시는 필수 입력사항 입니다.
                        </span>
                      </p>
                      <div
                        className="accordion-img-placeholder"
                        aria-label="예시 이미지 영역"
                      >
                        <img
                          src=""
                          alt="예시 이미지"
                          onError={handleAccordionImageError}
                        />
                      </div>
                      <ol className="accordion-list">
                        <li>
                          <strong className="ltxt">
                            1. 환경피해발생 일시/장소
                          </strong>
                          <p>: 피해발생장소의 주소를 기재합니다.</p>
                        </li>

                        <li>
                          <strong className="ltxt">
                            2. 조정을 구하는 취지 및 이유
                          </strong>
                          <p>
                            피해입은 사실의 피해원인 및 대상을 기재하고
                            상세내역을 6하 원칙에 의해 가능한 구체적으로
                            작성합니다.
                          </p>
                          <p>
                            신청인의 PC에서 작성하여 저장된(txt, doc, hwp, pdf
                            등의 문서파일 또는 스캔파일) 파일을 첨부합니다.
                          </p>
                        </li>

                        <li>
                          <strong className="ltxt">3. 분쟁의 경과</strong>
                          <p>피해과정을 시기별로 작성합니다.</p>
                          <p>
                            신청인의 PC에서 작성하여 저장된(txt, doc, hwp, pdf
                            등의 문서파일 또는 스캔파일) 파일을 첨부합니다.
                          </p>
                        </li>

                        <li>
                          <strong className="ltxt">4. 구비서류첨부</strong>
                          <p>
                            추가삭제버튼 : 추가, 삭제 버튼으로 구비서류를
                            추가/삭제할 수 있습니다.
                          </p>
                          <p>
                            구비서류 안내에 따라 필요한 구비서류의 종류를
                            선택하고 파일을 첨부합니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">4. 버튼</strong>
                          <p>
                            다음 → 다음버튼으로 피신청인/피해내역 입력페이지로
                            이동합니다.
                          </p>
                          <p>취소 → 취소버튼으로 사건신청을 취소합니다.</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              {/* 신청인이 다수일 경우 (1가구) */}
              {activeInnerTab === "multi-single" && (
                <div
                  id="inner-panel-multi-single"
                  role="tabpanel"
                  aria-labelledby="inner-tab-multi-single"
                  className="inner-tab-panel"
                >
                  {/* 전체 열기/닫기 버튼 */}
                  <div className="accordion-toolbar">
                    <button
                      type="button"
                      className="accordion-toggle-all"
                      onClick={toggleAll}
                      aria-expanded={allOpen}
                    >
                      전체 STEP {allOpen ? "닫기" : "열기"}
                      <FontAwesomeIcon
                        icon={allOpen ? faMinus : faPlus}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* STEP 1 */}
                  <div
                    className={`accordion-item${openSteps.step1 ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => toggleStep("step1")}
                      aria-expanded={openSteps.step1}
                      aria-controls="acc-panel-step1"
                      id="acc-btn-step1"
                    >
                      <span className="accordion-step-label">
                        <em>*</em> STEP 1
                      </span>
                      <span className="accordion-title">신청인 정보</span>
                      <span className="faq-toggle-btn" aria-hidden="true">
                        <FontAwesomeIcon
                          icon={openSteps.step1 ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </button>
                    <div
                      id="acc-panel-step1"
                      role="region"
                      aria-labelledby="acc-btn-step1"
                      className={`accordion-body${openSteps.step1 ? " open" : ""}`}
                    >
                      <p className="">
                        신청인 정보 입력 예시화면입니다.{" "}
                        <span className="text-accent stxt">
                          * 표시는 필수 입력사항 입니다.
                        </span>
                      </p>
                      <div
                        className="accordion-img-placeholder"
                        aria-label="예시 이미지 영역"
                      >
                        <img
                          src=""
                          alt="예시 이미지"
                          onError={handleAccordionImageError}
                        />
                      </div>
                      <ol className="accordion-list">
                        <li>
                          <strong className="ltxt">
                            1. 개인정보 수집에 동의
                          </strong>
                          <p>개인정보 수집에 동의의 체크를 합니다.</p>
                        </li>
                        <li>
                          <strong className="ltxt">2. 신청인 구분 선택</strong>
                          <p>
                            신청인이 개인일 경우와 1가구 또는 2가구 이상일
                            경우에 따라 신청인 구분을 선택합니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">3. 신청인</strong>
                          <p>신청인 필수 정보를 입력합니다.</p>
                          <p>
                            → 신청인 이름, 주민등록번호, 휴대전화 또는 유선전화,
                            주소
                          </p>
                          <p>신청인 수는 2인 이상을 입력합니다.</p>
                        </li>
                        <li>
                          <strong className="ltxt">4. 버튼</strong>
                          <p>
                            다음 → 다음버튼으로 피신청인/피해내역 입력페이지로
                            이동합니다.
                          </p>
                          <p>취소 → 취소버튼으로 사건신청을 취소합니다.</p>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div
                    className={`accordion-item${openSteps.step2 ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => toggleStep("step2")}
                      aria-expanded={openSteps.step2}
                      aria-controls="acc-panel-step2"
                      id="acc-btn-step2"
                    >
                      <span className="accordion-step-label">
                        <em>*</em> STEP 2
                      </span>
                      <span className="accordion-title">
                        피신청인 / 피해내역
                      </span>
                      <span className="faq-toggle-btn" aria-hidden="true">
                        <FontAwesomeIcon
                          icon={openSteps.step2 ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </button>
                    <div
                      id="acc-panel-step2"
                      role="region"
                      aria-labelledby="acc-btn-step2"
                      className={`accordion-body${openSteps.step2 ? " open" : ""}`}
                    >
                      <p className="">
                        피신청인 / 피해내역 예시화면입니다.{" "}
                        <span className="text-accent stxt">
                          * 표시는 필수 입력사항 입니다.
                        </span>
                      </p>
                      <div
                        className="accordion-img-placeholder"
                        aria-label="예시 이미지 영역"
                      >
                        <img
                          src=""
                          alt="예시 이미지"
                          onError={handleAccordionImageError}
                        />
                      </div>
                      <ol className="accordion-list">
                        <li>
                          <strong className="ltxt">1. 피신청인 명단</strong>
                          <p>
                            추가,삭제버튼 : 추가,삭제 버튼으로 피신청인을
                            추가/삭제할 수 있습니다.
                          </p>
                          <p>신청인 필수 정보를 입력합니다.</p>
                          <p>
                            - 사업자의 경우(상호(명칭), 주소), 개인의 경우(성명,
                            주소)
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">2. 세부 피해내역</strong>
                          <p>
                            추가,삭제버튼 : 추가,삭제 버튼으로 세부피해내역을
                            추가/삭제할 수 있습니다.
                          </p>
                          <p>
                            합계 :피해내역과 금액을 입력하면 피해(예상)금액이
                            자동 합산됩니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">3. 예상수수료 계산</strong>
                          <p>
                            피해내역 및 피해액을 입력후에 예상수수료 버튼을
                            클릭하면 피해(예상)금액을 기준하여 예상수수료를
                            검색합니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">4. 버튼</strong>
                          <p>이전 → 이전버튼으로 이전페이지로 이동합니다.</p>
                          <p>
                            다음 → 다음버튼으로 피신청인/피해내역 입력페이지로
                            이동합니다.
                          </p>
                          <p>취소 → 취소버튼으로 사건신청을 취소합니다.</p>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div
                    className={`accordion-item${openSteps.step3 ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => toggleStep("step3")}
                      aria-expanded={openSteps.step3}
                      aria-controls="acc-panel-step3"
                      id="acc-btn-step3"
                    >
                      <span className="accordion-step-label">
                        <em>*</em> STEP 3
                      </span>
                      <span className="accordion-title">분쟁내용 입력</span>
                      <span className="faq-toggle-btn" aria-hidden="true">
                        <FontAwesomeIcon
                          icon={openSteps.step3 ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </button>
                    <div
                      id="acc-panel-step3"
                      role="region"
                      aria-labelledby="acc-btn-step3"
                      className={`accordion-body${openSteps.step3 ? " open" : ""}`}
                    >
                      <p className="">
                        분쟁조정 입력 예시화면입니다.{" "}
                        <span className="text-accent stxt">
                          * 표시는 필수 입력사항 입니다.
                        </span>
                      </p>
                      <div
                        className="accordion-img-placeholder"
                        aria-label="예시 이미지 영역"
                      >
                        <img
                          src=""
                          alt="예시 이미지"
                          onError={handleAccordionImageError}
                        />
                      </div>
                      <ol className="accordion-list">
                        <li>
                          <strong className="ltxt">
                            1. 환경피해발생 일시/장소
                          </strong>
                          <p>: 피해발생장소의 주소를 기재합니다.</p>
                        </li>

                        <li>
                          <strong className="ltxt">
                            2. 조정을 구하는 취지 및 이유
                          </strong>
                          <p>
                            피해입은 사실의 피해원인 및 대상을 기재하고
                            상세내역을 6하 원칙에 의해 가능한 구체적으로
                            작성합니다.
                          </p>
                          <p>
                            신청인의 PC에서 작성하여 저장된(txt, doc, hwp, pdf
                            등의 문서파일 또는 스캔파일) 파일을 첨부합니다.
                          </p>
                        </li>

                        <li>
                          <strong className="ltxt">3. 분쟁의 경과</strong>
                          <p>피해과정을 시기별로 작성합니다.</p>
                          <p>
                            신청인의 PC에서 작성하여 저장된(txt, doc, hwp, pdf
                            등의 문서파일 또는 스캔파일) 파일을 첨부합니다.
                          </p>
                        </li>

                        <li>
                          <strong className="ltxt">4. 구비서류첨부</strong>
                          <p>
                            신청인이 다수일 경우는 '신청현황 및 피해내역'의
                            서식을 다운로드 받아 작성 후 신청인들의 성명·주소 및
                            주민등록번호를 기재하고 서명·날인 또는 지장을 찍은
                            후에 스캔을 받아 첨부파일로 등록해주세요.
                          </p>
                          <p>
                            (*스캔이 원활하지 않을 경우 우편송달 또는 팩스로
                            체크 후 보내주시기바랍니다.)
                          </p>
                          <p>
                            추가,삭제버튼 : 추가,삭제 버튼으로 구비서류를
                            추가/삭제할 수 있습니다.
                          </p>
                          <p>
                            구비서류 안내에 따라 필요한 구비서류의 종류를
                            선택하고 파일을 첨부합니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">4. 버튼</strong>
                          <p>이전 → 이전버튼으로 이전페이지로 이동합니다.</p>
                          <p>
                            저장 → 저장버튼으로 입력한 사건정보를 저장합니다.
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              {/* 신청인이 다수일 경우 (2가구 이상) */}
              {activeInnerTab === "multi-multi" && (
                <div
                  id="inner-panel-multi-multi"
                  role="tabpanel"
                  aria-labelledby="inner-tab-multi-multi"
                  className="inner-tab-panel"
                >
                  {/* 전체 열기/닫기 버튼 */}
                  <div className="accordion-toolbar">
                    <button
                      type="button"
                      className="accordion-toggle-all"
                      onClick={toggleAll}
                      aria-expanded={allOpen}
                    >
                      전체 STEP {allOpen ? "닫기" : "열기"}
                      <FontAwesomeIcon
                        icon={allOpen ? faMinus : faPlus}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* STEP 1 */}
                  <div
                    className={`accordion-item${openSteps.step1 ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => toggleStep("step1")}
                      aria-expanded={openSteps.step1}
                      aria-controls="acc-panel-step1"
                      id="acc-btn-step1"
                    >
                      <span className="accordion-step-label">
                        <em>*</em> STEP 1
                      </span>
                      <span className="accordion-title">신청인 정보</span>
                      <span className="faq-toggle-btn" aria-hidden="true">
                        <FontAwesomeIcon
                          icon={openSteps.step1 ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </button>
                    <div
                      id="acc-panel-step1"
                      role="region"
                      aria-labelledby="acc-btn-step1"
                      className={`accordion-body${openSteps.step1 ? " open" : ""}`}
                    >
                      <p className="">
                        신청인 정보 입력 예시화면입니다.{" "}
                        <span className="text-accent stxt">
                          * 표시는 필수 입력사항 입니다.
                        </span>
                      </p>
                      <div
                        className="accordion-img-placeholder"
                        aria-label="예시 이미지 영역"
                      >
                        <img
                          src=""
                          alt="예시 이미지"
                          onError={handleAccordionImageError}
                        />
                      </div>
                      <ol className="accordion-list">
                        <li>
                          <strong className="ltxt">
                            1. 개인정보 수집에 동의
                          </strong>
                          <p>개인정보 수집에 동의의 체크를 합니다.</p>
                        </li>
                        <li>
                          <strong className="ltxt">2. 신청인 구분 선택</strong>
                          <p>
                            신청인이 개인일 경우와 1가구 또는 2가구 이상일
                            경우에 따라 신청인 구분을 선택합니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">3. 신청인</strong>
                          <p>신청인 필수 정보를 입력합니다.</p>
                          <p>
                            - 신청인 이름, 주민등록번호, 휴대전화 또는 유선전화,
                            주소.
                          </p>
                          <p>신청인 수는 2인 이상을 입력합니다.</p>
                        </li>
                        <li>
                          <strong className="ltxt">4. 버튼</strong>
                          <p>
                            다음 → 다음버튼으로 피신청인/피해내역 입력페이지로
                            이동합니다.
                          </p>
                          <p>취소 → 취소버튼으로 사건신청을 취소합니다.</p>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div
                    className={`accordion-item${openSteps.step2 ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => toggleStep("step2")}
                      aria-expanded={openSteps.step2}
                      aria-controls="acc-panel-step2"
                      id="acc-btn-step2"
                    >
                      <span className="accordion-step-label">
                        <em>*</em> STEP 2
                      </span>
                      <span className="accordion-title">
                        피신청인 / 피해내역
                      </span>
                      <span className="faq-toggle-btn" aria-hidden="true">
                        <FontAwesomeIcon
                          icon={openSteps.step2 ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </button>
                    <div
                      id="acc-panel-step2"
                      role="region"
                      aria-labelledby="acc-btn-step2"
                      className={`accordion-body${openSteps.step2 ? " open" : ""}`}
                    >
                      <p className="">
                        피신청인 / 피해내역 예시화면입니다.{" "}
                        <span className="text-accent stxt">
                          * 표시는 필수 입력사항 입니다.
                        </span>
                      </p>
                      <div
                        className="accordion-img-placeholder"
                        aria-label="예시 이미지 영역"
                      >
                        <img
                          src=""
                          alt="예시 이미지"
                          onError={handleAccordionImageError}
                        />
                      </div>
                      <ol className="accordion-list">
                        <li>
                          <strong className="ltxt">
                            1. 선정대표자, 대리인 및 대표자 명단
                          </strong>
                          <p>
                            추가,삭제버튼 : 추가,삭제 버튼으로 피신청인을
                            추가/삭제할 수 있습니다.
                          </p>
                          <p>
                            - 첫번째 대표자는 이전페이지의 신청인과 동일한
                            정보로 설정됩니다. 대표자 필수정보를 입력합니다.
                          </p>
                          <p>- 상호(명칭), 주민등록번호, 유선전화</p>
                        </li>
                        <li>
                          <strong className="ltxt">2. 피신청인 명단</strong>
                          <p>
                            추가,삭제버튼 : 추가,삭제 버튼으로 피신청인을
                            추가/삭제할 수 있습니다. 신청인 필수 정보를
                            입력합니다.
                          </p>
                          <p>
                            - 사업자의 경우(상호(명칭), 주소), 개인의 경우(성명,
                            주소)
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">3. 세부 피해내역</strong>
                          <p>
                            추가,삭제버튼 : 추가,삭제 버튼으로 세부피해내역을
                            추가/삭제할 수 있습니다.
                          </p>
                          <p>
                            합계 :피해내역과 금액을 입력하면 피해(예상)금액이
                            자동 합산됩니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">4. 예상수수료 계산</strong>
                          <p>
                            피해내역 및 피해액을 입력후에 예상수수료 버튼을
                            클릭하면 피해(예상)금액을 기준하여 예상수수료를
                            검색합니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">5. 버튼</strong>
                          <p>
                            다음 → 다음버튼으로 피신청인/피해내역 입력페이지로
                            이동합니다.
                          </p>
                          <p>취소 → 취소버튼으로 사건신청을 취소합니다.</p>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div
                    className={`accordion-item${openSteps.step3 ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-header"
                      onClick={() => toggleStep("step3")}
                      aria-expanded={openSteps.step3}
                      aria-controls="acc-panel-step3"
                      id="acc-btn-step3"
                    >
                      <span className="accordion-step-label">
                        <em>*</em> STEP 3
                      </span>
                      <span className="accordion-title">분쟁내용 입력</span>
                      <span className="faq-toggle-btn" aria-hidden="true">
                        <FontAwesomeIcon
                          icon={openSteps.step3 ? faChevronUp : faChevronDown}
                        />
                      </span>
                    </button>
                    <div
                      id="acc-panel-step3"
                      role="region"
                      aria-labelledby="acc-btn-step3"
                      className={`accordion-body${openSteps.step3 ? " open" : ""}`}
                    >
                      <p className="">
                        피신청인 / 피해내역 예시화면입니다.{" "}
                        <span className="text-accent stxt">
                          * 표시는 필수 입력사항 입니다.
                        </span>
                      </p>
                      <div
                        className="accordion-img-placeholder"
                        aria-label="예시 이미지 영역"
                      >
                        <img
                          src=""
                          alt="예시 이미지"
                          onError={handleAccordionImageError}
                        />
                      </div>
                      <ol className="accordion-list">
                        <li>
                          <strong className="ltxt">
                            1. 환경피해발생 일시/장소
                          </strong>
                          <p>: 피해발생장소의 주소를 기재합니다.</p>
                        </li>

                        <li>
                          <strong className="ltxt">
                            2. 조정을 구하는 취지 및 이유
                          </strong>
                          <p>
                            피해입은 사실의 피해원인 및 대상을 기재하고
                            상세내역을 6하 원칙에 의해 가능한 구체적으로
                            작성합니다.
                          </p>
                          <p>
                            신청인의 PC에서 작성하여 저장된(txt, doc, hwp, pdf
                            등의 문서파일 또는 스캔파일) 파일을 첨부합니다.
                          </p>
                        </li>

                        <li>
                          <strong className="ltxt">3. 분쟁의 경과</strong>
                          <p>피해과정을 시기별로 작성합니다.</p>
                          <p>
                            신청인의 PC에서 작성하여 저장된(txt, doc, hwp, pdf
                            등의 문서파일 또는 스캔파일) 파일을 첨부합니다.
                          </p>
                        </li>

                        <li>
                          <strong className="ltxt">4. 구비서류첨부</strong>
                          <p>
                            신청인이 다수일 경우는 '신청인·대표자 선정동의 및
                            개인별 피해내역'의 서식을 다운로드 받아 작성 후
                            신청인들의 성명·주소 및 주민등록번호를 기재하고
                            서명·날인 또는 지장을 찍은 후에 스캔을 받아
                            첨부파일로 등록해주세요.
                          </p>
                          <p>
                            (*스캔이 원활하지 않을 경우 우편송달 또는 팩스로
                            체크 후 보내주시기바랍니다.)
                          </p>
                          <p>
                            추가,삭제버튼 : 추가,삭제 버튼으로 구비서류를
                            추가/삭제할 수 있습니다.
                          </p>
                          <p>
                            구비서류 안내에 따라 필요한 구비서류의 종류를
                            선택하고 파일을 첨부합니다.
                          </p>
                        </li>
                        <li>
                          <strong className="ltxt">5. 버튼</strong>
                          <p>이전 → 이전버튼으로 이전페이지로 이동합니다.</p>
                          <p>
                            저장 → 저장버튼으로 입력한 사건정보를 저장합니다.
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
            <div
              className="page-notice"
              role="region"
              aria-label="신청하기 설명"
            >
              <ul>
                <li>
                  <span className="text-accent">서울특별시 관할구역 안</span>
                  에서 발생한 분쟁의
                  <span className="text-accent">
                    알선·조정·재정·중재(조정가액 1억원이하) 신청사건{" "}
                  </span>
                  (다만,일조방해,통풍방해,조망저해로 인한 분쟁의 재정을
                  제외합니다.)
                </li>
                <li>
                  서울특별시 관할구역 안에서 발생한 분쟁의 조정사무 중 국가 또는
                  지방자치단체를 당사자로 하지 않는 분쟁의 조정
                </li>
              </ul>
            </div>

            {/* 신청하기 > 본인인증로그인 */}
            <div className="login-page-container">
              <div className="login-page-wrapper">
                <h1 className="page-title center">본인인증 로그인</h1>

                <div className="login-page-content">
                  <div className="login-page-icon-wrapper">
                    <img
                      src={loginIcon}
                      alt="로그인"
                      className="login-page-icon"
                    />
                  </div>

                  <p className="text-description login">
                    비밀번호 본인확인 후에 분쟁조정신청,
                    <br />
                    인터넷상담 및 방문상담예약을 이용하실 수 있습니다.
                  </p>

                  <button className="btn btn-primary btn-lg">
                    휴대폰 본인확인
                  </button>
                </div>
              </div>
            </div>

            {/* 신청하기 > 로그인 완료 시 신청하기 페이지 */}

            <section className="txt-section">
              <p className="deco-text1">
                환경분쟁 신청방법에는 알선신청, 조정신청, 재정신청이 있으며,
                국가기관 또는 지방자치단체(시.군.구)가 피신청인인 경우에는
                중앙환경분쟁조정위원회로 신청하여야 합니다.
              </p>
              <p className="deco-text1">
                이 밖에 피신청인을 대상으로 하는 알선신청, 조정신청 및
                재정신청(피해배상 신청금액이 1억원 이하)은 해당지역
                지방환경분쟁조정위원회로 신청하여야 합니다.
              </p>
            </section>

            {/* 신청종류 */}
            <section className="application-types-section">
              <ul className="application-types-list">
                <li className="application-type-card">
                  <a href="#" className="card-link">
                    <div className="card-header">
                      <h3 className="mtit">
                        알선신청
                        <span className="card-subtitle">(斡旋)</span>
                      </h3>
                    </div>
                    <div className="card-body">
                      <p className="card-description">
                        비교적 간단한 피해분쟁 사건으로 당사자의 자리를 주선하여
                        분쟁당사자간의 합의를 유도하는 절차입니다.
                      </p>
                      <div className="card-period">
                        <i className="calendar-icon" aria-hidden="true"></i>
                        <p>처리기간</p>
                        <p className="text-primary">2개월</p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <i className="arrow-icon" aria-hidden="true"></i>
                      <span className="card-action-text">신청하기</span>
                    </div>
                  </a>
                </li>

                <li className="application-type-card">
                  <a href="#" className="card-link">
                    <div className="card-header">
                      <h3 className="mtit">
                        조정신청
                        <span className="card-subtitle">(調停)</span>
                      </h3>
                    </div>
                    <div className="card-body">
                      <p className="card-description">
                        알선으로 해결이 곤란한 피해분쟁 사건으로 사실조사 후
                        조정위원회가 조정안을 작성하여 당사자간의 합의를 수락
                        권고하는 절차입니다.
                      </p>
                      <div className="card-period">
                        <i className="calendar-icon" aria-hidden="true"></i>
                        <p>처리기간</p>
                        <p className="text-primary">7개월</p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <i className="arrow-icon" aria-hidden="true"></i>
                      <span className="card-action-text">신청하기</span>
                    </div>
                  </a>
                </li>

                <li className="application-type-card">
                  <a href="#" className="card-link">
                    <div className="card-header">
                      <h3 className="mtit">
                        재정신청
                        <span className="card-subtitle">(裁定)</span>
                      </h3>
                    </div>
                    <div className="card-body">
                      <p className="card-description">
                        환경피해에 대한 손해배상 사건으로 사실조사 후
                        재정위원회가 피해 배상액을 결정하는 준사법적 절차입니다.
                      </p>
                      <div className="card-period">
                        <i className="calendar-icon" aria-hidden="true"></i>
                        <p>처리기간</p>
                        <p className="text-primary">7개월</p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <i className="arrow-icon" aria-hidden="true"></i>
                      <span className="card-action-text">신청하기</span>
                    </div>
                  </a>
                </li>

                <li className="application-type-card">
                  <a href="#" className="card-link">
                    <div className="card-header">
                      <h3 className="mtit">
                        중재신청
                        <span className="card-subtitle">(仲裁)</span>
                      </h3>
                    </div>
                    <div className="card-body">
                      <p className="card-description">
                        당사자간의 합의로 분쟁을 법원의 재판이 아닌 중재위원회의
                        판정에 의하여 해결하는 절차입니다.
                      </p>
                      <div className="card-period">
                        <i className="calendar-icon" aria-hidden="true"></i>
                        <p>처리기간</p>
                        <p className="text-primary">5개월</p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <i className="arrow-icon" aria-hidden="true"></i>
                      <span className="card-action-text">신청하기</span>
                    </div>
                  </a>
                </li>
              </ul>
            </section>
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
            <div
              className="page-notice"
              role="region"
              aria-label="구비서류안내 설명"
            >
              <ul>
                <li>
                  인터넷을 통하여 환경분쟁조정을 신청시에 구비서류를 간편하게
                  제출하실 수 있습니다.
                </li>
                <li>
                  환경분쟁조정을
                  <span className="text-accent">
                    인터넷을 통하여 신청하실때 필요한 구비서류
                  </span>
                  에 대해 알려드립니다.
                </li>
              </ul>
            </div>

            <section className="txt-section">
              <ul className="txt-list-group">
                <li className="ltxt">
                  1. 환경분쟁조정 신청 개인별 피해금액 및 대표자 선정 동의서 1부
                </li>
                <li className="idt-txt">
                  - 신청인이 다수인인 경우로서
                  <br />
                  1. 개인별 피해 금액 기술,
                  <br />
                  2.선정대표자가 본인들의 의사를 대변하는 것에 대한 동의서 제출
                  <br />
                </li>
                <li className="idt-txt">
                  - 개인별로 서명날인(20세 미만의 미성년자는 법정대리인 대리
                  서명)
                </li>

                <li className="ltxt">2. 피해의 내용 진술서 1부</li>
                <li className="idt-txt">
                  "환경분쟁조정신청서" 안에 있는 피해의 내용 별지 작성
                </li>

                <li className="ltxt">3. 분쟁의 경과 1부</li>
                <li className="idt-txt">
                  "환경분쟁조정신청서" 안에 있는 분쟁의 경과 별지 작성
                </li>

                <li className="ltxt">4. 기타 피해입증 등 참고자료</li>
                <li className="idt-txt">추가 자료가 있는 경우 작성</li>

                <table className="tableB brown">
                  <tbody>
                    <tr>
                      <th>정신적 피해의 경우 </th>
                      <td>
                        <ul className="txt-list-group">
                          <li className="ltxt text-bg-brown">
                            정신적 피해의 경우
                          </li>
                          <li>
                            - 피해발생 장소가 거주지일 경우 주민등록등본 또는
                            초본 1부
                          </li>
                          <li>
                            - 피해발생 장소가 사업장일 경우 사업자등록증 사본
                            1부
                          </li>
                          <li>
                            - 피해사업장에서 근무중인 자는 재직증명서 1부{" "}
                            <span className="text-accent">
                              ※ 정신적 피해 보상요구는 세입자도 신청이 가능
                            </span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>물질적 건강피해의 경우</th>
                      <td>
                        {" "}
                        <ul className="txt-list-group">
                          {/* 건물피해의 경우 */}
                          <li className="ltxt text-bg-brown">
                            건물피해의 경우(건물소유자만 신청가능)
                          </li>
                          <li>- 건축물 관리대장 또는 등기부등본</li>
                          <li>- 공사원가 계산서 (견적서)</li>
                          <li>- 피해사진</li>
                          <li>
                            - 건물피해현황 조사서 (
                            <a
                              href="(https://edc.seoul.go.kr/index.do?nMenuCode=19)"
                              target="_blank"
                              className="link-txt"
                              title="새창으로 열림"
                            >
                              https://edc.seoul.go.kr/index.do?nMenuCode=19
                            </a>
                            )
                          </li>
                          {/* 영업피해의경우 */}
                          <li className="ltxt text-bg-brown">
                            영업피해의 경우
                          </li>
                          <li>- 사업자 등록증 사본</li>
                          <li>- 영업판매실적 (최근 3년간)</li>
                          <li>- 부가가치세 과세표준 증명 (관할세무소발행)</li>
                          {/* 인체건강피해일경우 */}
                          <li className="ltxt text-bg-brown">
                            인체 건강 피해일 경우
                          </li>
                          <li>- 전문의사의 건강진단 및 소견서</li>
                          <li>- 피해자의 진료비 내역</li>
                          <li>- 기타 참고자료</li>
                          {/* 층간소음 피해의 경우 */}
                          <li className="ltxt text-bg-brown">
                            층간소음 피해의 경우
                          </li>
                          <li>- 바닥충격음 측정치 (전문기관)</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ul>
            </section>
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
            <div
              className="page-notice"
              role="region"
              aria-label="신청내역조회 설명"
            >
              <ul>
                <li>
                  신청하신 환경분쟁조정{" "}
                  <span className="text-accent">사건의 진행현황</span>을
                  알려드립니다.
                </li>
                <li>
                  접수담당자가 신청내용 및 구비서류를 확인한 후 전자지불시스템을
                  이용하여 수수료 납부가 가능하며, 수수료 납부 후에 정상적으로{" "}
                  <span className="text-accent">사건접수</span>가 됩니다.
                </li>
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
