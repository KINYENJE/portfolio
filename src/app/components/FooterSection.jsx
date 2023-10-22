import React from "react";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white -mt-12">
      <div className="container p-12 flex justify-between">
        <span>
        <Image src='/images/n-logo.png' alt='brand' width={80} height={60}  />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;