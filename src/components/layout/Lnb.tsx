import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Lnb.css";
import quick01 from "../../assets/images/quick-01.png";
import quick03 from "../../assets/images/quick-03.png";
import bookIcon from "../../assets/images/book-icon.png";
import submenuImg04 from "../../assets/images/submenu-image04.png";
import submenuImg05 from "../../assets/images/submenu-image05.png";
import myIcon from "../../assets/images/my-icon.png";

interface LnbMenuItem {
  id: string;
  label: string;
  url: string;
}

interface LnbProps {
  title: string;
  menuItems: LnbMenuItem[];
  activeId?: string;
  icon?: string;
}

// 카테고리별 아이콘 매핑
const categoryIcons: { [key: string]: string } = {
  환경분쟁조정안내: quick01,
  분쟁조정신청: quick03,
  정보자료: bookIcon,
  알림소식: submenuImg04,
  위원회소개: submenuImg05,
  마이페이지: myIcon,
};

const Lnb = ({ title, menuItems, activeId }: LnbProps) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(activeId || menuItems[0]?.id);

  const handleMenuClick = (id: string, url: string) => {
    setActiveMenu(id);
    if (!url || url === "#") return;

    if (url.startsWith("/")) {
      navigate(url);
    } else {
      window.location.href = url;
    }
  };

  const iconSrc = categoryIcons[title] || submenuImg05;

  return (
    <aside className="lnb">
      <div className="lnb-wrapper">
        <div className="lnb-header">
          <div className="lnb-icon">
            <img src={iconSrc} alt={title} />
          </div>
          <h2 className="lnb-title">{title}</h2>
        </div>

        <nav className="lnb-nav">
          <ul className="lnb-menu">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`lnb-menu-item ${
                  activeMenu === item.id ? "active" : ""
                }`}
              >
                <button
                  className={`lnb-menu-link ${
                    activeMenu === item.id ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick(item.id, item.url)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Lnb;
