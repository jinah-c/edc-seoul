import { useNavigate } from "react-router-dom";
import SubPageLayout from "../../components/layout/SubPageLayout";
import attachment01 from "../../assets/files/attachment-01.txt";
import attachment02 from "../../assets/files/attachment-02.txt";
import "./login.css";

const My01 = () => {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "마이페이지" },
    { label: "나의 분쟁조정" },
  ];

  const lnbMenuItems = [
    { id: "my-dispute", label: "나의 분쟁조정", url: "/mypage/my-dispute" },
  ];

  return (
    <SubPageLayout
      breadcrumbItems={breadcrumbItems}
      lnbTitle="마이페이지"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="my-dispute"
    >
      <div className="r-content-wp">
        <h1 className="page-title">나의 분쟁조정</h1>
        <div className="page-notice">
          <ul>
            <li>
              신청하신 환경분쟁조정
              <span className="text-accent">사건의 진행현황</span>을
              알려드립니다.
            </li>

            <li>
              접수담당자가 신청내용 및 구비서류를 확인한 후 수수료 납부가
              가능하며, 수수료 납부 후에 정상적으로
              <span className="text-accent"> 사건접수</span>가 됩니다.
            </li>
          </ul>
        </div>

        <section className="list-section">
          {/* 내역 없을 시 노출 */}
          {/* <div className="no-history">신청하신 분쟁조정내역이 없습니다.</div> */}

          <table className="table-d">
            <thead>
              <tr>
                <th colSpan={4}>
                  <div className="table-d-head">
                    <span className="table-d-title">알선</span>
                    <div className="table-d-actions">
                      <button type="button" className="btn btn-line red btn-sm">
                        취소하기
                      </button>
                      <button type="button" className="btn btn-line btn-sm">
                        수정하기
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => navigate("/mypage/my-dispute/detail")}
                      >
                        신청내역 상세보기
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>신청일</th>
                <td>2026-01-28</td>
                <th>피신청인</th>
                <td>김겨울</td>
              </tr>
              <tr>
                <th>진행상태</th>
                <td>사건신청</td>
                <th>신청번호</th>
                <td>586271</td>
              </tr>
              <tr>
                <th>사건번호</th>
                <td>-</td>
                <th>수수료</th>
                <td>10,000원</td>
              </tr>
              <tr>
                <th>첨부파일</th>
                <td colSpan={3}>
                  <ul className="attach-files">
                    <li>
                      <a
                        className="attach-file-link"
                        href={attachment01}
                        download="조정을 구하는 취지 및 이유.txt"
                        title="클릭하면 다운로드됩니다"
                      >
                        <span className="attach-file-icon" aria-hidden="true" />
                        조정을 구하는 취지 및 이유.txt
                      </a>
                    </li>
                    <li>
                      <a
                        className="attach-file-link"
                        href={attachment02}
                        download="분쟁의 경과.txt"
                        title="클릭하면 다운로드됩니다"
                      >
                        <span className="attach-file-icon" aria-hidden="true" />
                        분쟁의 경과.txt
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table-d">
            <thead>
              <tr>
                <th colSpan={4}>
                  <div className="table-d-head">
                    <span className="table-d-title">조정신청</span>
                    <div className="table-d-actions">
                      <button type="button" className="btn btn-line red btn-sm">
                        취소하기
                      </button>
                      <button type="button" className="btn btn-line btn-sm">
                        수정하기
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => navigate("/mypage/my-dispute/detail")}
                      >
                        신청내역 상세보기
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>신청일</th>
                <td>2026-01-28</td>
                <th>피신청인</th>
                <td>김겨울</td>
              </tr>
              <tr>
                <th>진행상태</th>
                <td>사건신청</td>
                <th>신청번호</th>
                <td>586271</td>
              </tr>
              <tr>
                <th>사건번호</th>
                <td>-</td>
                <th>수수료</th>
                <td>10,000원</td>
              </tr>
              <tr>
                <th>첨부파일</th>
                <td colSpan={3}>
                  <ul className="attach-files">
                    <li>
                      <a
                        className="attach-file-link"
                        href={attachment01}
                        download="조정을 구하는 취지 및 이유.txt"
                        title="클릭하면 다운로드됩니다"
                      >
                        <span className="attach-file-icon" aria-hidden="true" />
                        조정을 구하는 취지 및 이유.txt
                      </a>
                    </li>
                    <li>
                      <a
                        className="attach-file-link"
                        href={attachment02}
                        download="분쟁의 경과.txt"
                        title="클릭하면 다운로드됩니다"
                      >
                        <span className="attach-file-icon" aria-hidden="true" />
                        분쟁의 경과.txt
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </SubPageLayout>
  );
};

export default My01;
