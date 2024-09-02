import Link from "next/link";

const Header = () => {
  return (
    <main className=" h-[80px] flex justify-between items-center  text-gray-800">
      <Link href="/">
        <div className=" ml-7 pl-7 font-bold text-2xl">
          StripeEarningsBoard 💰
        </div>
      </Link>
      <div className=" mr-7 pr-7 flex gap-5 text-xl font-semibold">
        <Link href="/#board">Live Demo</Link>
        <Link href="/#faq">FAQ</Link>
      </div>
    </main>
  );
};

export default Header;
