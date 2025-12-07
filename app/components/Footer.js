'use client';
import { usePathname } from 'next/navigation';


export default function Footer() {
  const pathname = usePathname();

  // Pages where footer should be hidden
  const hidePages = ["/breed-selector", "/results","/breeds","/breeds/[breed]",'/health-guide',"/food-guide","/login","/training-guide"];
  const hideFooter = hidePages.includes(pathname);

  if (hideFooter) return null; // ✅ hide footer

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <h2>BreedLy <span className="paw">🐾</span></h2>
          <p>Find your pawfect match — happy dogs, happy homes.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/breed-selector">Breed Selector</a>
          <a href="/breeds">Breed Info</a>
          <a href="/health-guide">Health</a>
          <a href="/food-guide">Food</a>
          <a href="/training-guide">Training</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>

        <p className="footer-contact">📧 hello@breedly.com</p>
        <p className="copyright">© 2025 BreedLy. All rights reserved.</p>
      </div>
    </footer>
  );
}
