"use client";


import { usePathname, useSearchParams } from "next/navigation";
export default function PaginationButtons() {
    const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div>PaginationButtons</div>
  )
}
