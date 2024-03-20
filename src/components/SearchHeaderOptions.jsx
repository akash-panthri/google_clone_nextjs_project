"use client"


import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
    const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  function selectTab(tab) {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  }
  return (
    <div>
    <div onClick={()=>selectTab("All")} >
        <AiOutlineSearch />
        <p>All</p>
      </div>
      <div onClick={()=>selectTab("Images")} >
        <AiOutlineCamera />
        <p>Images</p>
      </div>
    </div>
  )
}
