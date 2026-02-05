import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import "./FAQ.css";
import qIcon from "../../assets/images/Qna-a.png";
import aIcon from "../../assets/images/Qna-q.png";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "공동주택의 층간소음문제는 어떻게 하여야 하는가?",
      answer:
        "공동주택의 층간소음문제는 환경분쟁조정법 시행규칙 제34조(접수) 규정에 따라 같은 원인에 의한 환경피해를 주장하는 자는 위원회의 승인을 받아 당사자로서 해당 절차에 참가할 수 있습니다.",
    },
    {
      id: 2,
      question: "'환경분쟁 조정 및 환경피해 구제 등에 관한 법률', 제2조 제3호",
      answer:
        "'환경분쟁 조정 및 환경피해 구제 등에 관한 법률',제34조(접수) 규정에 따라 같은 원인에 의한 환경피해를 주장하는 자는 위원회의 승인을 받아 당사자로서 해당 절차에 참가할 수 있습니다.",
    },
    {
      id: 3,
      question: "예외등록이 나는 소리도 환경분쟁조정의 대상이 되나요?",
      answer: "예외등록이 나는 소리도 환경분쟁조정의 대상이 될 수 있습니다.",
    },
    {
      id: 4,
      question: "환경오염행발원이 거부하도 환경분쟁조정을 신청할 수 있는가?",
      answer:
        "환경오염행발원이 거부하더라도 환경분쟁조정을 신청할 수 있습니다.",
    },
    {
      id: 5,
      question:
        "일조권 침해에 대하여도 환경분쟁조정피해구제위원회에 신청할 수 있는가 ?",
      answer: "일조권, 조망권의 민원이 건축물 단독으로 영향을 받을 경우에만 「건축법」제88조 건축분쟁전문위원회 소관이고 환경분쟁조정피해구제위원회에 접수가 되지 위해서는 「건축법」제2조제1항제8호의 건축으로 인한 일조 방해 및 조망 저해가 다른 분쟁과 복합되어 있는 경우에만 해당한다.알선과 조정은 지방환경분쟁조정피해구제위원회에서 접수하고 재정과 중재일 경우에는 중앙환경분쟁조정피해구제위원회로 신청토록 한다.",
    },
    {
      id: 6,
      question:
        "일조권 침해에 대하여도 환경분쟁조정위(해국가위원회)에 신청할 수 있는가?",
      answer: "일조권 침해에 대하여도 환경분쟁조정위원회에 신청할 수 있습니다.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h5 className="section-title" data-aos="fade-up">
          조정신청 FAQ
        </h5>

        <div className="faq-list" data-aos="fade-up" data-aos-delay="100">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${openId === item.id ? "open" : ""}`}
            >
              {/* 질문 영역 */}
              <div className="faq-question" onClick={() => toggleFAQ(item.id)}>
                <div className="faq-question-content">
                  <div className="faq-icon faq-icon-q">
                    <img src={qIcon} alt="Q" />
                  </div>
                  <p className="faq-question-text">{item.question}</p>
                </div>
                <button className="faq-toggle-btn" aria-label="펼치기/접기">
                  <FontAwesomeIcon
                    icon={openId === item.id ? faChevronUp : faChevronDown}
                  />
                </button>
              </div>

              {/* 답변 영역 */}
              {openId === item.id && (
                <div className="faq-answer">
                  <div className="faq-icon faq-icon-a">
                    <img src={aIcon} alt="A" />
                  </div>
                  <div className="faq-answer-content">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ 더보기 버튼 */}
        <div className="faq-more" data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://edc.seoul.go.kr/index.do?nMenuCode=17"
            target="_blank"
            rel="noopener noreferrer"
            className="faq-more-btn"
          >
            FAQ 더보기
            <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
