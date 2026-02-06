import { useNavigate } from "react-router-dom";
import "./MainVisual.css";
import mainBg from "../../assets/images/main-bg.jpg";
import visualCard01 from "../../assets/images/visual-cards01.png";
import visualCard02 from "../../assets/images/visual-cards02.png";

const MainVisual = () => {
  const navigate = useNavigate();
  const topLinks = [
    { id: 1, label: "조정위원용", url: "/committee/login" },
    { id: 2, label: "사이트맵", url: "#" },
  ];

  const actionCards = [
    {
      id: 1,
      label: "인터넷 신청",
      subLabel: "인터넷 신청하기",
      icon: visualCard01,
      url: "#",
    },
    {
      id: 2,
      label: "방문 신청",
      subLabel: "신청안내",
      icon: visualCard02,
      url: "#",
    },
  ];

  const handleNavigate = (url: string) => {
    if (url && url !== "#") {
      if (url.startsWith("/")) {
        navigate(url);
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <section
      className="main-visual"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="container">
        <div className="main-visual-content">
          <div className="main-visual-left" data-aos="fade-up">
            <span className="main-visual-badge">
              환경피해분쟁의 신속하고 공정한 해결!
            </span>
            <h1 className="main-visual-title">
              서울시환경분쟁조정
              <br />
              피해구제위원회
            </h1>
            <p className="main-visual-desc">
              우리 시민 모두의 쾌적한 환경에서
              <br />
              건강하고 행복하게 살아갈 권리가 있습니다.
            </p>
          </div>

          <div
            className="main-visual-right"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="main-visual-panel">
              <div className="main-visual-links">
                {topLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    className={`main-visual-link ${
                      link.id === 1 ? "active" : ""
                    }`}
                    onClick={() => handleNavigate(link.url)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="main-visual-cards">
                {actionCards.map((card) => (
                  <button
                    key={card.id}
                    type="button"
                    className="main-visual-card"
                    onClick={() => handleNavigate(card.url)}
                  >
                    <span className="main-visual-card-title">{card.label}</span>
                    <div className="main-visual-card-icon">
                      <img src={card.icon} alt={card.label} />
                    </div>
                    <span className="main-visual-card-sub">
                      {card.subLabel}
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="main-visual-primary"
                onClick={() => handleNavigate("/mypage/my-dispute")}
              >
                나의 분쟁조정
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainVisual;
