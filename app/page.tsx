import EarningsBoard from "@/components/EarningsBoard";
import ImportComponents from "@/components/ImportComponents";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import ShineBorder from "@/components/magicui/shine-border";
import FAQ from "@/components/FAQ";

export default async function Home() {
  return (
    <>
      <div className="h-[90%] flex flex-col justify-center items-center">
        <h1 className="z-10 text-5xl font-extrabold text-gray-800 text-center leading-relaxed p-3">
          Visualize Your <span className="text-green-600">Sucess:</span> Track
          Your Live <span className=" text-purple-500">Stripe</span>{" "}
          Transactions <br /> Instantly on{" "}
          <span className=" text-white px-2 rotated-bg">Your Site!</span>
        </h1>

        <h2 className="z-10 font-semibold text-gray-800 mt-8 text-lg">
          Enhance Your Project with Stripe Earnings Board: A Next.js Component
        </h2>

        <div className="z-10 mt-8">
          <ImportComponents />
        </div>
        {/* buttons */}
        <div className=" z-10 w-[50%] flex items-center justify-center gap-5 mt-9">
          <Link
            target="_blank"
            href={"https://buy.stripe.com/test_cN228p4jv1H5gIU6or"}
          >
            <Button size={"lg"} className=" font-bold">
              Get Your Own Stripe Earnings Board
            </Button>
          </Link>
          <Link href={"/#board"}>
            <Button size={"lg"} className=" font-bold" variant={"secondary"}>
              Live Demo 👇
            </Button>
          </Link>
        </div>
      </div>

      <div id="board" className="flex items-center justify-center mb-10">
        <EarningsBoard />
      </div>

      <div id="faq" className=" flex items-center justify-center">
        <FAQ />
      </div>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        )}
      />
    </>
  );
}
