import { Link } from "react-router-dom";
import "./QuickMenu.css";
import quick01 from "../../assets/images/quick-01.png";
import quick02 from "../../assets/images/quick-02.png";
import quick03 from "../../assets/images/quick-03.png";
import quick04 from "../../assets/images/quick-04.png";
import quick05 from "../../assets/images/quick-05.png";
import quick06 from "../../assets/images/quick-06.png";

interface MenuItem {
  id: number;
  title: string;
  icon?: string;
  url: string;
}

const QuickMenu = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: "분쟁조정안내",
      icon: quick01,
      url: "/env/info",
    },
    {
      id: 2,
      title: "서식다운로드",
      icon: quick02,
      url: "#",
    },
    {
      id: 3,
      title: "분쟁조정신청",
      icon: quick03,
      url: "/dispute/internet-apply",
    },
    {
      id: 4,
      title: "수수료계산기",
      icon: quick04,
      url: "#",
    },
    {
      id: 5,
      title: "안내책자 다운로드",
      icon: quick05,
      url: "#",
    },
    {
      id: 6,
      title: "홍보동영상",
      icon: quick06,
      url: "#",
    },
  ];

  return (
    <section className="quick-menu-section">
      <div className="container">
        <div className="quick-menu-grid" data-aos="fade-up">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              className="quick-menu-item"
              to={item.url}
            >
              <div className="quick-menu-icon">
                {item.icon && <img src={item.icon} alt="" aria-hidden="true" />}
              </div>
              <p className="quick-menu-title">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickMenu;
