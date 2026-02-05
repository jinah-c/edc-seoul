import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const recommendedKeywords = ["전체", "공사장", "층간소음", "환경법령"];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("검색어:", searchTerm);
      // 실제 검색 로직 구현
    }
  };

  const handleKeywordClick = (keyword: string) => {
    setSearchTerm(keyword);
    console.log("검색어:", keyword);
    // 실제 검색 로직 구현
  };

  return (
    <section className="search-section">
      <div className="container">
        <h5 className="section-title" data-aos="fade-up">
          분쟁조정사례 검색하기
        </h5>

        {/* 검색창 */}
        <form
          className="search-form"
          onSubmit={handleSearch}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="분쟁조정 및 정보사례를 검색해보세요!"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>

        {/* 검색 추천어 */}
        <div
          className="search-keywords"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {recommendedKeywords.map((keyword, index) => (
            <button
              key={index}
              className="search-keyword"
              onClick={() => handleKeywordClick(keyword)}
            >
              #{keyword}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
