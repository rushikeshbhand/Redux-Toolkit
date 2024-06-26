import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
    <h1 className="text-4xl font-extrabold text-zinc-700">Redux Toolkit Project For Begineers</h1>
    <h1>Click below to redirect to users page from where you can add or delete users 👇</h1>
    <button className="text-white bg-slate-800 px-3 py-2 hover:bg-slate-700 rounded-lg"> <Link href="/AddUsers">Users Page</Link></button>
    </div>
  );
}
