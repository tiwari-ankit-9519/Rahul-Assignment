import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const Pagination = ({ count, handleNextPage, handlePrevPage }) => {
  return (
    <div className="flex items-center gap-2">
      <ArrowLeftCircle onClick={handlePrevPage} />
      <span className="px-4 py-2">{count}</span>
      <ArrowRightCircle onClick={handleNextPage} />
    </div>
  );
};

export default Pagination;
