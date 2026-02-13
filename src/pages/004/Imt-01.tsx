import { useState } from "react";
import SubPageLayout from "../../components/layout/SubPageLayout";
import filePdf from "../../assets/images/File-pdf.svg";
import "./Imt.css";

const Imt01 = () => {
  // 검색 상태 관리
  const [searchType, setSearchType] = useState("title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Breadcrumb 데이터
  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "정보자료", url: "#" },
    { label: "관련법령" },
  ];

  // LNB 메뉴 데이터
  const lnbMenuItems = [
    { id: "law", label: "관련법령", url: "/info/law" },
    { id: "statistics", label: "통계자료", url: "#" },
  ];

  // 테이블 데이터
  const lawData = [
    {
      id: 10,
      title: "인공조명에 의한 빛공해 방지법",
      author: "한승현",
      date: "2025.12.01",
      files: [
        { name: "빛공해방지법.pdf", url: "#" },
        { name: "빛공해방지법_시행령.pdf", url: "#" },
        { name: "빛공해방지법_시행규칙.pdf", url: "#" },
      ],
      views: 92,
    },
    {
      id: 9,
      title: "대기환경 보전법",
      author: "한승현",
      date: "2025.12.01",
      files: [
        { name: "대기환경보전법.pdf", url: "#" },
        { name: "대기환경보전법_시행령.pdf", url: "#" },
        { name: "대기환경보전법_시행규칙.pdf", url: "#" },
      ],
      views: 62,
    },
    {
      id: 8,
      title: "악취방지법",
      author: "한승현",
      date: "2025.12.01",
      files: [
        { name: "악취방지법.pdf", url: "#" },
        { name: "악취방지법_시행령.pdf", url: "#" },
        { name: "악취방지법_시행규칙.pdf", url: "#" },
      ],
      views: 126,
    },
    {
      id: 7,
      title: "소음·진동관리법",
      author: "한승현",
      date: "2025.12.01",
      files: [
        { name: "소음진동관리법.pdf", url: "#" },
        { name: "소음진동관리법_시행령.pdf", url: "#" },
        { name: "소음진동관리법_시행규칙.pdf", url: "#" },
      ],
      views: 261,
    },
    {
      id: 6,
      title: "서울특별시 환경분쟁조정위원회 운영에 관한 조례(2025.1.3. 시행)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "서울시_환경분쟁조정위원회_조례.pdf", url: "#" }],
      views: 96,
    },
    {
      id: 5,
      title: "환경정책기본법",
      author: "한승현",
      date: "2025.12.01",
      files: [
        { name: "환경정책기본법.pdf", url: "#" },
        { name: "환경정책기본법_시행령.pdf", url: "#" },
        { name: "환경정책기본법_시행규칙.pdf", url: "#" },
      ],
      views: 182,
    },
    {
      id: 4,
      title:
        "환경분쟁조정 및 환경피해 구제 등에 관한 법률 시행규칙 (2025.1.1 시행)",
      author: "한승현",
      date: "2025.12.01",
      files: [{ name: "환경분쟁조정법_시행규칙.pdf", url: "#" }],
      views: 148,
    },
    {
      id: 3,
      title:
        "환경분쟁조정 및 환경피해 구제 등에 관한 법률 시행령 (2025.1.1. 시행)",
      author: "송승현",
      date: "2025.12.01",
      files: [{ name: "환경분쟁조정법_시행령.pdf", url: "#" }],
      views: 129,
    },
    {
      id: 2,
      title: "환경분쟁조정 및 환경피해 구제 등에 관한 법률 (2025.1.1. 시행)",
      author: "송승현",
      date: "2025.12.01",
      files: [{ name: "환경분쟁조정법.pdf", url: "#" }],
      views: 410,
    },
    {
      id: 1,
      title:
        "각종 분쟁조정위원회 등의 조정절차 등에 대한 집행력 부여에 관한 규칙",
      author: "최양택",
      date: "2025.12.01",
      files: [{ name: "집행력부여규칙.pdf", url: "#" }],
      views: 217,
    },
  ];

  // 파일 다운로드 핸들러
  const handleFileDownload = (fileName: string, fileUrl: string) => {
    // TODO: 실제 파일 다운로드 로직 구현
    console.log("파일 다운로드:", fileName);
    // 예시: window.open(fileUrl, '_blank');
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
      lnbTitle="정보자료"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="law"
    >
      {/* 콘텐츠 영역 */}
      <div className="r-content-wp">
        <h1 className="page-title">관련법령</h1>

        <div className="table-top-wp">
          {/* 검색창 */}
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

          {/* 페이지카운트 전체*건 | 현재페이지 1/10 */}
          <div className="table-count-wp">
            전체 <span className="text-primary ">100</span>건
            <span className="div-line">|</span>
            현재페이지 <span className="text-primary">1</span>/10
          </div>
        </div>

        {/* 테이블 영역 */}
        <div className="table-wp">
          <table className="tableA">
            <thead>
              <tr>
                <th className="w60 tac">번호</th>
                <th>제목</th>
                <th className="w80 tac">작성자</th>
                <th className="w100 tac">등록일</th>
                <th className="w120 tac">파일</th>
                <th className="w80 tac">조회</th>
              </tr>
            </thead>
            <tbody>
              {lawData.map((item) => (
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
                  <td className="tac count">{item.views}</td>
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
          <button className="page-btn page-number active">1</button>
          <button className="page-btn page-number ">2</button>
          <button className="page-btn page-number ">3</button>
          <button
            className="page-btn page-next"
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label="다음 페이지"
          >
            ›
          </button>
          <button
            className="page-btn page-last"
            onClick={() => handlePageChange(10)}
            aria-label="마지막 페이지"
          >
            »
          </button>
        </div>
        {/* 테이블 영역 end*/}
      </div>
    </SubPageLayout>
  );
};

export default Imt01;
