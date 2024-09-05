import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="z-50 w-full h-15 sticky top-0 bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-black text-xl font-bold flex items-center"
        >
          <Image
            src="icon.svg"
            alt="Website logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Fudan CS Labs
        </Link>
        <div className="flex space-x-10">
          <Link href="/submission" className="text-black font-semibold hover:text-gray-300">
            Submit a Lab
          </Link> 
          <Link
            href="https://www.fudan.edu.cn/en/2019/0515/c295a96709/page.htm"
            className="text-black font-semibold hover:text-gray-300"
          >
            Fudan CS →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;