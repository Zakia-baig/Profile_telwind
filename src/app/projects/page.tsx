
// pages/projects.js

import atm from "@/public/atm.jpg";
import calculator from "@/public/calculator.jpg";
import guessinggame from "@/public/guessinggame.jpg";
import countdowntimer from "@/public/countdowntimer.jpg";
import currencyconverter from "@/public/currencyconverter.jpg";
import Image from "next/image";




export default function Projects() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Projects</h1>
        <p className="text-gray-600 text-lg mt-2">
          Here are some of the projects I have developed as a web developer, designer, and SEO expert. Each project showcases my skills in frontend and backend development, UI/UX design, and effective SEO strategies.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4">
          <Image src="/atm.jpg" alt="ATM Machine Project" width={300} height={1500} className="rounded mb-4  object-cover" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">ATM Machine Simulation</h2>
          <p className="text-gray-600">
            An interactive simulation of an ATM machine, built to enhance functionality and security while allowing users to perform basic banking tasks.
          </p>
        </div>
        <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4">
          <Image src="/calculator.jpeg" alt="Calculator Project" width={500} height={300}  className="rounded mb-4  object-cover" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Custom Calculator</h2>
          <p className="text-gray-600">
            Developed a user-friendly calculator with clear functionality and precision, ideal for basic and advanced calculations.
          </p>
        </div>
        <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4">
          <Image src="/guessinggame.jpg" alt="Guessing Game Project" width={500} height={300} className="rounded mb-4 object-cover" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Guessing Game</h2>
          <p className="text-gray-600">
            A fun, interactive guessing game where users attempt to guess the correct number within limited tries, enhancing engagement and interactivity.
          </p>
        </div>
        <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4">
          <Image src="/countdowntimer.jpg" alt="Countdown Timer Project" width={500} height={300} className="rounded mb-4  object-cover" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Countdown Timer</h2>
          <p className="text-gray-600">
            Created a countdown timer application that provides real-time countdowns, ideal for tasks requiring precise timing.
          </p>
        </div>
        <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4">
          <Image src="/currencyconverter.jpg" alt="Currency Converter Project" width={500} height={300} className="rounded mb-4  object-cover" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Currency Converter</h2>
          <p className="text-gray-600">
            Designed a currency converter app that provides real-time conversion rates, enhancing financial accessibility for users worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
