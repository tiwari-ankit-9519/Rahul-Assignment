import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/features/userSlice";
import { LoaderIcon } from "lucide-react";
import PaginationComponent from "@/components/Pagination";
import UserTable from "@/components/UserTable";

function HomePage() {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  const { users, isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers(pageNumber));
  }, [dispatch, pageNumber]);

  const handleNextPage = () => {
    if (pageNumber < users?.total_pages) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPageNumber) => prevPageNumber - 1);
    }
  };

  return (
    <div className="p-[4%] lg:px-[5%] lg:py-[3%] h-[calc(100vh-4rem)]">
      <h1 className="text-2xl lg:text-5xl font-semibold">
        Welcome to User Management
      </h1>

      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          Loading <LoaderIcon className="animate-spin ml-2" />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full">
          <div className="mt-10">
            <UserTable users={users} />
          </div>
          <div className="w-full flex items-center justify-center">
            <PaginationComponent
              count={pageNumber}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default HomePage;
