import { useState, useEffect } from "react";
import "./Masthead.css";
import seoulLogo from "../../assets/images/seoul-logo.png";

const Masthead = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { id: 1, label: "서울소식", url: "#" },
    { id: 2, label: "응답소", url: "#" },
    { id: 3, label: "정보공개", url: "#" },
    { id: 4, label: "분야별정보", url: "#" },
  ];

  // 스크롤 방향 감지
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 최상단(0~200px)에서는 항상 표시
      if (currentScrollY < 200) {
        setIsHeaderHidden(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // 스크롤 방향 판단
      if (currentScrollY > lastScrollY) {
        // 아래로 스크롤 - 숨김
        setIsHeaderHidden(true);
      } else {
        // 위로 스크롤 - 표시
        setIsHeaderHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenuClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className={`masthead ${isHeaderHidden ? "masthead-hidden" : ""}`}>
      <div className="masthead-container">
        <a
          href="https://www.seoul.go.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="masthead-logo"
          aria-label="서울특별시 홈페이지 (새 창으로 열림)"
        >
          <img src={seoulLogo} alt="서울특별시" />
        </a>
        <nav className="masthead-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="masthead-link"
              onClick={() => handleMenuClick(item.url)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Masthead;
