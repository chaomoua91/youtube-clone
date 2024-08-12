import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CategoryPills({ categories, selectedCategory, onSelect }) {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  return (
    <>
      <div className="overflow-x-hidden relative">
        <div
          className="flex whitespace-nowrap gap-3 
                    transition-transform w-[max-content]"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "dark" : "default"}
              className={`py-1 px-3 rounded-lg whitespace-nowrap ${
                category === selectedCategory ? "bg-blue-500" : ""
              }`}
              onClick={() => onSelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        {isLeftVisible && (
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2
            bg-gradient-to-r from-white from-50% to-transparent w-24 h-full"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-full aspect-square w-auto p-1.5"
            >
              <ChevronLeft />
            </Button>
          </div>
        )}
        {isRightVisible && (
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2
            bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-full aspect-square w-auto p-1.5"
            >
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

CategoryPills.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default CategoryPills;
