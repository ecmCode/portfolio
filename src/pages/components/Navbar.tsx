import Link from "next/link";
import style from "./styles/Navbar.module.css"

const Navbar = () => {

    return (
        <nav className="relative">
            <ul className={style.nav}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/blogs">Blogs</Link>
                </li>
            </ul>
            <div className={style.fade}></div>
        </nav>
    );
}
 
export default Navbar;