import "./Footer.css";
import seoulLogo from "../../assets/images/seoul-logo.svg";
import dasanLogo from "../../assets/images/dasan-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* 상단 링크 */}
        <div className="footer-links">
          <a href="#" className="footer-link">
            개인정보처리방침
          </a>
          <a href="#" className="footer-link">
            찾아오시는길
          </a>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="footer-content">
          {/* 왼쪽 영역 */}
          <div className="footer-left">
            {/* 로고 */}
            <div className="footer-logo">
              <img src={seoulLogo} alt="환경분쟁조정위원회" />
            </div>

            {/* 정보 */}
            <div className="footer-info">
              <p className="footer-address">
                (04515) 서울특별시 중구 덕수궁길 15 서울시청 서소문청사 1동 12층
              </p>
              <p className="footer-contact">
                TEL. 02)2133-4251~3 FAX. 02)768-8863
                <br />
                (연수문의: 4251, 철차상담: 4252~3)
              </p>
              <p className="footer-notice">
                ※ 조사관 출장업무로 기능하면 오전중 전화요망
              </p>

              {/* 저작권 */}
              <p className="footer-copyright">
                Copyright© 2021 ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* 오른쪽 영역 - 다산콜재단 */}
          <div className="footer-right">
            <div className="dasan-logo">
              <img src={dasanLogo} alt="120주년 다산콜재단" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
