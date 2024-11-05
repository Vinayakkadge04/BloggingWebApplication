// import React from "react";

// function Pegenation({ totalPosts, postPerPage, setCurrentPage, activePage }) {
//   let pages = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
//     pages.push(i);
//   }

//   return (
//     <>
//       <div className="pagenHandler">
//         <button className="pageButtonactive">Prev</button>
//         <div>
//           {pages.map((page, index) => {
//             return (
//               <button
//                 className={`${
//                   activePage === page ? "pageButtonactive" : "pageButton"
//                 }`}
//                 key={index}
//                 onClick={() => setCurrentPage(page)}
//               >
//                 {page}
//               </button>
//             );
//           })}
//         </div>
//         <button className="pageButtonactive">Next</button>
//       </div>
//     </>
//   );
// }

// export default Pegenation;

import React from "react";

function Pagination({ totalPosts, postPerPage, setCurrentPage, activePage }) {
  const totalPages = Math.ceil(totalPosts / postPerPage);
  const pages = [];

  // Function to handle pages to display
  const getVisiblePages = () => {
    const visiblePages = [];
    
    if (totalPages <= 4) {
      // If there are 4 or fewer pages, show all of them
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      // Display logic for more than 4 pages
      if (activePage <= 2) {
        visiblePages.push(1, 2 , '...');
      } else if (activePage > 2 && activePage < totalPages - 1) {
        visiblePages.push(1, '...', activePage, '...', totalPages);
      } else {
        visiblePages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      }
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  // Handler for previous and next buttons
  const handlePrev = () => {
    if (activePage > 1) setCurrentPage(activePage - 1);
  };

  const handleNext = () => {
    if (activePage < totalPages) setCurrentPage(activePage + 1);
  };

  return (
    <div className="pagenHandler">
      <button 
        className="pageButtonactive" 
        onClick={handlePrev} 
        disabled={activePage === 1}
      >
        Prev
      </button>
      <div>
        {visiblePages.map((page, index) => (
          <button
            key={index}
            className={`${activePage === page ? "pageButtonactive" : "pageButton"}`}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
      </div>
      <button 
        className="pageButtonactive" 
        onClick={handleNext} 
        disabled={activePage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
