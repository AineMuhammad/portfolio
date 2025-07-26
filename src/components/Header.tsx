import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills3d" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          Ain e Muhammad
        </a>

        <nav>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#b6bedc",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "0.5rem",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(16, 19, 26, 0.98)",
            backdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(80, 90, 120, 0.12)",
            padding: "1rem 0",
          }}
        >
          <div className="container">
            <nav style={{ flexDirection: "column", gap: "0.5rem" }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ padding: "0.75rem 1rem" }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
