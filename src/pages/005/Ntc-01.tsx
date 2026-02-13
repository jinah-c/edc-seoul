import { useState } from "react";
import SubPageLayout from "../../components/layout/SubPageLayout";
import filePdf from "../../assets/images/File-pdf.svg";
import "./Ntc.css";

const Ntc01 = () => {
  // 검색 상태 관리
  const [searchType, setSearchType] = useState("title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Breadcrumb 데이터
  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "알림소식", url: "#" },
    { label: "공지사항" },
  ];

  // LNB 메뉴 데이터
  const lnbMenuItems = [
    { id: "notice", label: "공지사항", url: "/notice" },
    { id: "press", label: "보도/해명자료", url: "#" },
  ];

  // 공지사항 데이터
  const noticeData = [
    {
      id: 302,
      title: "2025년 환경분쟁조정피해구제위원회 개최(1회)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "위원회개최공고.pdf", url: "#" }],
      views: 92,
    },
    {
      id: 301,
      title: "2025년 환경분쟁조정피해구제위원회 개최(19회)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "위원회개최공고.pdf", url: "#" }],
      views: 62,
    },
    {
      id: 300,
      title: "2025년 환경분쟁조정피해구제위원회 개최(18회)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "위원회개최공고.pdf", url: "#" }],
      views: 126,
    },
    {
      id: 299,
      title: "2025년 환경분쟁조정피해구제위원회 개최(16회)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "위원회개최공고.pdf", url: "#" }],
      views: 261,
    },
    {
      id: 298,
      title: "2025년 환경분쟁조정피해구제위원회 개최(17회)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "위원회개최공고.pdf", url: "#" }],
      views: 96,
    },
    {
      id: 297,
      title: "2025년 환경분쟁조정피해구제위원회 개최(15회)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "위원회개최공고.pdf", url: "#" }],
      views: 182,
    },
    {
      id: 296,
      title: "2025년 환경분쟁조정피해구제위원회 개최(14회)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "위원회개최공고.pdf", url: "#" }],
      views: 148,
    },
    {
      id: 295,
      title: "2025년 환경분쟁조정피해구제위원회 개최(13회)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "위원회개최공고.pdf", url: "#" }],
      views: 129,
    },
    {
      id: 294,
      title: "2025년 환경분쟁조정피해구제위원회 개최(12회)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "위원회개최공고.pdf", url: "#" }],
      views: 410,
    },
    {
      id: 293,
      title:
        "환경분쟁사건(서울환조 24-3-81) 재정위원회 심문기일 출석요구서 공시송 공고",
      author: "김춘준",
      date: "2025.12.01",
      files: [{ name: "심문기일공고.pdf", url: "#" }],
      views: 217,
    },
  ];

  // 파일 다운로드 핸들러
  const handleFileDownload = (fileName: string, _fileUrl: string) => {
    console.log("파일 다운로드:", fileName);
    // TODO: 실제 파일 다운로드 로직 구현
  };

  // 검색 핸들러
  const handleSearch = () => {
    console.log("검색 타입:", searchType);
    console.log("검색어:", searchKeyword);
    // TODO: 검색 로직 구현
  };

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <SubPageLayout
      breadcrumbItems={breadcrumbItems}
      lnbTitle="알림소식"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="notice"
    >
      {/* 콘텐츠 영역 */}
      <div className="r-content-wp">
        <h1 className="page-title">공지사항</h1>

        {/* 검색창 */}
        <div className="search-deco-wp ">
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
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
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
        </div>

        {/* 페이지카운트 */}
        <div className="table-count-wp mb10">
          <div className="table-count">
            전체 <span className="text-primary">302</span>건
            <span className="div-line">|</span>
            현재페이지 <span className="text-primary">{currentPage}</span>/31
          </div>
        </div>

        {/* 표 영역 */}
        <div className="table-wp">
          <table className="tableA">
            <thead>
              <tr>
                <th className="w60 tac">번호</th>
                <th>제목</th>
                <th className="w90 tac">작성자</th>
                <th className="w100 tac">등록일</th>
                <th className="w80 tac">파일</th>
                <th className="w60 tac">조회</th>
              </tr>
            </thead>
            <tbody>
              {noticeData.map((item) => (
                <tr key={item.id}>
                  <td className="tac count">{item.id}</td>
                  <td>
                    <a href="#" className="table-link oneLine">
                      {item.title}
                    </a>
                  </td>
                  <td className="tac">{item.author}</td>
                  <td className="tac">{item.date}</td>
                  <td className="tac">
                    <div className="file-icons">
                      {item.files.map((file, index) => (
                        <button
                          key={index}
                          className="file-download-btn"
                          onClick={() =>
                            handleFileDownload(file.name, file.url)
                          }
                          title={`${file.name} 다운로드`}
                          aria-label={`${file.name} 다운로드`}
                        >
                          <img
                            src={filePdf}
                            alt="PDF 파일"
                            className="file-icon"
                          />
                        </button>
                      ))}
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
              className={`page-btn page-number ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => handlePageChange(page)}
              aria-label={`${page} 페이지`}
            >
              {page}
            </button>
          ))}
          <button
            className="page-btn page-next"
            onClick={() => handlePageChange(Math.min(31, currentPage + 1))}
            aria-label="다음 페이지"
          >
            ›
          </button>
          <button
            className="page-btn page-last"
            onClick={() => handlePageChange(31)}
            aria-label="마지막 페이지"
          >
            »
          </button>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default Ntc01;
