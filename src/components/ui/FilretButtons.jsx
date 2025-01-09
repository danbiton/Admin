import React from "react";

function FilterButtons({ setStatusFilter }) {
  return (
    <div>
      <button
        className="flex items-center gap-2 px-4 py-1 bg-amber-500 text-white rounded-xl
        hover:bg-amber-600 transition-all duration-200 transform hover:scale-105"
        onClick={() => setStatusFilter("all")}
      >
        all
      </button>
      <button
        className="flex items-center gap-2 px-4 py-1 bg-amber-500 text-white rounded-xl
        hover:bg-amber-600 transition-all duration-200 transform hover:scale-105"
        onClick={() => setStatusFilter("low")}
      >
        Low
      </button>
      <button
        className="flex items-center gap-2 px-4 py-1 bg-amber-500 text-white rounded-xl
        hover:bg-amber-600 transition-all duration-200 transform hover:scale-105"
        onClick={() => setStatusFilter("medium")}
      >
        Medium
      </button>
      <button
        className="flex items-center gap-2 px-4 py-1 bg-amber-500 text-white rounded-xl
        hover:bg-amber-600 transition-all duration-200 transform hover:scale-105"
        onClick={() => setStatusFilter("high")}
      >
        High
      </button>
    </div>
  );
}

export default FilterButtons;
