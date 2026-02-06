import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Breadcrumb.css";
import homeIcon from "../../assets/images/home-icon.svg";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const navigate = useNavigate();

  const handleClick = (url?: string) => {
    if (!url || url === "#") return;

    if (url.startsWith("/")) {
      navigate(url);
    } else {
      window.location.href = url;
    }
  };

  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isDisabled = !item.url || item.url === "#";

          return (
          <li key={index} className="breadcrumb-item">
            {index < items.length - 1 ? (
              <>
                <button
                  className={`breadcrumb-link ${index === 0 ? "home" : ""}`}
                  onClick={() => handleClick(item.url)}
                  aria-label={index === 0 ? "홈으로 이동" : item.label}
                  disabled={isDisabled}
                  aria-disabled={isDisabled}
                >
                  {index === 0 ? (
                    <img
                      src={homeIcon}
                      alt="홈"
                      className="breadcrumb-home-icon"
                    />
                  ) : (
                    item.label
                  )}
                </button>
                <span className="breadcrumb-separator">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
