import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <main className=" h-[80px] flex justify-between items-center  text-gray-800">
        <Link href="/">
          <div className=" ml-7 pl-7 font-bold text-2xl">
            StripeEarningsBoard 💰
          </div>
        </Link>
        <div className=" mr-7 pr-7 flex gap-5 text-lg font-semibold">
          <Link href="/tos">Terms Of Services</Link>
          <Link href="/pp">Privacy Policy</Link>
        </div>
      </main>
      <small className="text-center flex justify-center items-center text-gray-600 pb-4">
        &copy; 2024 EarningsBoard. All rights reserved.
      </small>
    </div>
  );
};

export default Footer;
