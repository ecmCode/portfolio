import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
const routes = [
  // { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blogs", link: "/blogs" },
];

const Navbar = ({
  darkmode,
  setDarkmode,
}: {
  darkmode: boolean | null;
  setDarkmode: React.Dispatch<SetStateAction<boolean | null>>;
}) => {
  const router = useRouter();
  return (
    <nav className="relative">
      <ul
        className="fixed w-full flex gap-10 justify-center items-center
        py-4 px-8 backdrop-blur-md z-50
        bg-slate-100/30 dark:bg-slate-900/30
        ring-1 ring-slate-300 dark:ring-slate-700"
      >
        <li className="text-lg md:text-xl">
          <Link
            href="/"
            className={
              router.pathname === "/"
                ? "text-slate-900 dark:text-slate-100 underline underline-offset-2"
                : "hover:text-slate-500 dark:hover:text-slate-400"
            }
          >
            Home
          </Link>
        </li>

        {routes.map((route) => (
          <li
            key={route.name.toLowerCase()}
            className="text-lg md:text-xl"
          >
            <Link
              href={route.link}
              className={
                router.pathname.includes(route.link)
                  ? "text-slate-900 dark:text-slate-100 underline underline-offset-2"
                  : "hover:text-slate-500 dark:hover:text-slate-400"
              }
            >
              {route.name}
            </Link>
          </li>
        ))}
        <button
          onClick={() => setDarkmode((prev) => !prev)}
          className="text-2xl"
        >
          {darkmode ? (
            <BsMoonStars className="darkmode-icon" />
          ) : (
            <BsSun className="darkmode-icon" />
          )}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
