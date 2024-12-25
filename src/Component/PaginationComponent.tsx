interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setPage,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };
  return (
    <div className="flex items-center justify-end space-x-2 mt-4">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 text-sm font-medium border rounded ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-300 text-gray-600"
            : "hover:bg-[#1572d3] hover:text-white border-[#1572d3]"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            className={`px-3 py-1 text-sm font-medium border rounded ${
              page === currentPage
                ? "bg-blue-500 text-white border-blue-500"
                : "hover:bg-blue-500 hover:text-white border-gray-300"
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        className={`px-3 py-1 text-sm font-medium border rounded ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-gray-300 text-gray-600"
            : "hover:bg-blue-500 hover:text-white border-blue-500"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
