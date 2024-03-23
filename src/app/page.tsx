import CollectionSpotlight from "@/components/CollectionSpotlight";
import Sports from "@/components/Sports";

export default function Home() {
  return (
    <main className="  dark:bg-darkBackground   bg-lightBackground min-h-screen dark:text-darkText text-lightText  max-w-screen overflow-hidden">
      <div className="lg:w-[88%] sm:w-11/12 w-full mx-auto py-10  overflow-hidden flex flex-col gap-20">
        <Sports />
        <CollectionSpotlight />
      </div>
    </main>
  );
}
