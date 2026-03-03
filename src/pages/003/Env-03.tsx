import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faSquareCheck,
  faChevronLeft,
  faChevronRight,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SubPageLayout from "../../components/layout/SubPageLayout";
import filePdf from "../../assets/images/File-pdf.svg";
import "../002/Env.css";

const Env03 = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "환경분쟁조정안내", url: "#" },
    { label: "분쟁조정사례", url: "/env/cases" },
    { label: "상세정보" },
  ];

  const lnbMenuItems = [
    { id: "info", label: "제도안내", url: "/env/info" },
    { id: "cases", label: "분쟁조정사례", url: "/env/cases" },
    { id: "faq", label: "조정신청 FAQ", url: "#" },
    { id: "online-counsel", label: "인터넷상담", url: "#" },
    { id: "visit-counsel", label: "방문상담예약", url: "#" },
  ];

  return (
    <SubPageLayout
      breadcrumbItems={breadcrumbItems}
      lnbTitle="환경분쟁조정안내"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="cases"
    >
      <div className="r-content-wp">
        <section className="case-detail-head">
          <span className="case-detail-category">공사장</span>
          <h2 className="sub-title">
            교회 신축공사 소음, 진동으로인한 정신적, 건축물 피해에 대해
            81,200천원의 배상을 요구하는 환경분쟁조정(재정) 신청사건
          </h2>
          <div className="case-detail-meta">
            <span>작성자 함승현</span>
            <span>2025.11.27 02:06:45</span>
            <span>조회 198</span>
          </div>
        </section>

        <section className="case-detail-file">
          <strong className="case-detail-file-label">첨부파일</strong>
          <a href="#" className="case-detail-file-link">
            <img src={filePdf} alt="PDF 파일" className="file-icon" />
            재정문(이유서 포함)-부분.pdf
          </a>
        </section>

        <section className="case-detail-body">
          <div className="case-detail-block">
            <h3 className="case-detail-block-title">
              <FontAwesomeIcon icon={faSquare} className="case-detail-icon" />
              사건개요
            </h3>
            <p>
              ○○구 ○○동 교회 신축공사 소음, 진동으로인한 정신적, 건축물 피해에
              대해 81,200천원의 배상을 요구하는 환경분쟁조정(재정) 신청사건
            </p>
          </div>

          <div className="case-detail-block">
            <h3 className="case-detail-block-title">
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="case-detail-icon checked"
              />
              결정
            </h3>
            <p>- 정신적 피해에 대해 7,770,610원 배상 결정</p>
          </div>
        </section>

        <section className="case-detail-nav">
          <a href="#" className="case-detail-nav-link prev">
            <span className="nav-label">
              <FontAwesomeIcon icon={faChevronLeft} />
              이전글
            </span>
            <span className="nav-title">
              교회 신축공사 소음, 진동으로인한 정신적, 건축물 피...
            </span>
          </a>
          <a href="#" className="case-detail-nav-link next">
            <span className="nav-title">
              교회 신축공사 소음, 진동으로인한 정신적, 건축물 피...
            </span>
            <span className="nav-label">
              다음글
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </section>

        <div className="case-detail-list-wp">
          <button type="button" className="case-detail-list-btn" onClick={() => navigate("/env/cases")}>
            <FontAwesomeIcon icon={faListUl} />
            목록
          </button>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default Env03;
