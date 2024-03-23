import CollectionSpotlight from "@/components/CollectionSpotlight";
import Sports from "@/components/Sports";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="md:px-20 lg:px-24 sm:px-10 px-5 py-10 font-popps dark:bg-darkBackground   bg-lightBackground min-h-screen dark:text-darkText text-lightText">
    <main className="  dark:bg-darkBackground   bg-lightBackground min-h-screen dark:text-darkText text-lightText  max-w-screen overflow-hidden">
      <div className="lg:w-[88%] w-11/12 mx-auto py-10  overflow-hidden flex flex-col gap-20">
        <Sports />
        <CollectionSpotlight />
      </div>
    </main>
  );
}
