import Link from "next/link";

export  function Footer(){
    return(
        <div >
            <ul>
            <li > 
                <Link href="/">Contect-us</Link>
                </li>
            <li > 
                <Link href="/information">Information</Link>
                </li>
            <li > 
                <Link href="/links">Links</Link>
                </li>
            <li > 
                 <Link href="/privacy"> Privacy Policy</Link>
                 </li>
            </ul>
        </div>
    )
}