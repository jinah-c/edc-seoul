import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import SubPageLayout from "../../components/layout/SubPageLayout";
import "./Dma.css";

/* ── 공통 서브 컴포넌트 ── */
const CategoryRadio = ({
  applicantCategory,
  setApplicantCategory,
}: {
  applicantCategory: "business" | "individual";
  setApplicantCategory: (v: "business" | "individual") => void;
}) => (
  <div className="form-radio-group" role="radiogroup" aria-label="구분 선택">
    <label className="radio-label" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setApplicantCategory("business"); } }}>
      <input type="radio" name="applicantCategory" value="business" checked={applicantCategory === "business"} onChange={() => setApplicantCategory("business")} tabIndex={-1} />
      <span>사업자</span>
    </label>
    <label className="radio-label" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setApplicantCategory("individual"); } }}>
      <input type="radio" name="applicantCategory" value="individual" checked={applicantCategory === "individual"} onChange={() => setApplicantCategory("individual")} tabIndex={-1} />
      <span>개인</span>
    </label>
  </div>
);

const EmailInput = ({
  formData,
  handleFormChange,
}: {
  formData: { emailId: string; emailDomain: string };
  handleFormChange: (field: string, value: string) => void;
}) => {
  const [isDirectInput, setIsDirectInput] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleDomainSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "직접입력") {
      setIsDirectInput(true);
      handleFormChange("emailDomain", "");
    } else {
      handleFormChange("emailDomain", e.target.value);
    }
  };

  const handleBackToSelect = () => {
    setIsDirectInput(false);
    handleFormChange("emailDomain", "선택하세요");
    setTimeout(() => {
      try {
        selectRef.current?.showPicker();
      } catch {
        selectRef.current?.focus();
      }
    }, 0);
  };

  return (
    <div className="email-input-group">
      <input type="text" className="form-input dms-input email-id" placeholder="이메일주소" value={formData.emailId} onChange={(e) => handleFormChange("emailId", e.target.value)} aria-label="이메일 아이디" />
      <span className="email-at" aria-hidden="true">@</span>
      {isDirectInput ? (
        <div className="email-domain-direct">
          <input type="text" className="form-input dms-input" placeholder="직접입력" value={formData.emailDomain} onChange={(e) => handleFormChange("emailDomain", e.target.value)} aria-label="이메일 도메인 직접입력" />
          <button type="button" className="email-domain-toggle-btn" onClick={handleBackToSelect} aria-label="도메인 선택으로 전환">▼</button>
        </div>
      ) : (
        <select ref={selectRef} className="dms-select" value={formData.emailDomain} onChange={handleDomainSelectChange} aria-label="이메일 도메인 선택">
          <option value="선택하세요" disabled>선택하세요</option>
          {EMAIL_DOMAINS.map((domain) => <option key={domain} value={domain}>{domain}</option>)}
        </select>
      )}
    </div>
  );
};

const AddressInput = ({
  formData,
  handleFormChange,
}: {
  formData: { address: string; addressDetail: string; addressDetailSub: string };
  handleFormChange: (field: string, value: string) => void;
}) => (
  <div className="address-input-group">
    <div className="address-row1">
      <input type="text" className="form-input dms-input address-main" placeholder="입력해주세요." value={formData.address} onChange={(e) => handleFormChange("address", e.target.value)} aria-required="true" aria-label="주소 필수 입력" />
      <button type="button" className="btn btn-line primary btn-sm" aria-label="우편번호 검색">우편번호</button>
      <button type="button" className="btn btn-line btn-sm" onClick={() => { handleFormChange("address", ""); handleFormChange("addressDetail", ""); handleFormChange("addressDetailSub", ""); }} aria-label="주소 삭제">주소삭제</button>
    </div>
    <div className="address-row2">
      <input type="text" className="form-input dms-input address-main" placeholder="입력해주세요." value={formData.addressDetail} onChange={(e) => handleFormChange("addressDetail", e.target.value)} aria-label="주소 상세 입력" />
      <input type="text" className="form-input dms-input address-detail-sub" placeholder="상세주소" value={formData.addressDetailSub} onChange={(e) => handleFormChange("addressDetailSub", e.target.value)} aria-label="상세주소 입력" />
    </div>
  </div>
);

const STEPS = [
  { step: 1, label: "신청인 정보" },
  { step: 2, label: "피신청인/피해내역" },
  { step: 3, label: "분쟁내용입력" },
  { step: 4, label: "수수료납부" },
  { step: 5, label: "신청완료" },
];

const EMAIL_DOMAINS = [
  "직접입력",
  "naver.com",
  "gmail.com",
  "daum.net",
  "hanmail.net",
  "nate.com",
  "kakao.com",
];

const Dms02 = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [privacyConsent, setPrivacyConsent] = useState<"yes" | "no">("yes");
  const [applicantType, setApplicantType] = useState<
    "individual" | "multi-single" | "multi-multi"
  >("individual");
  const [applicantCategory, setApplicantCategory] = useState<
    "business" | "individual"
  >("individual");

  // 폼 필드 상태
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    residentId: "",
    mobile: "",
    phone: "",
    emailId: "",
    emailDomain: "선택하세요",
    address: "",
    addressDetail: "",
    addressDetailSub: "",
    applicantCount: "",
    // 선정대표자 (2가구 이상)
    representativeName: "",
    representativeResidentId: "",
    representativePhone: "",
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Breadcrumb 데이터
  const breadcrumbItems = [
    { label: "홈", url: "/" },
    { label: "분쟁조정신청", url: "#" },
    { label: "인터넷신청", url: "/dispute/internet-apply" },
    { label: "알선신청" },
  ];

  // LNB 메뉴 데이터
  const lnbMenuItems = [
    { id: "internet-application", label: "인터넷신청", url: "/dispute/internet-apply" },
    { id: "visit-application", label: "방문신청", url: "#" },
    { id: "fee-calculator", label: "수수료계산기", url: "#" },
  ];

  const handleCancel = () => {
    navigate("/dispute/internet-apply");
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <SubPageLayout
      breadcrumbItems={breadcrumbItems}
      lnbTitle="분쟁조정신청"
      lnbMenuItems={lnbMenuItems}
      activeLnbId="internet-application"
    >
      <div className="r-content-wp">
        {/* 페이지 제목 */}
        <h1 className="page-title">알선신청</h1>

        {/* 페이지 설명 BOX */}
        <div className="page-notice" role="region" aria-label="알선신청 안내">
          <ul>
            <li>
              서울특별시 관할구역 안에서 발생한 분쟁의{" "}
              <span className="text-accent">
                알선·조정·재정·중재(조정가액 1억원이하) 신청사건
              </span>{" "}
              (다만,일조방해,통풍방해,조망저해로 인한 분쟁의 재정을
              제외합니다.)
            </li>
            <li>
              서울특별시 관할구역 안에서 발생한 분쟁의 조정사무 중 국가 또는
              지방자치단체를 당사자로 하지 않는 분쟁의 조정
            </li>
            <li>
              비교적 간단한 피해분쟁 사건으로 당사자의 자리를 주선하여
              분쟁당사자 간의{" "}
              <span className="text-accent">합의를 유도하는 절차</span>입니다.
            </li>
          </ul>
        </div>

        {/* 개인정보 수집 동의 */}
        <div className="privacy-consent-box" role="region" aria-label="개인정보 수집 동의">
          <p>
            서울특별시 환경분쟁위원회는 법령의 규정과 정보주체의 동의에
            의해서만 개인정보를 수집·보유 합니다.
          </p>
          <p>개인정보 수집에 동의하지 않으면 등록할 수 없습니다.</p>
          <div className="privacy-consent-row">
            <span className="privacy-consent-label">개인정보 수집에 동의하십니까?</span>
            <div className="privacy-consent-radios" role="radiogroup" aria-label="개인정보 수집 동의 여부">
              <label className="radio-label" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setPrivacyConsent("yes"); } }}>
                <input
                  type="radio"
                  name="privacyConsent"
                  value="yes"
                  checked={privacyConsent === "yes"}
                  onChange={() => setPrivacyConsent("yes")}
                  aria-label="예"
                  tabIndex={-1}
                />
                <span>예</span>
              </label>
              <label className="radio-label" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setPrivacyConsent("no"); } }}>
                <input
                  type="radio"
                  name="privacyConsent"
                  value="no"
                  checked={privacyConsent === "no"}
                  onChange={() => setPrivacyConsent("no")}
                  aria-label="아니오"
                  tabIndex={-1}
                />
                <span>아니오</span>
              </label>
            </div>
          </div>
        </div>

        {/* 필수항목 안내 + 작성예시 버튼 */}
        <div className="form-meta-row">
          <p className="required-notice">
            <span className="required-star" aria-hidden="true">*</span>
            표시는 필수 입력항목입니다.
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-sm writing-example-btn"
            onClick={() => navigate("/dispute/internet-apply")}
            aria-label="작성예시 페이지로 이동"
          >
            <FontAwesomeIcon icon={faCircleQuestion} aria-hidden="true" />
            작성예시
          </button>
        </div>

        {/* STEP 인디케이터 (진행 표시) */}
        <nav className="step-indicator" aria-label="신청 단계">
          <ol className="step-list">
            {STEPS.map(({ step, label }) => (
              <li
                key={step}
                className={`step-item${currentStep === step ? " active" : ""}${currentStep > step ? " done" : ""}`}
                aria-current={currentStep === step ? "step" : undefined}
              >
                <span className="step-number">STEP {step}</span>
                <span className="step-label">{label}</span>
              </li>
            ))}
          </ol>
        </nav>

        {/* STEP 1: 신청인 정보 */}
        {currentStep === 1 && (
          <section
            className="dms-section"
            id="step-panel-1"
           
            aria-labelledby="applicant-info-title"
          >
            <div className="txt-section">
              <h2 className="dms-section-title" id="applicant-info-title">
                신청인 정보
              </h2>
              <p className="dms-section-desc">
                피해를 입은 개인은 신청인의 이름, 전화번호, 주소를 기재하고 {" "}
                <br />
                사업주는 사업자등록상의 상호를 기재하며, 별지에 신청인 명단을 작성한다.
              </p>
            </div>

            {/* 신청인 유형 탭 */}
            <div
              className="applicant-type-tabs"
              role="tablist"
              aria-label="신청인 유형 선택"
            >
              {[
                { value: "individual", label: "신청인이", em: "개인", suffix: "일 경우" },
                { value: "multi-single", label: "신청인이", em: "다수", suffix: "일 경우", sub: "1가구일 경우" },
                { value: "multi-multi", label: "신청인이", em: "다수", suffix: "일 경우", sub: "2가구 이상일 경우" },
              ].map(({ value, label, em, suffix, sub }) => (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  aria-selected={applicantType === value}
                  aria-controls={`applicant-panel-${value}`}
                  className={`applicant-type-tab-btn${applicantType === value ? " active" : ""}`}
                  onClick={() => setApplicantType(value as typeof applicantType)}
                >
                  <input type="radio" className="tab-radio-input" name="applicantTypeVisual" value={value} checked={applicantType === value} onChange={() => {}} tabIndex={-1} aria-hidden="true" />
                  {label}&nbsp;<em>{em}</em>{suffix}&nbsp;
                  {sub && <span className="type-sub-label">({sub})</span>}
                </button>
              ))}
            </div>

            {/* ── 탭 패널: 개인 ── */}
            {applicantType === "individual" && (
              <div id="applicant-panel-individual" role="tabpanel">
                <table className="tableD dms-form-table">
                  <tbody>
                    <tr>
                      <th scope="row">구분</th>
                      <td><CategoryRadio applicantCategory={applicantCategory} setApplicantCategory={setApplicantCategory} /></td>
                    </tr>
                    <tr>
                      <th scope="row">성명(대표) <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.name} onChange={(e) => handleFormChange("name", e.target.value)} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">상호(명칭)</th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.companyName} onChange={(e) => handleFormChange("companyName", e.target.value)} /></td>
                    </tr>
                    <tr>
                      <th scope="row">주민등록번호 앞자리 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.residentId} onChange={(e) => handleFormChange("residentId", e.target.value)} maxLength={6} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">휴대전화 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="tel" className="form-input dms-input" placeholder="입력해주세요." value={formData.mobile} onChange={(e) => handleFormChange("mobile", e.target.value)} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">일반전화</th>
                      <td><input type="tel" className="form-input dms-input" placeholder="입력해주세요." value={formData.phone} onChange={(e) => handleFormChange("phone", e.target.value)} /></td>
                    </tr>
                    <tr>
                      <th scope="row">이메일</th>
                      <td><EmailInput formData={formData} handleFormChange={handleFormChange} /></td>
                    </tr>
                    <tr>
                      <th scope="row">주소 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><AddressInput formData={formData} handleFormChange={handleFormChange} /></td>
                    </tr>
                    <tr>
                      <th scope="row">신청인수 <span className="required-star" aria-hidden="true">*</span></th>
                      <td>
                        <div className="count-input-group">
                          <input type="number" className="form-input dms-input count-input" placeholder="입력해주세요." value={formData.applicantCount} onChange={(e) => handleFormChange("applicantCount", e.target.value)} min={1} aria-required="true" />
                          <span className="count-unit">명</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* ── 탭 패널: 다수(1가구) ── */}
            {applicantType === "multi-single" && (
              <div id="applicant-panel-multi-single" role="tabpanel">
                <table className="tableD dms-form-table">
                  <tbody>
                    <tr>
                      <th scope="row">구분</th>
                      <td><CategoryRadio applicantCategory={applicantCategory} setApplicantCategory={setApplicantCategory} /></td>
                    </tr>
                    <tr>
                      <th scope="row">성명(대표) <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.name} onChange={(e) => handleFormChange("name", e.target.value)} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">상호(명칭)</th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.companyName} onChange={(e) => handleFormChange("companyName", e.target.value)} /></td>
                    </tr>
                    <tr>
                      <th scope="row">주민등록번호 앞자리 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.residentId} onChange={(e) => handleFormChange("residentId", e.target.value)} maxLength={6} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">휴대전화 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="tel" className="form-input dms-input" placeholder="입력해주세요." value={formData.mobile} onChange={(e) => handleFormChange("mobile", e.target.value)} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">일반전화</th>
                      <td><input type="tel" className="form-input dms-input" placeholder="입력해주세요." value={formData.phone} onChange={(e) => handleFormChange("phone", e.target.value)} /></td>
                    </tr>
                    <tr>
                      <th scope="row">이메일</th>
                      <td><EmailInput formData={formData} handleFormChange={handleFormChange} /></td>
                    </tr>
                    <tr>
                      <th scope="row">주소 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><AddressInput formData={formData} handleFormChange={handleFormChange} /></td>
                    </tr>
                    <tr>
                      <th scope="row">신청인수 <span className="required-star" aria-hidden="true">*</span></th>
                      <td>
                        <div className="count-input-group">
                          <input type="number" className="form-input dms-input count-input" placeholder="2인 이상" value={formData.applicantCount} onChange={(e) => handleFormChange("applicantCount", e.target.value)} min={2} aria-required="true" />
                          <span className="count-unit">명</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">신청인 명단 <span className="required-star" aria-hidden="true">*</span></th>
                      <td>
                        <div className="file-input-group">
                          <input type="file" className="form-input dms-input" aria-required="true" aria-label="신청인 명단 파일 첨부" />
                          <p className="file-input-desc">신청인이 다수인 경우 신청현황 및 피해내역 서식을 작성 후 스캔하여 첨부해주세요.</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* ── 탭 패널: 다수(2가구 이상) ── */}
            {applicantType === "multi-multi" && (
              <div id="applicant-panel-multi-multi" role="tabpanel">
                <table className="tableD dms-form-table">
                  <tbody>
                    {/* 선정대표자 정보 */}
                    <tr className="form-section-header">
                      <th scope="row" colSpan={2}>선정대표자 / 대리인 정보</th>
                    </tr>
                    <tr>
                      <th scope="row">성명 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.representativeName} onChange={(e) => handleFormChange("representativeName", e.target.value)} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">주민등록번호 앞자리 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.representativeResidentId} onChange={(e) => handleFormChange("representativeResidentId", e.target.value)} maxLength={6} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">유선전화</th>
                      <td><input type="tel" className="form-input dms-input" placeholder="입력해주세요." value={formData.representativePhone} onChange={(e) => handleFormChange("representativePhone", e.target.value)} /></td>
                    </tr>
                    {/* 신청인 정보 */}
                    <tr className="form-section-header">
                      <th scope="row" colSpan={2} className="">신청인 정보</th>
                    </tr>
                    <tr>
                      <th scope="row">구분</th>
                      <td><CategoryRadio applicantCategory={applicantCategory} setApplicantCategory={setApplicantCategory} /></td>
                    </tr>
                    <tr>
                      <th scope="row">성명(대표) <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.name} onChange={(e) => handleFormChange("name", e.target.value)} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">상호(명칭)</th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.companyName} onChange={(e) => handleFormChange("companyName", e.target.value)} /></td>
                    </tr>
                    <tr>
                      <th scope="row">주민등록번호 앞자리 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="text" className="form-input dms-input" placeholder="입력해주세요." value={formData.residentId} onChange={(e) => handleFormChange("residentId", e.target.value)} maxLength={6} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">휴대전화 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><input type="tel" className="form-input dms-input" placeholder="입력해주세요." value={formData.mobile} onChange={(e) => handleFormChange("mobile", e.target.value)} aria-required="true" /></td>
                    </tr>
                    <tr>
                      <th scope="row">일반전화</th>
                      <td><input type="tel" className="form-input dms-input" placeholder="입력해주세요." value={formData.phone} onChange={(e) => handleFormChange("phone", e.target.value)} /></td>
                    </tr>
                    <tr>
                      <th scope="row">이메일</th>
                      <td><EmailInput formData={formData} handleFormChange={handleFormChange} /></td>
                    </tr>
                    <tr>
                      <th scope="row">주소 <span className="required-star" aria-hidden="true">*</span></th>
                      <td><AddressInput formData={formData} handleFormChange={handleFormChange} /></td>
                    </tr>
                    <tr>
                      <th scope="row">신청인수 <span className="required-star" aria-hidden="true">*</span></th>
                      <td>
                        <div className="count-input-group">
                          <input type="number" className="form-input dms-input count-input" placeholder="2인 이상" value={formData.applicantCount} onChange={(e) => handleFormChange("applicantCount", e.target.value)} min={2} aria-required="true" />
                          <span className="count-unit">명</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">신청인 명단 <span className="required-star" aria-hidden="true">*</span></th>
                      <td>
                        <div className="file-input-group">
                          <input type="file" className="form-input dms-input" aria-required="true" aria-label="신청인 명단 파일 첨부" />
                          <p className="file-input-desc">신청인·대표자 선정동의 및 개인별 피해내역 서식을 작성 후 스캔하여 첨부해주세요.</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">대표자 선정동의서 <span className="required-star" aria-hidden="true">*</span></th>
                      <td>
                        <div className="file-input-group">
                          <input type="file" className="form-input dms-input" aria-required="true" aria-label="대표자 선정동의서 파일 첨부" />
                          <p className="file-input-desc">서명·날인 또는 지장을 찍은 후 스캔하여 첨부해주세요.</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* STEP 2: 피신청인/피해내역 */}
        {currentStep === 2 && (
          <section
            className="dms-section"
            id="step-panel-2"
           
            aria-labelledby="respondent-info-title"
          >
            <div className="txt-section">
              <h2 className="dms-section-title" id="respondent-info-title">
                피신청인/피해내역
              </h2>
              <p className="dms-section-desc">
                피신청인 정보 및 피해내역을 입력해주세요.
              </p>
            </div>
          </section>
        )}

        {/* STEP 3: 분쟁내용입력 */}
        {currentStep === 3 && (
          <section
            className="dms-section"
            id="step-panel-3"
           
            aria-labelledby="dispute-content-title"
          >
            <div className="txt-section">
              <h2 className="dms-section-title" id="dispute-content-title">
                분쟁내용입력
              </h2>
              <p className="dms-section-desc">
                분쟁의 내용 및 경과를 입력해주세요.
              </p>
            </div>
          </section>
        )}

        {/* STEP 4: 수수료납부 */}
        {currentStep === 4 && (
          <section
            className="dms-section"
            id="step-panel-4"
           
            aria-labelledby="fee-payment-title"
          >
            <div className="txt-section">
              <h2 className="dms-section-title" id="fee-payment-title">
                수수료납부
              </h2>
              <p className="dms-section-desc">
                수수료 납부 정보를 확인하고 납부해주세요.
              </p>
            </div>
          </section>
        )}

        {/* STEP 5: 신청완료 */}
        {currentStep === 5 && (
          <section
            className="dms-section"
            id="step-panel-5"
           
            aria-labelledby="complete-title"
          >
            <div className="txt-section">
              <h2 className="dms-section-title" id="complete-title">
                신청완료
              </h2>
              <p className="dms-section-desc">
                알선신청이 완료되었습니다.
              </p>
            </div>
          </section>
        )}

        {/* 하단 버튼 */}
        <div className="dms-btn-row btnWp f-end">
          <button
            type="button"
            className="btn btn-cancel btn-md"
            onClick={handleCancel}
          >
            취소
          </button>
          {currentStep > 1 && (
            <button
              type="button"
              className="btn btn-secondary btn-md"
              onClick={handlePrev}
            >
              이전
            </button>
          )}
          {currentStep < STEPS.length ? (
            <button
              type="button"
              className="btn btn-primary btn-md"
              onClick={handleNext}
              disabled={currentStep === 1 && privacyConsent !== "yes"}
            >
              다음
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary btn-md"
              onClick={() => navigate("/dispute/internet-apply")}
            >
              완료
            </button>
          )}
        </div>
      </div>
    </SubPageLayout>
  );
};

export default Dms02;
