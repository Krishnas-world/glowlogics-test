import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-orange-200">
      {/* We need to make a landing page for glowlogics */}
      <h2 className="text-4xl font-bold mb-4 text-black">Welcome to GlowLogics!</h2>
      <p className="text-lg mb-8 text-black">Innovative Solutions for Modern Problems</p>
      
    </div>
  );
}
