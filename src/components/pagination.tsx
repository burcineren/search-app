import { usePagination, DOTS } from "../hooks/UsePagination";

 function Pagination(props:any) {
  const { onPageChange, totalCount, siblingCount, currentPage, pageSize } =
    props;

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 1)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage;

  if(paginationRange){
    lastPage = paginationRange[paginationRange.length - 1];
  }

  return (
    <ul className="paginate-container">
      <li className= {`previous-button ${currentPage === 1 ? "disabled" : ""}`} onClick={() => onPrevious()}>
        Previous
      </li>

      {paginationRange && paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li>&#8230;</li>;
        }

        return (
          <li
            className={`pagination-item ${ pageNumber === currentPage ? "selected": ""}`}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li className={`next-button ${currentPage === lastPage ? "disabled" : ""}`} onClick={() => onNext()}>Next</li>
    </ul>
  );
}
export default Pagination