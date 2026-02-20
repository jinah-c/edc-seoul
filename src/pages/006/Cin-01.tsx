import SubPageLayout from "../../components/layout/SubPageLayout";

const Cin01 = () => {
  // Breadcrumb 데이터
  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "위원회소개", url: "#" },
    { label: "위원회 설립목적" },
  ];

  // LNB 메뉴 데이터
  const lnbMenuItems = [
    { id: "purpose", label: "위원회 설립목적", url: "/committee/purpose" },
    { id: "committee", label: "위원회", url: "/committee/intro" },
    { id: "district", label: "자치구관련부서", url: "/committee/district" },
    { id: "location", label: "찾아오시는길", url: "/map" },
  ];

  return (
    <SubPageLayout
      breadcrumbItems={breadcrumbItems}
      lnbTitle="위원회소개"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="purpose"
    >
      <div className="r-content-wp">
        <h1 className="page-title">위원회 설립목적</h1>

        <div className="page-notice">
          <ul>
            <li>
              <span className="text-primary">
                서울특별시 환경분쟁조정피해구제위원회
              </span>
              의 설립목적과 기능을 소개합니다.
            </li>
          </ul>
        </div>

        <div className="r-content">
          <section className="txt-section">
            <h3 className="deco-title3">설치목적</h3>
            <p>
              환경오염 피해로 인한 분쟁을 간편한 절차로 공정하고 효율적으로
              해결하여 환경을 보전하고 시민의 건강과 재산상의 피해를 구제하는
              합의제의 행정관청으로 독립성을 띠고 준사법적인 업무를 수행합니다.
            </p>
          </section>

          <section className="txt-section">
            <h3 className="deco-title3">기능</h3>
            <p>
              서울특별시 관할구역 안에서 발생하는 환경분쟁의 알선·조정·재정·중재
              (조정가액 1억원 이하인 신청사건, 국가나 지방자치단체를 당사자로 하지
              않는 분쟁의 조정)
            </p>
          </section>

          <section className="txt-section">
            <h3 className="deco-title3">구성</h3>
            <p>
              서울특별시 관할구역 안에서 발생하는 환경분쟁의 알선·조정·재정·중재
              (조정가액 1억원 이하인 신청사건, 국가나 지방자치단체를 당사자로 하지
              않는 분쟁의 조정)
            </p>

            <table className="tableB">
              <tbody>
                <tr>
                  <th>위원장</th>
                  <td>서울특별시 행정1부시장</td>
                </tr>
                <tr>
                  <th>위원수</th>
                  <td>위원장 포함 25인</td>
                </tr>
                <tr>
                  <th>위원임기</th>
                  <td>2년, 연임가능</td>
                </tr>
                <tr>
                  <th>구성</th>
                  <td>법조인 7명, 교수 6명, 전문가 9명, 당연직 3명</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default Cin01;
