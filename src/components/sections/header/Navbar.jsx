import { cn } from "../../../lib/utils";
import { Menu, Smartphone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#services" },
  { name: "Sobre", href: "#about" },
  { name: "Contato", href: "#contact" }
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full left-0 top-0 z-40 transition-all duration-300",
          isScrolled ? "py-3 glass-effect" : "bg-transparent py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center space-x-2"
            href="#home"
            onClick={() => setIsMenuOpen(false)}
          >
            <Smartphone className="h-8 w-8 text-[var(--color-1)]" />
            <span className="text-2xl font-bold gradient-text">
              TechFix
            </span>
          </a>

          {/* desktop */}

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-white hover:text-[var(--color-1)] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white">
              Orçamento
            </Button>
          </div>
        </div>
      </nav>

      {/* mobile */}

      <Button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden p-2 text-white z-50 fixed top-2 right-4 pointer-events-auto"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
      </Button>

      <div
        className={cn(
          "fixed inset-0 bg-background/99 backdrop-blur-3xl z-[49] flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 bg-background/99 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl text-white w-full items-center h-full justify-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-white hover:text-[var(--color-1)] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white">
            Orçamento
          </Button>
        </div>
      </div>
    </>
  );
};