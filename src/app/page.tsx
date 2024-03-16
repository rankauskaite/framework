import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import logo from '../images/baiturgus_transparent.png'
import ManLaptop from '../images/man_laptop.jpg'
import "../styles/index.css";
import Link from "next/link";

export default function Home() {
  return (
    <body>
      <header>
        <div className="header-container">
            <div className="logo">
                <img src={logo.src} alt="Baiturgus Logo"/>
            </div>

            <nav className="navbar">
                <Link href="/login" className="login-btn">
                Login
                </Link>
                
            </nav>
        </div>
    </header>
    <section className="hero">
        <div className="hero-container">
            <div className="hero-text">
                <h1>Digital market, real profit</h1>
                <p>Explore, Craft, and Share Awesome Digital Creations with Baiturgus</p>
                <a href="signup.html" className="btn">Start Selling Now</a>
            </div>
            <div className="hero-image">
                <img src={ManLaptop.src} alt="Digital Products"/>
            </div>
        </div>
    </section>

    <section className="testimonial">
        <div className="container">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-content">
                <div className="testimonial-item">
                    <p>"Baiturgus has transformed my digital business! Highly recommended!"</p>
                    <span>- Jane Smith, Digital Entrepreneur</span>
                </div>
                <div className="testimonial-item">
                    <p>"The platform is user-friendly and offers great exposure for my products."</p>
                    <span>- John Doe, Digital Creator</span>
                </div>
            </div>
        </div>
    </section>
    <section className="become-seller">
        <div className="container">
            <div className="seller-container">
                <h2>Become a Seller</h2>
                <p>Start selling your digital products today!</p>
                <a href="signup.html" className="btn">Get Started</a>
            </div>
            
        </div>
    </section>
    <footer>
        <div className="container">
            <p>&copy; 2024 Baiturgus. All rights reserved.</p>
            <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>
    </body>
  );
}
