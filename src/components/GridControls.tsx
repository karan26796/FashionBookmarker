import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { ArrowDownAZ, ArrowUpAZ, Filter } from "lucide-react";

interface GridControlsProps {
  onSortChange?: (value: string) => void;
  onFilterChange?: (value: string) => void;
  sortOrder?: "asc" | "desc";
  currentFilter?: string;
}

const GridControls = ({
  onSortChange = () => {},
  onFilterChange = () => {},
  sortOrder = "asc",
  currentFilter = "all",
}: GridControlsProps) => {
  return (
    <div className="w-full h-[60px] bg-background border-b flex items-center justify-between px-4 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <Select defaultValue={currentFilter} onValueChange={onFilterChange}>
          <SelectTrigger className="w-[180px]">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Items</SelectItem>
            <SelectItem value="clothing">Clothing</SelectItem>
            <SelectItem value="shoes">Shoes</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue={sortOrder} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            {sortOrder === "asc" ? (
              <ArrowUpAZ className="w-4 h-4 mr-2" />
            ) : (
              <ArrowDownAZ className="w-4 h-4 mr-2" />
            )}
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Price: Low to High</SelectItem>
            <SelectItem value="desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default GridControls;
