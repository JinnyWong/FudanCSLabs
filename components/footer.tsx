import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-15 bottom-0 bg-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-gray-500 text-xs">
          Copyright © 2024 Jinny Wong. For non-profit and sharing purposes only.
        </p>
        <Link href="mailto:jinnywong2002@gmail.com">
          <p className="text-gray-600 text-xs underline">
            Contact me via email
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
