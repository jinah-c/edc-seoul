import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./FloatingMenu.css";

// 아이콘 import
import icon01 from "../../assets/images/floating-icon-01.svg";
import icon02 from "../../assets/images/floating-icon-02.svg";
import icon03 from "../../assets/images/floating-icon-03.svg";
import icon04 from "../../assets/images/floating-icon-04.svg";
import icon05 from "../../assets/images/floating-icon-05.svg";
import icon06 from "../../assets/images/floating-icon-06.svg";
import icon07 from "../../assets/images/floating-icon-07.svg";

interface MenuItem {
  id: number;
  title: string;
  icon: string;
  link: string;
}

const FloatingMenu = () => {
  const menuItems: MenuItem[] = [
    { id: 1, title: "분쟁조정안내", icon: icon01, link: "#" },
    { id: 2, title: "서식다운로드", icon: icon02, link: "#" },
    { id: 3, title: "분쟁조정사례", icon: icon03, link: "#" },
    { id: 4, title: "분쟁조정FAQ", icon: icon04, link: "#" },
    { id: 5, title: "분쟁조정신청", icon: icon05, link: "#" },
    { id: 6, title: "수수료계산기", icon: icon06, link: "#" },
    { id: 7, title: "찾아오시는길", icon: icon07, link: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMenuClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="floating-menu">
      <div className="floating-menu-container">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="floating-menu-item"
            onClick={() => handleMenuClick(item.link)}
          >
            <img src={item.icon} alt={item.title} className="floating-icon" />
            <span className="floating-title">{item.title}</span>
          </button>
        ))}

        <button className="floating-top-btn" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faChevronUp} />
          <span>TOP</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingMenu;
