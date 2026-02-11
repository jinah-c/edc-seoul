import { useState, useEffect, useRef } from "react";
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
  const gnbRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileCloseButtonRef = useRef<HTMLButtonElement>(null);

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
      
      // 모바일 메뉴 열림: Masthead 내 버튼들을 먼저 포커스하도록 설정
      setTimeout(() => {
        // Masthead 내 첫 번째 포커스 가능한 요소 찾기
        const masthead = document.querySelector(".masthead");
        if (masthead) {
          const focusableElements = masthead.querySelectorAll("button, a");
          if (focusableElements.length > 0) {
            (focusableElements[0] as HTMLElement).focus();
          }
        }
      }, 0);
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

  // Tab 키로 포커스가 GNB 밖으로 나갈 때 메뉴 닫기
  const handleGNBKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Tab") {
      // setTimeout으로 다음 포커스 대상을 확인
      setTimeout(() => {
        const gnbElement = gnbRef.current;
        const focusedElement = document.activeElement;
        
        // 포커스가 GNB 밖으로 나갔으면 메뉴 닫기
        if (gnbElement && focusedElement && !gnbElement.contains(focusedElement)) {
          setActiveMenu(null);
        }
      }, 0);
    }
  };

  // 모바일 메뉴 포커스 트래핑 및 키보드 이벤트 처리
  const handleMobileMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // ESC 키로 모바일 메뉴 닫기
    if (e.key === "Escape") {
      setIsMobileMenuOpen(false);
      return;
    }

    // Tab 키 포커스 트래핑
    if (e.key === "Tab") {
      const mobileMenu = mobileMenuRef.current;
      if (!mobileMenu) return;

      // 모바일 메뉴 내 모든 포커스 가능한 요소 수집
      const focusableSelectors = [
        "button:not(:disabled):not(.mobile-menu-btn)",
        "a[href]",
        "[tabindex]:not([tabindex='-1'])",
      ];

      // Masthead 내 포커스 가능한 요소만 수집 (다른 헤더 요소는 제외)
      // .masthead-nav 내부의 버튼만 수집
      const mastheadNav = document.querySelector(".masthead-nav");
      let focusableElements: Element[] = [];

      if (mastheadNav) {
        const mastheadFocusables = Array.from(
          mastheadNav.querySelectorAll(focusableSelectors.join(","))
        );
        focusableElements = mastheadFocusables;
      }

      // 모바일 메뉴 내 포커스 가능한 요소 (모바일 메뉴 오버레이 직접 자식만)
      const menuFocusables = Array.from(
        mobileMenu.querySelectorAll(focusableSelectors.join(","))
      ).filter((el) => {
        // 모바일 메뉴 오버레이 내부의 요소만 포함
        // Masthead와 다른 헤더 요소는 제외
        return mobileMenu.contains(el) && !document.querySelector(".masthead")?.contains(el);
      });

      focusableElements = [...focusableElements, ...menuFocusables];

      // 디버깅: 모든 포커스 가능한 요소 출력
      console.log("=== 포커스 가능한 모든 요소 ===");
      focusableElements.forEach((el, index) => {
        const element = el as HTMLElement;
        const info = {
          index,
          tag: element.tagName,
          text: element.textContent?.trim().substring(0, 30),
          className: element.className,
          id: element.id,
          ariaLabel: element.getAttribute('aria-label'),
          element: element,
        };
        console.log(`${index}: ${element.tagName} | 텍스트: "${element.textContent?.trim().substring(0, 30)}" | 클래스: ${element.className}`, info);
      });

      const focusedElement = document.activeElement;
      console.log("현재 포커스:", focusedElement?.tagName, (focusedElement as HTMLElement)?.textContent?.trim());

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Shift + Tab (역방향)
      if (e.shiftKey) {
        if (focusedElement === firstElement) {
          e.preventDefault();
          (lastElement as HTMLElement).focus();
        }
      }
      // Tab (정방향)
      else {
        if (focusedElement === lastElement) {
          e.preventDefault();
          (firstElement as HTMLElement).focus();
        }
      }
    }
  };

  const menuData: MenuItem[] = [
    {
      id: 1,
      label: "환경분쟁조정안내",
      title: "환경분쟁조정안내",
      description: "환경분쟁조정 제도에 대해 알아보세요",
      image: submenuImg01,
      subMenus: [
        { id: 1, label: "제도안내", url: "/env/guidance" },
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
      description: "환경분쟁조정신청 관련 안내",
      image: submenuImg02,
      subMenus: [
        { id: 1, label: "인터넷신청", url: "/dispute/internet-apply" },
        { id: 2, label: "방문신청", url: "#" },
        { id: 3, label: "수수료계산기", url: "#" },
      ],
    },
    {
      id: 3,
      label: "정보자료",
      title: "정보자료",
      description: "필요한 정보를 찾아보세요",
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
      description: "새로운 소식을 전해드립니다",
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
      description: "위원회에 대해 알아보세요",
      image: submenuImg05,
      subMenus: [
        { id: 1, label: "위원회 설립목적", url: "#" },
        { id: 2, label: "위원회", url: "#" },
        { id: 3, label: "자치구관련부서", url: "#" },
        { id: 4, label: "찾아오시는 길", url: "#" },
      ],
    },
  ];

  const handleLogoClick = () => {
    window.location.href = "/edc-seoul/";
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
          <nav 
            className="header-gnb"
            ref={gnbRef}
            onKeyDown={handleGNBKeyDown}
          >
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
        <div 
          className="mobile-menu-overlay"
          ref={mobileMenuRef}
          onKeyDown={handleMobileMenuKeyDown}
        >
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <div
                className="mobile-menu-logo"
                onClick={() => {
                  window.location.href = "/edc-seoul/";
                }}
              >
                <img src={headerLogoM} alt="환경분쟁조정피해구제위원회" />
              </div>
              <button
                ref={mobileCloseButtonRef}
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
              
                {/* 조정위원용 버튼 */}
                <button
                  className="mobile-menu-item"
                  onClick={() => {
                    navigate("/committee/login");
                    setIsMobileMenuOpen(false);
                  }}
                >
                    <span className="mobile-menu-title" style={{ marginBottom: 0 }}>조정위원용</span>
                    <div style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", color: "var(--gray-400)" }}>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </button>
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
