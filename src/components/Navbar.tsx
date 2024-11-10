


import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="bg-gray-800 text-white">
            <ul className="flex flex-col md:flex-row justify-around items-center p-4 space-y-4 md:space-y-0">
                <li>
                    <Link href="/" className="hover:text-blue-500">Home </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-blue-500">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/contact"  className="hover:text-blue-500">
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link href="/skills"  className="hover:text-blue-500">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link href="/experience"  className="hover:text-blue-500">
                        Experience
                    </Link>
                </li>
                <li>
                    <Link href="/projects"  className="hover:text-blue-500">
                        Projects
                    </Link>
                </li>
               
            </ul>
        </div>
    );
}
