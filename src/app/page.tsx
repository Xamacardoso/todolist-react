import Xama from "@/components/xama";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Xama texto={"meireles"} bg_text="bg-blue-500" />
      <Xama texto={"felipe"} />

      <Xama texto={"patro"} bg_text={"bg-pink-500"} />
      <Xama bg_text="bg-green-500" texto="herminio" />
    </div>
  );
}
