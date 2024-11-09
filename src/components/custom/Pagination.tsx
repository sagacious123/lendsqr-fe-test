import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface PaginationProps {
  itemsPerPage: string;
  setItemsPerPage: (item: string) => void;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showItemsPerPage?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  setItemsPerPage,
  showItemsPerPage = true,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / Number(itemsPerPage));

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 9) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 4) {
        pages.push("....");
      }

      for (
        let i = Math.max(2, currentPage - 2);
        i <= Math.min(currentPage + 2, totalPages - 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) {
        pages.push("....");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="pagination-component">
      {showItemsPerPage && (
        <div className="items-per-page">
          <span>Showing</span>
          <select
            defaultValue={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(e.target.value);
              handlePageChange(1);
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
          <span>out of 100</span>
        </div>
      )}
      <div className="pagination-nav">
        <button
          className="pagination-nav-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <BsChevronLeft />
        </button>

        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              className={`pagination-num ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="">
              {page}
            </span>
          )
        )}

        <button
          className="pagination-nav-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};
