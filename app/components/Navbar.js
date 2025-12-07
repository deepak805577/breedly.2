'use client';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Pages where the navbar should be hidden
  const hidePages = ["/breed-selector", "/results","/breeds","/[breed]","/food-guide","/login","/training-guide"];
  const hideNav = hidePages.includes(pathname);

  if (hideNav) return null; // 🔥 Hide Navbar completely
const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  window.location.href = "/login";
};

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/assets/dog (2).png" alt="BreedLy Logo" className="logo-img" />
        <div className="logo-text">
          <h1>BreedLy 🐾</h1>
          <span>Know about Paws</span>
        </div>
      </div>

      <ul className="nav-center" id="mobile-menu">
        <li><a href="/login">Register</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/breed-selector">Breed Selector</a></li>
        <li><a href="/breeds">Breed Info</a></li>
        <li><a href="/health-guide">Health</a></li>
        <li><a href="/food-guide">Food</a></li>
        <li><a href="/training-guide">Training</a></li>
        <li><a href="#">Contact</a></li>
        
      </ul>

      <div className="nav-right">
        <a href="/breeds" className="search-icon">🔎</a>
        <a href="/login" className="btn-primary">🐶 Register</a>
      </div>

      <button className="hamburger" id="hamburger-btn" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function () {
              const btn = document.getElementById("hamburger-btn");
              const menu = document.getElementById("mobile-menu");
              if (btn && menu) {
                btn.addEventListener("click", () => menu.classList.toggle("show"));
              }
            });
          `,
        }}
      />
    </nav>
  );
}
