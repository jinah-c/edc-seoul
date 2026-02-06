import SubPageLayout from "../../components/layout/SubPageLayout";
import envImage01W from "../../assets/images/env01_img_w.png";
import envImage01M from "../../assets/images/env01_img_m.png";
import "./Env.css";

const Env01 = () => {
  // Breadcrumb 데이터
  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "환경분쟁조정안내", url: "#" },
    { label: "제도안내" },
  ];

  // LNB 메뉴 데이터
  const lnbMenuItems = [
    { id: "info", label: "제도안내", url: "#" },
    { id: "cases", label: "분쟁조정사례", url: "#" },
    { id: "faq", label: "조정신청FAQ", url: "#" },
    { id: "online-counsel", label: "인터넷상담", url: "#" },
    { id: "visit-counsel", label: "방문상담예약", url: "#" },
  ];

  return (
    <SubPageLayout
      breadcrumbItems={breadcrumbItems}
      lnbTitle="환경분쟁조정안내"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="info"
    >
      <div className="r-content-wp">
        <h1 className="page-title">제도안내</h1>

        <div className="page-notice">
          <ul>
            <li>
              서울특별시 환경분쟁조정피해구제위원회가 수행하는{" "}
              <span className="text-accent">환경분쟁조정제도</span>에 대해서
              알려드립니다.
            </li>
            <li>
              크고 작은 환경분쟁을 복잡한 소송절차를 통하지 않고 전문성을 가진
              행정기관에서 신속히 해결하도록 하기 위해 마련한 제도입니다!
            </li>
          </ul>
        </div>

        <div className="r-content">
          {/* 환경분쟁조정제도란? ======================== */}
          <section className="txt-section">
            <h3 className="deco-title2">환경분쟁조정제도란?</h3>
            <p className="bold-txt">
              환경분쟁조정제도는 시민들이 생활 속에서 부딪히는 크고 작은
              환경분쟁을 복잡한{" "}
              <span className="text-primary">소송절차를 통하지 않고</span>
              전문성을 가진 행정기관에서{" "}
              <span className="text-primary">
                신속히 해결하도록 하기 위해 마련한 제도
              </span>
              입니다.
            </p>

            <p className="deco-text1">
              환경분쟁을 민사소송으로 제기하는 경우, 피해자는 가해행위와
              피해발생간의 인과관계를 입증해야 하고, 이 과정에서 법률지식이 없는
              일반인은 상당한 비용을 들여 변호사의 도움을 받아야 하는데 반해,
            </p>
            <p className="deco-text1">
              환경분쟁조정제도를 이용하는 경우에는
              환경분쟁조정피해구제위원회에서 적은 비용으로 피해사실 입증을
              대신해 주고, 절차도 간단하기 때문에 변호사의 도움 없이도
              조정절차를 진행할 수 있는 장점이 있습니다.
            </p>
          </section>

          <section className="txt-section">
            <h3 className="deco-title2">조정(調整)의 종류?</h3>

            <table className="table-c">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>정의</th>
                  <th>처리기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>합의(合意)</td>
                  <td>
                    당사자의 자리를 주선하여 분쟁당사자간의 합의를 유도하는 절차
                  </td>
                  <td>2월</td>
                </tr>
                <tr>
                  <td>조정(調整)</td>
                  <td>
                    사실조사 후 조정위원회가 조정안을 작성하여 당사자간의 합의를
                    촉진 권고하는 절차
                  </td>
                  <td>7월</td>
                </tr>
                <tr>
                  <td>재정(裁定)</td>
                  <td>
                    사실조사 및 당사자 심문 후 재정위원회가 피해배상처분을
                    종합하는 손실처분 절차
                  </td>
                  <td>7월</td>
                </tr>
                <tr>
                  <td>중재(仲裁)</td>
                  <td>
                    당사자간의 합의로 분쟁의 원인이 재판이 아닌 중재위원회의
                    판정에 의하여 해결하는 절차
                  </td>
                  <td>7월</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 조정(調整)신청 대상 ======================== */}
          <section className="txt-section">
            <h3 className="deco-title2">조정(調整)신청 대상</h3>
            <p className="deco-text1">
              사업활동, 기타 사람의 활동에 따라 발생하였거나 발생이 예상되는
              대기오염, 수질오염, 토양오염, 해양오염 및 소음, 진동과 악취 등에
              의한 건강·재산·정신에 관한 분쟁
            </p>

            <p className="deco-text1">
              환경시설(폐기물처리시설, 하수종말처리시설, 분뇨처리시설 등)의
              설치.관리와 관련된 분쟁
            </p>
            <p className="deco-text1">진동으로 인한 지반침하에 따른 분쟁</p>
            <p className="deco-text1">
              자연생태계 파괴로 인한 건강상·재산상의 피해분쟁
            </p>
            <p className="deco-text1">
              건축법의 적용을 받지 아니하는 구조물에 의한 일조방해로 인해
              발생되는 건강상·재산상의 피해분쟁
            </p>
            <p className="deco-text1">
              지하수 수위 또는 이동경로의 변화로 인한 재산상의
              피해분쟁&nbsp;&nbsp;
              <span className="text-gray">
                ※ 다만 방사능오염으로 인한 피해는 제외
              </span>
            </p>
          </section>

          {/* 조정(調整)업무별 처리기관 ======================== */}
          <section className="txt-section">
            <h3 className="deco-title2">조정(調整)업무별 처리기관</h3>
            <p className="deco-text1">
              서울특별시 환경분쟁조정피해구제위원회는 위의 조정사무 중 다음의
              업무를 관장합니다.
            </p>

            <ul
              className="textbox01"
              style={{ wordBreak: "keep-all", whiteSpace: "normal" }}
            >
              <li className="deco-text2">
                서울특별시 관할구역 안에서 발생한 분쟁의 조정사무중 신청금액이
                1억원 이하의 중재
              </li>
              <li className="deco-text2">
                서울특별시 관할구역 안에서 발생한 분쟁의 조정사무 중 신청금액이
                1억원 이하인 분쟁의 재정
              </li>
              <li className="deco-text2">
                서울특별시 관할구역 안에서 발생한 분쟁의 조정사무 중 국가 또는
                지방자치단체를 당사자로 하지 않는 분쟁의 조정(調整)
              </li>
            </ul>

            <p className="deco-text1">
              서울특별시 환경분쟁조정피해구제위원회는 위의 조정사무 중 다음의
              업무를 관장합니다.
            </p>

            <ul
              className="textbox01"
              style={{ wordBreak: "keep-all", whiteSpace: "normal" }}
            >
              <li className="deco-text2">
                신청금액이 1억원을 초과하는 분쟁의 중재(仲裁)
              </li>
              <li className="deco-text2">
                신청금액이 1억원을 초과하는 분쟁의 재정(裁定)
              </li>
              <li className="deco-text2">
                국가 또는 지방자치단체를 당사자로 하는 분쟁의 조정(調整)
              </li>
              <li className="deco-text2">
                2이상의 시·도의 관할구역에 걸치는 분쟁의 조정(調整)
              </li>
              <li className="deco-text2">
                건축으로 인한 일조방해 및 조망저해와 관련된 분쟁의 조정은
                환경피해와 복합되어 있는 경우에 한합니다.
              </li>
              <li className="deco-text2">
                환경오염으로 인한 사람의 생명·신체에 대한 중대한 피해, 제2조
                제2호의 환경시설의 설치 또는 관리와 관련한 다툼 등 사회적으로
                파급효과가 클것으로 우려되는 환경분쟁에 대하여는 당사자의 신청이
                없는 경우에도 직권으로 조정절차를 개시할 수 있다.
              </li>
              <li className="deco-text2">
                관할지방환경분쟁조정피해구제위원회가 스스로 조정하기 곤란하다고
                결정하여 이송한 분쟁
              </li>
              <li className="deco-text2">
                Tel(전화) : 044-201-7999, 홈페이지 : http:/edc.me.go.kr
              </li>
            </ul>
          </section>

          {/* 신청사건 처리절차 (조정·재정·중재의 경우) ======================== */}
          <section className="txt-section">
            <h3 className="deco-title2">
              신청사건 처리절차 (조정·재정·중재의 경우)
            </h3>

            <picture className="envImge01">
              <source media="(max-width: 768px)" srcSet={envImage01M} />
              <img src={envImage01W} alt="조정신청 절차" />
            </picture>
          </section>

          {/* 조정(調整)신청 절차 ======================== */}
          <section className="txt-section">
            <h3 className="deco-title2">조정(調整)의 효력</h3>

            <div className="text-group10">
              <div className="deco-text3">알선의 효력</div>
              <p className="indent24">
                알선위원의 중재로 당사자간에 합의가 이루어지면 합의서를
                작성하며, 합의서 작성에 의하여 분쟁이 해결된다.
              </p>
            </div>

            <div className="text-group10">
              <div className="deco-text3">조정(調停)의 효력</div>
              <p className="indent24">
                조정위원회의 조정안을 당사자가 수락한 때에는 조정조서를
                작성하며, 이 경우 당사자간에 조정조서와 동일한 내용의 합의가
                성립된 것으로 본다.
              </p>
            </div>

            <div className="text-group10">
              <div className="deco-text3">재정(裁定)의 효력</div>
              <p className="indent24">
                위원회가 재정결정을 행한 경우, 재정문서의 정본이 당사자에게
                송달된 날부터 60일 이내에 당사자 쌍방 또는 일방이 당해 재정의
                대상인 환경피해를 원인으로 하는 소송을 제기하지 않은 때에는
                (제기했다가 소송을 철회한 경우 포함) 당사자간에 당해 재정내용과
                동일한 합의가 성립된 것으로 본다. (재정내용의 채권·채무관계확정)
              </p>
            </div>

            <div className="text-group10">
              <div className="deco-text3">중재의 효력</div>
              <p className="indent24">
                위원회가 중재결정을 한 경우, 중재결정은 법원의 확정판결과 동일한
                효력이 있어, 단시간 내에 분쟁이 해결 가능합니다.<br></br>
                <span className="text-gray">
                  ※ 중재법에 의한 절차에 의하지 아니하고는 이의신청을 할 수 없음
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default Env01;
