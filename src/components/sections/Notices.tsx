import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Notices.css";

interface NoticeItem {
  id: number;
  category: "전체" | "공지사항" | "언론･보도" | "관련법령" | "분쟁조정통계현황";
  title: string;
  date: string;
  url: string;
}

const Notices = () => {
  const [activeTab, setActiveTab] = useState<
    "전체" | "공지사항" | "언론･보도" | "관련법령" | "분쟁조정통계현황"
  >("전체");

  const tabs = [
    { id: "전체", label: "전체", url: "#" },
    { id: "공지사항", label: "공지사항", url: "#" },
    { id: "언론･보도", label: "언론･보도", url: "#" },
    { id: "관련법령", label: "관련법령", url: "#" },
    { id: "분쟁조정통계현황", label: "분쟁조정통계현황", url: "#" },
  ] as const;

  const noticesData: NoticeItem[] = [
    // 공지사항
    {
      id: 1,
      category: "공지사항",
      title: "2025년 환경분쟁조정피해구제위원회 개최(19회)",
      date: "2025.12.01",
      url: "#",
    },
    // 언론･보도
    {
      id: 5,
      category: "언론･보도",
      title:
        "[보도자료] 서울시, 층간소음 등 환경 분쟁 314건 288건 해결...신속·저비용 정점(척촉).pdf",
      date: "2025.10.25",
      url: "#",
    },
    // 관련법령
    {
      id: 9,
      category: "관련법령",
      title: "서울특별시 환경분쟁조정위원회 운영에 관한 조례(2025.1.3.시행)",
      date: "2025.5.12",
      url: "#",
    },
    // 분쟁조정통계현황
    {
      id: 13,
      category: "분쟁조정통계현황",
      title:
        "[보도자료] 최근 '공사장 소음피해' 2배로 증가... 서울시 조정으로 처리시간 절반 단축",
      date: "2025.2.28",
      url: "#",
    },
    // 공지사항
    {
      id: 2,
      category: "공지사항",
      title: "환경분쟁조정위원회 정기회의 일정 안내",
      date: "2025.11.15",
      url: "#",
    },
    {
      id: 3,
      category: "공지사항",
      title: "2025년 하반기 환경분쟁조정 신청 접수 안내",
      date: "2025.10.20",
      url: "#",
    },
    {
      id: 4,
      category: "공지사항",
      title: "환경분쟁조정제도 개선 방안 공청회 개최",
      date: "2025.09.28",
      url: "#",
    },
    // 언론･보도
    {
      id: 6,
      category: "언론･보도",
      title:
        "[보도자료] 최근 '공사장 소음피해' 2배로 증가... 서울시 조정으로 처리시간 절반 단축",
      date: "2025.10.10",
      url: "#",
    },
    {
      id: 7,
      category: "언론･보도",
      title: "[보도자료] 서울시, 환경분쟁조정 만족도 95% 달성",
      date: "2025.09.15",
      url: "#",
    },
    {
      id: 8,
      category: "언론･보도",
      title: "[보도자료] 대기오염 피해 분쟁조정 신청 증가세",
      date: "2025.08.22",
      url: "#",
    },
    // 관련법령
    {
      id: 10,
      category: "관련법령",
      title: "환경분쟁 조정 및 환경피해 구제 등에 관한 법률",
      date: "2025.4.20",
      url: "#",
    },
    {
      id: 11,
      category: "관련법령",
      title: "소음·진동관리법 시행령 개정안",
      date: "2025.3.15",
      url: "#",
    },
    {
      id: 12,
      category: "관련법령",
      title: "환경분쟁조정법 시행규칙 일부개정령",
      date: "2025.2.08",
      url: "#",
    },
    // 분쟁조정통계현황
    {
      id: 14,
      category: "분쟁조정통계현황",
      title: "2024년 환경분쟁조정 통계 현황",
      date: "2025.1.15",
      url: "#",
    },
    {
      id: 15,
      category: "분쟁조정통계현황",
      title: "2024년 상반기 층간소음 분쟁조정 처리 현황",
      date: "2024.12.10",
      url: "#",
    },
    {
      id: 16,
      category: "분쟁조정통계현황",
      title: "환경분쟁조정 유형별 처리 현황 분석 보고서",
      date: "2024.11.25",
      url: "#",
    },
  ];

  const filteredNotices =
    activeTab === "전체"
      ? noticesData
      : noticesData.filter((notice) => notice.category === activeTab);

  const handleNoticeClick = (url: string) => {
    if (url && url !== "#") {
      window.location.href = url;
    }
  };

  const handleMoreClick = () => {
    const currentTab = tabs.find((tab) => tab.id === activeTab);
    if (currentTab && currentTab.url && currentTab.url !== "#") {
      window.location.href = currentTab.url;
    }
  };

  return (
    <section className="notices-section">
      <div className="container">
        <h5 className="section-title" data-aos="fade-up">
          공지사항
        </h5>

        {/* 탭 메뉴와 더보기 버튼 */}
        <div className="notices-header" data-aos="fade-up" data-aos-delay="100">
          <div className="notices-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`notices-tab ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() =>
                  setActiveTab(
                    tab.id as
                      | "전체"
                      | "공지사항"
                      | "언론･보도"
                      | "관련법령"
                      | "분쟁조정통계현황"
                  )
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="notices-more-btn" onClick={handleMoreClick}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        {/* 공지사항 카드 리스트 */}
        <div className="notices-grid" data-aos="fade-up" data-aos-delay="200">
          {filteredNotices.slice(0, 4).map((notice) => (
            <div
              key={notice.id}
              className="notice-card"
              onClick={() => handleNoticeClick(notice.url)}
            >
              <div className={`notice-category ${notice.category}`}>
                {notice.category}
              </div>
              <h3 className="notice-title">{notice.title}</h3>
              <p className="notice-date">{notice.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notices;
