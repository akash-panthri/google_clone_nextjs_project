"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from "next/navigation";
export default function PaginationButtons() {
    const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div>{startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="">
            <p>Previous</p>
          </div>
        </Link>
      )}</div>
  )
}
