import SubPageLayout from "../../components/layout/SubPageLayout";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

const My02 = () => {
  const navigate = useNavigate();
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
          <table className="tableD">
            <thead className="h140">
              <tr>
                <th colSpan={4}>
                  <div className="table-d-head">
                    <span className="table-d-title">알선</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="h140">
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
                  <div className="attach-file-view">
                        <span className="attach-view-icon" aria-hidden="true" />
                          조정을 구하는 취지 및 이유.txt
                      </div>
                      <div className="attach-file-view">
                        <span className="attach-view-icon" aria-hidden="true" />
                        분쟁의 경과.txt
                      </div>
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
              <table className="tableD">
                <tbody className="h140">
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
              <table className="tableD">
                <tbody className="h140">
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
              <table className="tableD">
                <tbody className="h140">
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


            <div className="table-st-wp">
              <h4 className="sub-title">세부피해내역</h4>

              <table className="tableC">
              <thead>
                <tr>
                  <th className="w180 tac">피해내역</th>
                  <th className="w140 tac">피해액(원)</th>
                  <th className="tac">비고</th>
                </tr>
              </thead>
              <tbody className="boR">
                <tr>
                  <td className="">정신적피해</td>
                  <td className="tac">500,000</td>
                  <td className="">비고</td>
                </tr>

                <tr>
                  <td className="">정신적+건축물 피해</td>
                  <td className="tac">1,000,000</td>
                  <td className="">비고</td>
                </tr>
                
              <tr >
                <td colSpan={3} className="bgPr50" >
                  <ul className="rlsc">
                        <li>피해(예상)금액 : <span className="text-accent">1,500,000 원</span></li>
                        <li>예상수수료 : <span className="text-accent">10,000 원</span></li>
                  </ul>
                </td>
              </tr>            
              </tbody>
            </table>
            </div>



            <div className="table-st-wp">
              <h4 className="sub-title">신청내용</h4>
              <table className="tableD">
                <tbody className="w200">
                  <tr>
                    <th>환경피해발생 일시/장소</th>
                    <td>2026-01-28 / 장소</td>
                  </tr>
                 
                  <tr>
                    <th>알선을 구하는 취지 및 이유</th>
                    <td>

                      <div className="attach-file-view">
                        <span className="attach-view-icon" aria-hidden="true" />
                        알선을 구하는 취지 및 이유.txt
                      </div>
                    </td>
                  </tr>


                  <tr>
                    <th>분쟁경과</th>
                    <td>

                      <div className="attach-file-view">
                        <span className="attach-view-icon" aria-hidden="true" />
                        분쟁의 경과.txt
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <th>신청인 현황 및 피해내역</th>
                    <td>-</td>
                  </tr>

                  
                  <tr>
                    <th>참고자료</th>
                    <td>
                       <div className="attach-file-view">
                        <span className="attach-view-icon" aria-hidden="true" />
                        참고문서1.pdf
                      </div>
                      <div className="attach-file-view">
                        <span className="attach-view-icon" aria-hidden="true" />
                        참고문서2.pdf
                      </div>
                        <div className="attach-file-view">
                        <span className="attach-view-icon" aria-hidden="true" />
                        참고사진.png
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="btnWp f-end">
          <button type="button" className="btn btn-line btn-md">수정하기</button>  
          <button
            type="button"
            className="btn btn-secondary btn-md"
            onClick={() => navigate("/mypage/my-dispute")}
          >
            <FontAwesomeIcon icon={faList} /> 목록
          </button>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default My02;
