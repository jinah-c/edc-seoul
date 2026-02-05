import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface PageHeaderProps {
  breadcrumbItems: BreadcrumbItem[];
}

const PageHeader = ({ breadcrumbItems }: PageHeaderProps) => {
  const handleDownload = () => {
    window.print();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-header">
      <Breadcrumb items={breadcrumbItems} />

      <div className="page-actions">
        <button
          className="page-action-btn"
          onClick={handleDownload}
          aria-label="다운로드"
          // title="새창으로 열기"
        >
          <FontAwesomeIcon icon={faDownload} />
        </button>
        <button
          className="page-action-btn"
          // title="현재화면 인쇄하기"
          onClick={handlePrint}
          aria-label="인쇄"
        >
          <FontAwesomeIcon icon={faPrint} />
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
