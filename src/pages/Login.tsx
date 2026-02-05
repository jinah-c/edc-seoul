import SimplePageLayout from "../components/layout/SimplePageLayout";
import loginIcon from "../assets/images/login-icon.png";
import "../styles/login.css";

const Login = () => {
  // Breadcrumb 데이터
  const breadcrumbItems = [{ label: "홈", url: "/" }, { label: "로그인" }];

  const handleLogin = () => {
    // 휴대폰 본인확인 로직
    console.log("휴대폰 본인확인");
  };

  return (
    <SimplePageLayout breadcrumbItems={breadcrumbItems}>
      <div className="login-page-container">
        <div className="login-page-wrapper">
          <h1 className="page-title center">본인인증 로그인</h1>

          <div className="login-page-content">
            <div className="login-page-icon-wrapper">
              <img src={loginIcon} alt="로그인" className="login-page-icon" />
            </div>

            <p className="text-description login">
              비밀번호 본인확인 후에 분쟁조정신청,
              <br />
              인터넷상담 및 방문상담예약을 이용하실 수 있습니다.
            </p>

            <button className="btn btn-primary btn-lg" onClick={handleLogin}>
              휴대폰 본인확인
            </button>
          </div>
        </div>
      </div>
    </SimplePageLayout>
  );
};

export default Login;
