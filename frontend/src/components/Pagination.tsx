"use client";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  page,
  setPage,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-10">

      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className="bg-blue-600 text-white px-5 py-2 rounded disabled:bg-gray-400"
      >
        Previous
      </button>

      <span className="font-bold text-xl">
        {page}
      </span>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Next
      </button>

    </div>
  );
}