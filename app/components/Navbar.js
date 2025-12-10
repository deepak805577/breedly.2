"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  // Pages where navbar should be hidden
  const hidePages = [
    "/breed-selector",
    "/results",
    "/breeds",
    "/[breed]",
    "/food-guide",
    "/login",
    "/training-guide"
  ];

  const hideNav = hidePages.includes(pathname);
  const navClass = hideNav ? "hide-nav" : "";

  return (
    <div className={navClass}>
      {/* 💻 Desktop Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="/assets/dog (2).png" alt="BreedLy Logo" className="logo-img" />
          <div className="logo-text">
            <h1>BreedLy 🐾</h1>
            <span>Know about Paws</span>
          </div>
        </div>

        <ul className="nav-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/breed-selector">Breed Selector</Link></li>
          <li><Link href="/breeds">Breed Info</Link></li>
          <li><Link href="/health-guide">Health</Link></li>
          <li><Link href="/food-guide">Food</Link></li>
          <li><Link href="/training-guide">Training</Link></li>
          <li><Link href="/login">Register</Link></li>
        </ul>

        <div className="nav-right">
          <Link href="/breeds" className="search-icon">🔎</Link>
          <Link href="/login" className="btn-primary">🐶 Register</Link>
        </div>
      </nav>

      {/* 📱 Mobile Bottom Navigation */}
      <div className="bottom-nav">
        <Link href="/" className={pathname === "/" ? "active-bottom" : ""}>
          <img src="/assets/icons/home.png" alt="Home" />
          <span>Home</span>
        </Link>

        <Link href="/breed-selector" className={pathname === "/breed-selector" ? "active-bottom" : ""}>
          <img src="/assets/icons/quiz.png" alt="Select" />
          <span>Selector</span>
        </Link>

        <Link href="/breeds" className={pathname === "/breeds" ? "active-bottom" : ""}>
          <img src="/assets/icons/info.png" alt="Breeds" />
          <span>Breeds</span>
        </Link>

        <Link href="/food-guide" className={pathname === "/food-guide" ? "active-bottom" : ""}>
          <img src="/assets/icons/food.png" alt="Food" />
          <span>Food</span>
        </Link>

        <Link href="/login" className={pathname === "/login" ? "active-bottom" : ""}>
          <img src="/assets/icons/profile.png" alt="Profile" />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
}
