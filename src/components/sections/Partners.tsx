import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import "./Partners.css";

// 파트너 로고 이미지 import
import partner01 from "../../assets/images/partners-01.png";
import partner02 from "../../assets/images/partners-02.png";
import partner03 from "../../assets/images/partners-03.png";
import partner04 from "../../assets/images/partners-04.png";
import partner05 from "../../assets/images/partners-05.png";
import partner06 from "../../assets/images/partners-06.png";
import partner07 from "../../assets/images/partners-07.png";
import partner08 from "../../assets/images/partners-08.png";

interface Partner {
  id: number;
  name: string;
  logo: string;
  url: string;
}

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const getItemsPerSlide = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth <= 576) return 2;
    if (window.innerWidth <= 768) return 2.5;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  };
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);

  // 파트너 데이터
  const partners: Partner[] = [
    {
      id: 1,
      name: "국토교통부 건축분쟁전문위원회",
      logo: partner01,
      url: "https://www.adm.go.kr/com/mobileForm.do",
    },
    {
      id: 2,
      name: "대한민국법원 전자민원센터",
      logo: partner02,
      url: "https://ecfs.scourt.go.kr/psp/index.on",
    },
    {
      id: 3,
      name: "정부24",
      logo: partner03,
      url: "https://plus.gov.kr/",
    },
    {
      id: 4,
      name: "서울에너지드림센터",
      logo: partner04,
      url: "https://seouledc.or.kr/",
    },
    {
      id: 5,
      name: "SEOUL MY SOUL",
      logo: partner05,
      url: "https://www.seoul.go.kr/newbrand/",
    },
    {
      id: 6,
      name: "좋은 빛 정보센터",
      logo: partner06,
      url: "https://www.seoul.go.kr/newbrand/",
    },
    {
      id: 7,
      name: "서울에너지드림센터",
      logo: partner07,
      url: "https://www.ehtis.or.kr/onestop/contents/mainPage.do",
    },
    {
      id: 8,
      name: "석면피해구제시스템",
      logo: partner08,
      url: "https://www.ehtis.or.kr/onestop/contents/mainPage.do",
    },
  ];

  const loopLength = partners.length;
  const displayPartners = [...partners, ...partners];
  const autoPlayInterval = 5000; // 자동재생 간격(느리게)
  const slideTransitionMs = 500;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? loopLength - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // 화면 크기에 따라 슬라이드 노출 개수 동기화 (CSS 브레이크포인트와 동일)
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 노출 개수 변경 시 현재 인덱스가 범위를 넘지 않도록 보정
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, loopLength));
  }, [loopLength]);

  // 자동재생: 재생 상태일 때 일정 간격으로 다음 슬라이드 이동
  useEffect(() => {
    if (!isPlaying || loopLength === 0) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [isPlaying, loopLength, autoPlayInterval]);

  // 마지막 요소 다음(복제 구간)으로 이동했을 때, 트랜지션 없이 처음 위치로 점프
  useEffect(() => {
    if (currentIndex < loopLength) return;

    const timer = window.setTimeout(() => {
      setIsTransitionEnabled(false);
      setCurrentIndex(0);

      // 다음 프레임에서 트랜지션 복구
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });
    }, slideTransitionMs);

    return () => window.clearTimeout(timer);
  }, [currentIndex, loopLength]);

  const handlePartnerClick = (url: string) => {
    if (url && url !== "#" && url !== "") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-wrapper" data-aos="fade-up">
          {/* 왼쪽: 타이틀과 버튼 */}
          <div className="partners-left">
            <h5 className="partners-title">함께하는 기관</h5>
            <div className="partners-controls">
              <button
                className="partners-btn partners-btn-prev"
                onClick={handlePrev}
                aria-label="이전"
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button
                className={`partners-btn partners-btn-pause ${
                  !isPlaying ? "paused" : ""
                }`}
                onClick={togglePlay}
                aria-label={isPlaying ? "일시정지" : "재생"}
              >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </button>
              <button
                className="partners-btn partners-btn-next"
                onClick={handleNext}
                aria-label="다음"
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>

          {/* 오른쪽: 슬라이더 */}
          <div className="partners-slider">
            <div
              className="partners-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerSlide)
                }%)`,
                transition: isTransitionEnabled
                  ? `transform ${slideTransitionMs}ms ease`
                  : "none",
              }}
            >
              {displayPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="partner-item"
                  onClick={() => handlePartnerClick(partner.url)}
                >
                  <div className="partner-logo">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} />
                    ) : (
                      <div className="partner-placeholder">{partner.name}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
