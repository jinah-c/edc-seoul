import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SubPageLayout from "../../components/layout/SubPageLayout";
import filePdf from "../../assets/images/File-pdf.svg";
import "./Env.css";
import "../003/Dma.css";

const categoryTabs = [
  { id: "all", label: "전체" },
  { id: "construction", label: "공사장" },
  { id: "floor-noise", label: "층간소음" },
  { id: "air-pollution", label: "대기오염" },
  { id: "etc", label: "기타" },
];

interface CaseItem {
  id: number;
  category: string;
  title: string;
  date: string;
  views: number;
}

const caseData: CaseItem[] = [
  { id: 301, category: "공사장", title: "교회 신축공사 소음, 진동으로인한 정신적, 건축물 피해에...", date: "2025.12.01", views: 92 },
  { id: 300, category: "층간소음", title: "공동주택 층간소음으로 인한 정신적 피해에 대해 4,000...", date: "2025.12.01", views: 62 },
  { id: 299, category: "층간소음", title: "공동주택 층간소음으로 인한 정신적 피해에 대해 4,000...", date: "2025.12.01", views: 126 },
  { id: 298, category: "층간소음", title: "공동주택 층간소음으로 인한 정신적 피해에 대해 10,000...", date: "2025.12.01", views: 261 },
  { id: 297, category: "공사장", title: "건축물 신축공사장 소음, 진동, 분진으로 인한 정신적 피...", date: "2025.12.01", views: 96 },
  { id: 295, category: "공사장", title: "광역철도 공사 진동으로 인한 건축물 피해에 대해 5,000...", date: "2025.12.01", views: 182 },
  { id: 294, category: "공사장", title: "도시철도 공사 소음, 진동, 분진으로 인한 정신적, 건축...", date: "2025.12.01", views: 148 },
  { id: 293, category: "기타", title: "동일건물 사업장 시설의 소음, 진동으로 인한 정신적 피...", date: "2025.12.01", views: 129 },
  { id: 292, category: "기타", title: "아파트 단지 내 상가 악취로 인한 정신적 피해에 대해 99,...", date: "2025.12.01", views: 410 },
  { id: 291, category: "공사장", title: "건축물 철거 공사 소음, 진동, 분진으로 인한 정신적 피해...", date: "2025.12.01", views: 217 },
];

const Env02 = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchType, setSearchType] = useState("title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    document.title = "분쟁조정사례 | 서울특별시 환경분쟁조정위원회";
  }, []);

  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "환경분쟁조정안내", url: "#" },
    { label: "분쟁조정사례" },
  ];

  const lnbMenuItems = [
    { id: "info", label: "제도안내", url: "/env/info" },
    { id: "cases", label: "분쟁조정사례", url: "/env/cases" },
    { id: "faq", label: "조정신청 FAQ", url: "#" },
    { id: "online-counsel", label: "인터넷상담", url: "#" },
    { id: "visit-counsel", label: "방문상담예약", url: "#" },
  ];

  const handleSearch = () => {
    console.log("검색:", searchType, searchKeyword);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFileDownload = (id: number) => {
    console.log("파일 다운로드:", id);
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % categoryTabs.length;
      setActiveCategory(categoryTabs[next].id);
      tabRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + categoryTabs.length) % categoryTabs.length;
      setActiveCategory(categoryTabs[prev].id);
      tabRefs.current[prev]?.focus();
    }
  };

  return (
    <SubPageLayout
      breadcrumbItems={breadcrumbItems}
      lnbTitle="환경분쟁조정안내"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="cases"
    >
      <div className="r-content-wp">
        <h1 className="page-title">분쟁조정사례</h1>

        {/* 페이지 안내 */}
        <div className="page-notice" role="region" aria-label="분쟁조정사례 안내">
          <ul>
            <li>
              서울특별시 환경분쟁조정피해구제위원회가 수행한{" "}
              <span className="text-accent">환경분쟁조정사례</span>를 알려드립니다.
            </li>
            <li>
              조정신청을 하시기 전에{" "}
              <span className="text-accent">비슷한 사례를 검색</span>하여
              참고하시기 바랍니다.
            </li>
          </ul>
        </div>

        {/* 카테고리 탭 */}
        <div className="inner-tab-section">
          <div
            className="inner-tab-list envTab"
            role="tablist"
            aria-label="분쟁조정사례 분류"
          >
            {categoryTabs.map((tab, idx) => (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[idx] = el; }}
                className={`inner-tab-btn ${activeCategory === tab.id ? "active" : ""}`}
                role="tab"
                aria-selected={activeCategory === tab.id}
                tabIndex={0}
                onClick={() => { setActiveCategory(tab.id); setCurrentPage(1); }}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 검색 + 페이지 카운트 */}
        <div className="table-top-wp">
          <div className="table-search-wp">
            <select
              className="table-search-select"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              aria-label="검색 범위 선택"
            >
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="all">제목+내용</option>
            </select>
            <input
              type="text"
              className="table-search-input"
              placeholder="제목, 내용을 검색해주세요."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              aria-label="검색어 입력"
            />
            <button
              className="btn btn-secondary table-search-btn"
              onClick={handleSearch}
              aria-label="검색"
            >
              검색
            </button>
          </div>

          <div className="table-count-wp">
            전체 <span className="text-primary">294</span>건
            <span className="div-line">|</span>
            현재페이지 <span className="text-primary">{currentPage}</span>/30
          </div>
        </div>

        {/* 테이블 */}
        <div className="table-wp">
          <table className="tableA">
            <thead>
              <tr>
                <th scope="col" className="w60 tac">번호</th>
                <th scope="col" className="w90 tac">분류</th>
                <th scope="col">제목</th>
                <th scope="col" className="w100 tac">등록일</th>
                <th scope="col" className="w80 tac">파일</th>
                <th scope="col" className="w60 tac">조회</th>
              </tr>
            </thead>
            <tbody>
              {caseData.map((item) => (
                <tr key={item.id}>
                  <td className="tac count">{item.id}</td>
                  <td className="tac">{item.category}</td>
                  <td>
                    <Link to="/env/cases/detail" className="table-link oneLine">
                      {item.title}
                    </Link>
                  </td>
                  <td className="tac">{item.date}</td>
                  <td className="tac">
                    <div className="file-icons">
                      <button
                        className="file-download-btn"
                        onClick={() => handleFileDownload(item.id)}
                        title={`사례 ${item.id} PDF 다운로드`}
                        aria-label={`사례 ${item.id} PDF 파일 다운로드`}
                      >
                        <img src={filePdf} alt="PDF 파일" className="file-icon" />
                      </button>
                    </div>
                  </td>
                  <td className="tac">{item.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 */}
        <div className="pagination-wp">
          <button
            className="page-btn page-first"
            onClick={() => handlePageChange(1)}
            aria-label="첫 페이지"
          >
            «
          </button>
          <button
            className="page-btn page-prev"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            aria-label="이전 페이지"
          >
            ‹
          </button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <button
              key={page}
              className={`page-btn page-number ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
              aria-label={`${page} 페이지`}
            >
              {page}
            </button>
          ))}
          <button
            className="page-btn page-next"
            onClick={() => handlePageChange(Math.min(30, currentPage + 1))}
            aria-label="다음 페이지"
          >
            ›
          </button>
          <button
            className="page-btn page-last"
            onClick={() => handlePageChange(30)}
            aria-label="마지막 페이지"
          >
            »
          </button>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default Env02;
