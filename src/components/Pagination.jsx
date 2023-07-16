import { useContext } from "react";
import { AppContext } from "./../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPage } = useContext(AppContext);
  return (
    <div className=" w-full flex justify-center items-center fixed bottom-0 bg-white ">
      <div className="flex py-2   gap-10 w-11/12 max-w-[650px] ">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-5 p-2 border-dashed hover:border hover:border-blue-900 border-blue-500 bg-sky-400 hover:bg-transparent"
          >
            Previous
          </button>
        )}

        {page < totalPage && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-5 p-2 border-dashed hover:border hover:border-blue-900 border-blue-500 bg-sky-400 hover:bg-transparent"
          >
            Next
          </button>
        )}

        <p>
          Page {page} of {totalPage}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
