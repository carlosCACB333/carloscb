"use client";
import { useDebounce, usePagination } from "@/hooks";
import { searchPosts } from "@/action";
import { PostCard } from "./PostCard";
import { Button, Input } from "@nextui-org/react";
import { Icon } from "../common/icon";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SearchProps {
  onSearch: (search: string) => void;
}

const PostSearcher = ({ onSearch }: SearchProps) => {
  const [value, setValue] = useState("");
  const search = useDebounce(value);

  useEffect(() => {
    onSearch(search);
  }, [onSearch, search])

  return (
    <Input
      startContent={<Icon name="search" />}
      onValueChange={(v) => setValue(v || "")}
      value={value}
      aria-label="Buscar"
      placeholder="Buscar posts..."
      size="lg"
    />
  )
};

export const PostPaginated = () => {
  const { data, onSearch, onChangePage } = usePagination(searchPosts, 9);
  return (
    <div>
      <div className="max-w-lg mx-auto ">
        <PostSearcher onSearch={onSearch} />
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.edges.map(({ node }) => (
          <PostCard key={node.id} post={node} />
        ))}
      </div>
      {data?.pageInfo && (
        <div className="flex justify-end mt-4 gap-1">
          <Button color='primary' onClick={() => onChangePage(false)} isIconOnly disabled={!data.pageInfo.hasPreviousPage}>
            <FaArrowLeft />
          </Button>
          <Button color='primary' onClick={() => onChangePage(true)} isIconOnly disabled={!data.pageInfo.hasNextPage}>
            <FaArrowRight />
          </Button>
        </div>
      )}
    </div>
  );
};
