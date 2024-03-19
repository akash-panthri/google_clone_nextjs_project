import React from 'react'
import { RxCross2 } from "react-icons/rx"
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  return (
    <form>
    <input type="text" />
    <RxCross2 />
    <BsFillMicFill />
    <AiOutlineSearch />
    
    </form>
  )
}
