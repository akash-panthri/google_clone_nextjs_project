import Image from "next/image";
import Link from "next/link";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

export default function SearchHeader() {
  return (
    <header>
      <div className="">
        <Link href={"/"}>
          <Image
            width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
            alt="Google"
          />
        </Link>

        <div className="">
          <RiSettings3Line/>
          <TbGridDots/>
        </div>
        <button>
          Sign in
        </button>
      </div>
    </header>
  );
}
