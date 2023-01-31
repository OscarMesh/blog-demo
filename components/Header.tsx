import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>The OscarMesh</h1>
      </div>

      <div>
        <Link
          href="https://portfolio-oscarmesh.vercel.app/"
          target="_blank"
          className="px-5 py-3 text-sm md:text-base font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Visit my portfolio
        </Link>
      </div>
    </header>
  );
}

export default Header;
