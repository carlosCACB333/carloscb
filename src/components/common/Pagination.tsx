'use client'
import React from "react";
import { Button, } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  hasNext: boolean,
  hasPrevious: boolean,
  skip: number,
  pageSize: number,
}
export const Pagination = ({ hasNext, hasPrevious, pageSize, skip, }: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams)

  const onPrev = () => {
    if (!hasPrevious) return;
    const newSkip = skip ? skip - pageSize : 0;
    params.set('skip', newSkip.toString())
    router.push(`${pathName}?${params.toString()}`);

  }
  const onNext = () => {
    if (!hasNext) return;
    const newSkip = skip ? skip + pageSize : pageSize;
    params.set('skip', newSkip.toString())
    router.push(`${pathName}?${params.toString()}`);

  }
  return (
    <div className="flex justify-end items-center mt-4 gap-2">
      <Button color="primary" disabled={!hasPrevious} onClick={onPrev} isIconOnly>
        <FaChevronLeft />
      </Button>
      <Button color="primary" disabled={!hasNext} onClick={onNext} isIconOnly>
        <FaChevronRight />
      </Button>
    </div>
  )

};
