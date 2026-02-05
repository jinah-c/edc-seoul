import { useState, useEffect } from "react";
import "./Cases.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

interface CaseItem {
  id: number;
  category: "공사장" | "층간소음" | "기타";
  title: string;
  date: string;
  url: string;
}

const Cases = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const casesData: CaseItem[] = [
    {
      id: 1,
      category: "공사장",
      title:
        "교회 신축공사 소음, 진동으로 인한 정신적, 건축물 피해에 대해 81,200천원의 배상을 요구하는 환경분쟁조정(재정) 신청사건",
      date: "2025.11.27",
      url: "#",
    },
    {
      id: 2,
      category: "층간소음",
      title:
        "공동주택 층간소음으로 인한 정신적 피해에 대해 4,000천원의 배상을 요구하는 환경분쟁조정(재정) 신청사건",
      date: "2025.10.12",
      url: "#",
    },
    {
      id: 3,
      category: "공사장",
      title:
        "교회 신축공사 소음, 진동으로 인한 정신적, 건축물 피해에 대해 81,200천원의 배상을 요구하는 환경분쟁조정(재정) 신청사건",
      date: "2025.11.27",
      url: "#",
    },
    {
      id: 4,
      category: "층간소음",
      title:
        "공동주택 층간소음으로 인한 정신적 피해에 대해 10,000천원의 배상을 요구하는 환경분쟁조정(재정) 신청사건",
      date: "2024.12.26",
      url: "#",
    },
    {
      id: 5,
      category: "공사장",
      title:
        "교회 신축공사 소음, 진동으로 인한 정신적, 건축물 피해에 대해 81,200천원의 배상을 요구하는 환경분쟁조정(재정) 신청사건",
      date: "2025.11.27",
      url: "#",
    },
    {
      id: 6,
      category: "층간소음",
      title:
        "공동주택 층간소음으로 인한 정신적 피해에 대해 10,000천원의 배상을 요구하는 환경분쟁조정(재정) 신청사건",
      date: "2024.12.26",
      url: "#",
    },
  ];

  const handleCaseClick = (url: string) => {
    if (url && url !== "#") {
      window.location.href = url;
    }
  };

  return (
    <section className="cases-section">
      <div className="container">
        <div className="cases-header" data-aos="fade-up">
          <div className="cases-header-content">
            <h5 className="section-title">분쟁조정사례</h5>
            <div className="cases-description">
              <p>
                서울특별시 환경분쟁조정피해구제위원회가 수행한 환경분쟁조정
                사례를 알려드립니다.
              </p>
              <p>
                조정신청을 하시기 전에 비슷한 사례를 검색하여 참고하시기
                바랍니다.
              </p>
            </div>
          </div>
        </div>

        <div className="cases-grid" data-aos="fade-up" data-aos-delay="100">
          {(isMobile ? casesData.slice(0, 4) : casesData).map((caseItem) => (
            <div
              key={caseItem.id}
              className="case-card"
              onClick={() => handleCaseClick(caseItem.url)}
            >
              <div className="case-category">{caseItem.category}</div>
              <h3 className="case-title">{caseItem.title}</h3>
              <p className="case-date">{caseItem.date}</p>
            </div>
          ))}
        </div>

        {/* 분쟁조정사례 더보기 버튼 */}
        <div className="cases-more" data-aos="fade-up" data-aos-delay="200">
          <a href="#" className="cases-more-btn">
            분쟁조정사례 더보기
            <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cases;
