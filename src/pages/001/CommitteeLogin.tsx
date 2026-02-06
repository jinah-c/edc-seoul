import { useState } from "react";
import SimplePageLayout from "../../components/layout/SimplePageLayout";
import loginIcon from "../../assets/images/login2-icon.png";
import eyeOpenIcon from "../../assets/images/EyeOpen.png";
import eyeClosedIcon from "../../assets/images/EyeClosed.png";
import "./login.css";

const CommitteeLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Breadcrumb 데이터
  const breadcrumbItems = [{ label: "홈", url: "/" }, { label: "조정위원용" }];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("조정위원 로그인", { userId, password });
  };

  return (
    <SimplePageLayout breadcrumbItems={breadcrumbItems}>
      <div className="login-page-container">
        <div className="login-page-wrapper">
          <h1 className="page-title center">조정위원 로그인</h1>

          <div className="login-page-content">
            <div className="login-page-icon-wrapper">
              <img
                src={loginIcon}
                alt="조정위원 로그인"
                className="login-page-icon"
              />
            </div>

            <p className="text-description login">
              서울특별시 환경분쟁{" "}
              <span className="text-accent">조정위원용 메뉴</span>
              입니다.
            </p>

            <form className="login-page-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="아이디를 입력해주세요."
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="비밀번호를 입력해주세요."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="비밀번호 표시/숨김"
                  >
                    <img
                      src={showPassword ? eyeOpenIcon : eyeClosedIcon}
                      alt={showPassword ? "비밀번호 표시" : "비밀번호 숨김"}
                    />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                로그인
              </button>
            </form>

            <div className="login-page-links">
              <button type="button" className="link-btn">
                아이디 찾기
              </button>
              <span className="link-divider">|</span>
              <button type="button" className="link-btn">
                비밀번호 찾기
              </button>
            </div>

            <div className="login-page-notice">
              <p>
                ※ 본 페이지를 이용하시려면 조정위원으로 위촉을 받으셔야하며,
                <br />
                서울특별시 홈페이지 아이디로는 로그인이 불가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SimplePageLayout>
  );
};

export default CommitteeLogin;
