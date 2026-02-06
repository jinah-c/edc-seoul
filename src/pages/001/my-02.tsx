import SubPageLayout from "../../components/layout/SubPageLayout";
import attachment01 from "../../assets/files/attachment-01.txt";
import attachment02 from "../../assets/files/attachment-02.txt";
import "./login.css";

const My02 = () => {
  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "마이페이지", disabled: true },
    { label: "나의 분쟁조정", url: "/mypage/my-dispute" },
    { label: "신청내역상세" },
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
        <h1 className="page-title">신청내역 상세</h1>

        <section className="list-section">
          <table className="table-d">
            <thead>
              <tr>
                <th colSpan={4}>
                  <div className="table-d-head">
                    <span className="table-d-title">알선</span>
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
                <td className="text-primary">사건신청</td>
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

        <div className="r-content" style={{ marginTop: "40px" }}>
          <section className="txt-section">
            <h3 className="deco-title2">처리절차 안내</h3>

            <div className="table-st-wp">
              <h4 className="sub-title">신청인 정보</h4>
              <table className="table-d">
                <tbody>
                  <tr>
                    <th>구분</th>
                    <td>사업자</td>
                    <th>상호(명칭)</th>
                    <td>상호이름</td>
                  </tr>
                  <tr>
                    <th>성명(대표)</th>
                    <td>김대표</td>
                    <th>주민번호</th>
                    <td>880101-*******</td>
                  </tr>
                  <tr>
                    <th>유선전화</th>
                    <td>02-0110-1123</td>
                    <th>휴대전화</th>
                    <td>010-1212-3434</td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td>email@gmail.com</td>
                    <th>신청인수</th>
                    <td>2명</td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td colSpan={3}>
                      [04115] 서울특별시 영등포구 양평로 129, 5층 (양평동 5가,
                      파워랜드)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-st-wp">
              <h4 className="sub-title">선정대표자, 대리인 또는 대표당사자</h4>
              <table className="table-d">
                <tbody>
                  <tr>
                    <th>상호</th>
                    <td colSpan={3}>상호입력</td>
                  </tr>
                  <tr>
                    <th>성명(대표)</th>
                    <td>김대표</td>
                    <th>주민번호</th>
                    <td>880101-*******</td>
                  </tr>
                  <tr>
                    <th>유선전화</th>
                    <td>02-0110-1123</td>
                    <th>휴대전화</th>
                    <td>010-1212-3434</td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td colSpan={3}>email@gmail.com</td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td colSpan={3}>
                      [04115] 서울특별시 영등포구 양평로 129, 5층 (양평동 5가,
                      파워랜드)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-st-wp">
              <h4 className="sub-title">피신청인 정보</h4>
              <table className="table-d">
                <tbody>
                  <tr>
                    <th>구분</th>
                    <td>사업자</td>
                    <th>상호(명칭)</th>
                    <td>상호이름</td>
                  </tr>
                  <tr>
                    <th>성명</th>
                    <td>김대표</td>
                    <th>전화번호</th>
                    <td>010-1212-3434</td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td colSpan={3}>
                      [04115] 서울특별시 영등포구 양평로 129, 5층 (양평동 5가,
                      파워랜드)
                    </td>
                  </tr>
                  <tr>
                    <th>현장주소</th>
                    <td colSpan={3}>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default My02;
