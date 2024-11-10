

import Image from "next/image";


import Link from "next/link";

export default function Home() {
    return (
      <div className="home-container flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="image-container w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
          <Image src="/portfolio1.jpg" alt="Zakia Baig" width={500}  height={500} className="   object-center" />
        </div>
        <div className="text-container mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Hi, I'm Zakia Baig</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mt-2">Frontend Developer</h2>
          <p className="mt-4 text-gray-500 max-w-md">
            Passionate about building beautiful and functional websites. I specialize in crafting responsive, user-friendly interfaces with the latest frontend technologies. Let's create something amazing together!
          </p>
        </div>
      </div>
    );
  }
  
