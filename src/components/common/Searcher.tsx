"use client";

import { useDebounce } from "@/hooks";
import { Input, InputProps } from "@nextui-org/react";
import { useState, useEffect, memo, useRef } from "react";
import { Icon } from "./icon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props extends InputProps {}
const SearcherComponent = ({ ...rest }: Props) => {
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search") || "");
  const pathName = usePathname();
  const { replace } = useRouter();
  const search = useDebounce(value);
  const fistRender = useRef(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  useEffect(() => {
    if (fistRender.current) {
      fistRender.current = false;
      return;
    }
    if (search === "") {
      replace(`${pathName}`);
    } else {
      replace(`${pathName}?search=${search}`);
    }
  }, [replace, pathName, search]);

  return (
    <Input
      color="default"
      ref={inputRef}
      startContent={<Icon name="search" />}
      onValueChange={(v) => setValue(v || "")}
      value={value}
      aria-label="Buscar"
      {...rest}
    />
  );
};

export const Searcher = memo(SearcherComponent);
