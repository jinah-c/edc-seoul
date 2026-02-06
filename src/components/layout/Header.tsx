import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import headerLogoWeb from "../../assets/images/header-logo-web.png";
import headerLogoM from "../../assets/images/header-logo-M.png";
import submenuImg01 from "../../assets/images/submenu-image01.png";
import submenuImg02 from "../../assets/images/submenu-image02.png";
import submenuImg03 from "../../assets/images/submenu-image03.png";
import submenuImg04 from "../../assets/images/submenu-image04.png";
import submenuImg05 from "../../assets/images/submenu-image05.png";

interface SubMenuItem {
  id: number;
  label: string;
  url: string;
}

interface MenuItem {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
  subMenus: SubMenuItem[];
}

const Header = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<number | null>(1);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  // 스크롤 방향 감지
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 최상단(0~200px)에서는 항상 헤더 표시
      if (currentScrollY < 200) {
        setIsHeaderHidden(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // 스크롤 방향 판단
      if (currentScrollY > lastScrollY) {
        // 아래로 스크롤 - 헤더 숨김
        setIsHeaderHidden(true);
      } else {
        // 위로 스크롤 - 헤더 표시
        setIsHeaderHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuData: MenuItem[] = [
    {
      id: 1,
      label: "환경분쟁조정안내",
      title: "환경분쟁조정안내",
      description: "환경피해 분쟁의 신속하고 공정한 해결",
      image: submenuImg01,
      subMenus: [
        { id: 1, label: "제도안내", url: "/env/info" },
        { id: 2, label: "분쟁조정 사례", url: "#" },
        { id: 3, label: "조정신청 FAQ", url: "#" },
        { id: 4, label: "인터넷상담", url: "#" },
        { id: 5, label: "방문상담예약", url: "#" },
      ],
    },
    {
      id: 2,
      label: "분쟁조정신청",
      title: "분쟁조정신청",
      description: "환경피해에 분쟁 조정을 신청하세요",
      image: submenuImg02,
      subMenus: [
        { id: 1, label: "인터넷신청", url: "#" },
        { id: 2, label: "방문신청", url: "#" },
        { id: 3, label: "수수료계산기", url: "#" },
      ],
    },
    {
      id: 3,
      label: "정보자료",
      title: "정보자료",
      description: "환경분쟁 관련 법령 및 통계자료",
      image: submenuImg03,
      subMenus: [
        { id: 1, label: "관련법령", url: "#" },
        { id: 2, label: "통계자료", url: "#" },
      ],
    },
    {
      id: 4,
      label: "알림소식",
      title: "알림소식",
      description: "위원회의 새로운 소식을 전해드립니다",
      image: submenuImg04,
      subMenus: [
        { id: 1, label: "공지사항", url: "#" },
        { id: 2, label: "보도/해명자료", url: "#" },
      ],
    },
    {
      id: 5,
      label: "위원회소개",
      title: "위원회소개",
      description: "서울시 환경분쟁조정 피해구제위원회를 소개합니다",
      image: submenuImg05,
      subMenus: [
        { id: 1, label: "위원회 설립목적", url: "/committee/purpose" },
        { id: 2, label: "위원회", url: "#" },
        { id: 3, label: "자치구관련부서", url: "#" },
        { id: 4, label: "찾아오시는길", url: "#" },
      ],
    },
  ];

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleUtilClick = (type: string) => {
    if (type === "login") {
      navigate("/login");
    } else if (type === "mypage") {
      navigate("/mypage/my-dispute");
    }
  };

  const handleSubMenuClick = (url: string) => {
    if (url.startsWith("/")) {
      navigate(url);
    } else if (url !== "#") {
      window.location.href = url;
    }
  };

  return (
    <header className={`header ${isHeaderHidden ? "header-hidden" : ""}`}>
      <div className="header-container">
        {/* 로고 */}
        <div className="header-logo" onClick={handleLogoClick}>
          <img
            src={isMobile ? headerLogoM : headerLogoWeb}
            alt="환경분쟁조정피해구제위원회"
            loading="eager"
          />
        </div>

        {/* 우측 영역 */}
        <div className="header-right">
          {/* 상단 유틸 메뉴 */}
          <div className="header-util">
            <button
              className="header-util-btn"
              onClick={() => handleUtilClick("login")}
            >
              로그인
            </button>
            <div className="header-util-divider" />
            <button
              className="header-util-btn"
              onClick={() => handleUtilClick("mypage")}
            >
              마이페이지
            </button>
          </div>

          {/* GNB */}
          <nav className="header-gnb">
            {menuData.map((menu) => (
              <div
                key={menu.id}
                className={`gnb-item ${activeMenu === menu.id ? "active" : ""}`}
                onMouseEnter={() => setActiveMenu(menu.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className="gnb-link"
                  onFocus={() => setActiveMenu(menu.id)}
                >
                  {menu.label}
                </button>

                {/* 서브메뉴 드롭다운 */}
                <div className="submenu">
                  <div className="submenu-container">
                    {/* 좌측: 타이틀 + 이미지 */}
                    <div className="submenu-left">
                      <div className="submenu-text">
                        <h3 className="submenu-title">{menu.title}</h3>
                        <p className="submenu-desc">{menu.description}</p>
                      </div>
                      <div className="submenu-image">
                        <img src={menu.image} alt={menu.title} />
                      </div>
                    </div>

                    {/* 우측: 서브메뉴 리스트 */}
                    <div className="submenu-right">
                      {menu.subMenus.map((subMenu) => (
                        <button
                          key={subMenu.id}
                          className="submenu-link"
                          onClick={() => handleSubMenuClick(subMenu.url)}
                          onFocus={() => setActiveMenu(menu.id)}
                        >
                          {subMenu.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo">
                <img src={headerLogoM} alt="환경분쟁조정피해구제위원회" />
              </div>
              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="메뉴 닫기"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="mobile-menu-content">
              <div className="mobile-menu-wrapper">
                {menuData.map((menu) => (
                  <div key={menu.id} className="mobile-menu-group">
                    {/* 1depth 메뉴 */}
                    <button
                      className={`mobile-menu-item ${
                        mobileActiveMenu === menu.id ? "active" : ""
                      }`}
                      onClick={() => setMobileActiveMenu(menu.id)}
                    >
                      <div className="mobile-menu-text">
                        <span className="mobile-menu-title">{menu.label}</span>
                        <p className="mobile-menu-desc">{menu.description}</p>
                      </div>
                      <div className="mobile-menu-image">
                        <img src={menu.image} alt={menu.label} />
                      </div>
                    </button>

                    {/* 2depth 서브메뉴 */}
                    <div
                      className={`mobile-submenu-wrapper ${
                        mobileActiveMenu === menu.id ? "active" : ""
                      }`}
                    >
                      {menu.subMenus.map((subMenu) => (
                        <button
                          key={subMenu.id}
                          className="mobile-submenu-link"
                          onClick={() => {
                            handleSubMenuClick(subMenu.url);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {subMenu.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 로그인 버튼 */}
            <div className="mobile-menu-login">
              <button onClick={() => handleUtilClick("login")}>
                로그인
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
